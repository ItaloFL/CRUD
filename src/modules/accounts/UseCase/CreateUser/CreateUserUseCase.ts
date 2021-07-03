import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../infra/typeorm/Repositories/IUserRepository";
import { hash } from 'bcryptjs'
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
export class CreateUserUseCase{

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute( { email, data_nascimento, CPF ,password, username } : ICreateUserDTO): Promise<void>{

    const user = await this.userRepository.findByEmail(email)
    

    if(user){
      throw new AppError("User Already Exist.")
    }

      const passwordHash = await hash(password, 8)

      await this.userRepository.create({ 
      CPF,
      email,
      data_nascimento,
      password: passwordHash,
      username
    })
    
  }
}


