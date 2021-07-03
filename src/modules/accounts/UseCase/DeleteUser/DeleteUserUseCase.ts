import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../infra/typeorm/Repositories/IUserRepository";
import 'reflect-metadata'
import { AppError } from "../../../../shared/errors/AppError";



@injectable()
export class DeleteUserUseCase{

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute( { email, username, password, CPF, data_nascimento } : ICreateUserDTO): Promise<void>{

    const user = await this.userRepository.findByEmail(email)

    if(!user){
      throw new AppError("User not found")
    }

    await this.userRepository.delete({
      username,
      email,
      password,
      CPF,
      data_nascimento, 
    })

  }
}