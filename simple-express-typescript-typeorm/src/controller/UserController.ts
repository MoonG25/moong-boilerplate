import { Router } from "express";
import UserService from "../service/UserService";

export default class UserController {
  public path = "/user";
  public router: Router;
  public service: UserService;

  constructor() {
    this.initServices();
    this.initRoutes();
  }

  // private initServices = (): void => {
  //   const connection: Connection = getConnectionManager().connections[0];
  //   this.service = new UserService(connection);
  // }

  private initServices = (): void => {
    // const connection: Connection = getConnectionManager().connections[0];
    this.service = new UserService();
  }

  private initRoutes = (): void => {
    this.router = Router();
    this.router.get(`${this.path}`, this.service.findAll);
    this.router.get(`${this.path}/:id`, this.service.findById);
  }
}