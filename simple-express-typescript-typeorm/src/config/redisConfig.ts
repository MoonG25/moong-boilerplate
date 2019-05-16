import redis from "redis";

export default class RedisConn {
  private port;
  private host;
  private auth;
  private connectionModule;

  constructor() {
    this.connection();
  }

  private connection = (): void => {
    const { master, host, auth } = {
      master: { port: 1234 },
      host: {},
      auth: {}
    };    // your redis options
    this.port = master.port;
    this.host = host;
    this.auth = auth;
    
    this.connectionModule = redis.createClient(this.port, this.host);
    this.connectionModule.AUTH(this.auth);
    this.connectionModule.on('connect', () => {
      console.log('[REDIS_CONNECT]');
    });
    this.connectionModule.on('error', (err) => {
      console.log('[REDIS_ERROR]', err);
    });
  }
}