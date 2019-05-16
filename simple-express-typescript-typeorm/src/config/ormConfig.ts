import path from "path";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export default class DBConn {
  public options: MysqlConnectionOptions[];

  constructor(types: string[]){
    this.initOptions(types);
  }

  private initOptions = (types: string[]): void => {
    this.options = [];
    types.forEach((type: string) => {
      const newOption: MysqlConnectionOptions = this.createOption(type);
      this.options.push(newOption);
    })
  }
  
  private createOption = (type: string): MysqlConnectionOptions => {
    return {
      name: type,
      type: "mysql",
      database: "your database",
      synchronize: false,
      logging: ["query", "error"],
      entities: [
        path.join(__dirname + "/../entity/*.*")
      ],
      host: "your host",
      port: 3306,
      username: "your name",
      password: "your password",
      extra: {
        connectionLimit: 10,
      }
    }
  }
}