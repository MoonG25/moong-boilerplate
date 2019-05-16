import { NextFunction, Request, Response } from "express";
import UserRepository from "../repository/UserRepository";

export default class UserService {
  private repository: UserRepository;

  // constructor(connection: Connection) {
  //   this.initRepository(connection);
  // }

  constructor() {
    this.initRepository();
  }

  public findAll = (req: Request, res: Response): void => {
    this.repository.findAll()
      .then(result => {
        console.log('[FIND_ALL__THEN', result);
        res.status(200).send({
          message: 'find all',
          code: 'U0000',
          result
        });
      })
      .catch(error => {
        console.error('[FIND_ALL__CATCH]', error);
        res.status(400).send({
          message: error.message,
          code: 'U0001'
        });
      });
  }

  public findById = (req: Request, res: Response, next: NextFunction): void => {
    const userId: number = req.params.id;
    this.repository.findById(userId)
      .then(result => {
        console.log('[FIND_BY_ID__THEN]', result);
        res.status(200).send({
          message: 'user found',
          code: 'U0000',
          result: result ? result : null
        });
      })
      .catch(error => {
        console.error('[FIND_BY_ID__CATCH]', error);
        res.status(500).send({
          message: error.message,
          code: 'U0001'
        });
      });
  }

  private initRepository = (): void => {
    this.repository = new UserRepository();
  }
}