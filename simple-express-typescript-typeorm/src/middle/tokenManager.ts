import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export default class TokenManager {
  private redis: any;
  private badUrls: string[];

  constructor() {
    this.initRedis();
    this.initBadUrls();
  }

  public refresh = async (req: any, res: Response, next: NextFunction) => {
    if (this.guard(req.url)) {
      console.log('[GUARD_TRUE]');
      next();
    }
    console.log('[GUARD_FALSE]');
    const uuid = this.getUUIDFromHeader(req);
    if (uuid) {
      try {
        const token: any = await this.getTokenFromRedis(uuid);
        const secret: string = this.getTokenInfoByUrl(req.url);
        const decoded: any = this.tokenVerify(token, secret);
        if (decoded) {
          req.decodedToken = decoded;
          console.log('[JSON_WEB_TOKEN]', decoded);
          this.createAndStoreToken(uuid, decoded.email, secret);
          return next();
        }
      } catch (err) {
        console.error('[TOKEN_MANAGER_REFRESH]', err);
      }
    }
  }

  private initRedis = (): void => {
    this.redis = global.redis;
  }

  private initBadUrls = (): void => {
    this.badUrls = [];
  }

  private guard = (url: string): boolean => {
    return this.badUrls.some(badUrl => url.includes(url));
  }
  
  private getUUIDFromHeader = (req: Request): string => {
    const headerName: string = 'authorization';
    const tokenType: string = 'bearer ';
    const tokenValue: any = req.headers[headerName];

    // bearer token 확인
    if (!tokenValue || !tokenValue.startsWith(tokenType)) {
      return '';
    }

    return tokenValue.substring(7);
  }

  private getTokenFromRedis = (uuid: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      await this.redis.connectionModule.hget('session', uuid, (err, token) => {
        if (err) {
          return reject(err);
        }
        return resolve(token);
      })
    })
  }

  private getTokenInfoByUrl = (url: string): string => {
    return "";
  }

  private tokenVerify = (token: string, secret: string): object | boolean => {
    let decoded: any;
    try {
      decoded = jwt.verify(token, secret);
      return decoded;
    } catch (err) {
      return false;
    }
  }

  private createAndStoreToken = async (uuid: string, email: string, secret: string): Promise<void> => {
    const token = jwt.sign(email, secret, { expiresIn: '1h' });
    await this.redis.connectionModule.hset('session', uuid, token);
  }
}