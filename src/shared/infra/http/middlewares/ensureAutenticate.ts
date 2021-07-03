import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { UserRepository } from "../../../../modules/accounts/infra/typeorm/Repositories/implementations/UserRepository";
import { AppError } from "../../../errors/AppError";

interface IPayload{
  sub: string
}

export async function ensureAutenticate(request: Request, response: Response, next: NextFunction){

  const authHeader = request.headers.authorization

  if(!authHeader){
    throw new AppError("Token faltando!")
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub: user_id } = verify(token, "2dc714e7e4d090ea2577a71e6147f1f8") as IPayload

    const userRepository = new UserRepository()

    const user = await userRepository.findById(user_id)

    if(!user){
      throw new AppError("Usuario não encontrado")
    }

    request.user = {
      id: user.id
    }

    return next()
  } catch{
    throw new AppError("Token Invalido")
  }
}