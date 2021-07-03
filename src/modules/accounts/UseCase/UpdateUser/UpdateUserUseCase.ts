import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../infra/typeorm/Repositories/IUserRepository";
import 'reflect-metadata'
import { User } from "../../infra/typeorm/entities/User";
import { AppError } from "../../../../shared/errors/AppError";



@injectable()
export class UpdateUserUseCase{

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute( data : ICreateUserDTO, id:string): Promise<User>{

    const user = await this.userRepository.findById(id)

    if(!user){
      throw new AppError("User not found")
    }

    const updatedUser = await this.userRepository.update(data, id)

    return updatedUser
  }
}