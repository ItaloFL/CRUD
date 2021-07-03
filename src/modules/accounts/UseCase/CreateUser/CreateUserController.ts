import { Request, Response } from "express";
import { container } from 'tsyringe'
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController{

  async handle(request: Request, response: Response): Promise<Response>{
    const { data_nascimento, email, CPF ,password, username } = request.body

    const createUserUseCase = container.resolve(CreateUserUseCase)

    await createUserUseCase.execute({
      data_nascimento, email, CPF ,password, username
    })

    return response.status(201).json({
      message: "Usuario criado com sucesso, seja bem vindo!"
    })
  }
}