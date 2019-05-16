import { NextFunction, Request, Response, Router } from "express";
import { Connection, Repository } from "typeorm";

export interface IRepository {
  repository: Repository<any>;

  findById(id: number | string): Promise<any>;
  findAll(): Promise<any>;
}

export interface IService {
  repository: IRepository;

  initRepositories(connection: Connection): void;
  findAll(req: Request, res: Response, next?: NextFunction): void;
  findById(req: Request, res: Response, next?: NextFunction): void;
}

export interface IController {
  path: string;
  router: Router;

  initService(): void;
  initRoutes(): void;
}

/**
 * @description 리포지토리에서 반환하는 결과
 * @member {string} message 결과에 대한 설명
 * @member {string} code 결과 코드
 * @member {number} status 상태 코드
 * @member {boolean} isError 에러 유무
 * @member {any | undefined} result 결과값
 */
export interface IResponse {
  message: string;  // success
  code: string;     // A000
  status: number;   // 200
  isError: boolean; // true or false
  result?: any;     // {}
}