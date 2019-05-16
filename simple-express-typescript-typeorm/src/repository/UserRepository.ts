import { getConnection, Repository } from "typeorm";
import User from "../entity/User";
import { IRepository } from "../interface";

export default class UserRepository implements IRepository {
  public repository: Repository<User>;

  // constructor(connection: Connection) {
  //   this.repository = connection.getRepository(User);
  // }

  constructor() {
    this.initialize();
  }

  public findById = async (id: number): Promise<User> => {
    let user: User | undefined = await this.repository.findOne({ id });
    if (user === undefined) {
      user = new User();
    }
    return user;
  }

  public findAll = (): Promise<User[]> => {
    return this.repository.find();
  }

  private initialize = (): void => {
    this.repository = getConnection('write').getRepository(User);
  }
}