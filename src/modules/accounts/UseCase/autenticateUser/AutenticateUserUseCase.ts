import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../infra/typeorm/Repositories/IUserRepository";
import { compare } from 'bcryptjs'
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../shared/errors/AppError";

interface IRequest{
  email: string
  password: string
}

interface IResponse{
  user:{
    email: string
    name: string
  }
  token: string
}

@injectable()
export class AutenticateUserUseCase{

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute({email, password}: IRequest): Promise<IResponse>{

    const user = await this.userRepository.findByEmail(email);

    if(!user){
      throw new AppError("Usuario não existente")
    }

    const passwordMatch = compare(password, user.password)

    if(!passwordMatch){
      throw new AppError("Senha incorreta, tente novamente!")
    }

    const token = sign({}, "2dc714e7e4d090ea2577a71e6147f1f8",{
      subject: user.id,
      expiresIn: "1d"
    })


    const tokenReturn : IResponse = {
      token,
      user:{
        name: user.username,
        email: user.email
      }
    }

    return tokenReturn
  }


}