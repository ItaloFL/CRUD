import { Request, Response } from "express";
import { container } from "tsyringe";
import { AutenticateUserUseCase } from "./AutenticateUserUseCase";





export class AutenticateUserController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { password, email } = request.body

    const autenticateUserUseCase = container.resolve(AutenticateUserUseCase)

    const token = await autenticateUserUseCase.execute({
      password, 
      email
    })

    return response.status(200).json(token)
  }
}