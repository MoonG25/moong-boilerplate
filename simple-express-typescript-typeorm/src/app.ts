import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import logger from "morgan";
import { Connection, createConnections } from "typeorm";
import DBConn from "./config/ormConfig";
import RedisConn from "./config/redisConfig";
import TokenManager from "./middle/TokenManager";

class App {
  public app: Application;
  public port: number | string;
  public connections: Connection[];
  public URI_PREFIX: string = "/example";

  constructor(port: number | string, controllers: any[]) {
    this.app = express();
    this.port = port;

    this.connDatabases(controllers);
    this.connRedis();
  }

  public listen = (): void => {
    this.app.listen(this.port, () => {
      console.log(`listening on ${this.port}`);
    })
  }

  private initMiddlewares = (): void => {
    this.app.use(helmet());
    this.app.use(logger("tiny"));
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private initControllers = (controllers: any[]): void => {
    controllers.forEach(controller => {
      this.app.use(this.URI_PREFIX, new TokenManager().refresh, new controller().router);
    });
  }

  private connDatabases = async (controllers: any[]) => {
    const options: any[] = new DBConn(["write", "read"]).options;
    await createConnections(options).then(async connections => {
      this.connections = connections;
      console.log('database connection', connections.length);
      this.initMiddlewares();
      this.initControllers(controllers);
    }).catch(error => console.error(error));
  }

  private connRedis = (): void => {
    const redisConn = new RedisConn();
    global.redis = redisConn;
  }
}

export default App;