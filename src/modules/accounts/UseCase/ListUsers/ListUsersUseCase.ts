import { inject, injectable } from "tsyringe";
import { User } from "../../infra/typeorm/entities/User";
import { IUserRepository } from "../../infra/typeorm/Repositories/IUserRepository";
import 'reflect-metadata'



@injectable()
export class ListUsersUseCase{

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute(): Promise<User[]>{

    const allUsers = await this.userRepository.list()

    return allUsers
  }
}