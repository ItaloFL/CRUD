import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import 'reflect-metadata'




export class UpdateUserController{

  async handle(request: Request, response: Response): Promise<Response>{
    
    const data = request.body
    const { id } = request.body

    const updateUserUseCase = container.resolve(UpdateUserUseCase)

    await updateUserUseCase.execute(data, id)

    return response.status(204).json({
      message: "Informações atualizadas com sucesso"
    })
  }
}