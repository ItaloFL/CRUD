import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import 'reflect-metadata'





export class DeleteUserController{

  async handle(request: Request, response: Response): Promise<Response>{

    const {  
      username,
      email,
      password,
      CPF,
      data_nascimento,
    } = request.body

    const deleteUserUseCase = container.resolve(DeleteUserUseCase)

    await deleteUserUseCase.execute({
      username,
      email,
      password,
      CPF,
      data_nascimento,
    })

    return response.status(204).json({
      message: "Usuario deletado com sucesso!"
    })
  }
}