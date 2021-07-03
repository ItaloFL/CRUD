import { Router } from "express";
import { AutenticateUserController } from "../../../../modules/accounts/UseCase/autenticateUser/AutenticateUserController";

const autenticateRouter = Router()

const autenticateUserController = new AutenticateUserController()

autenticateRouter.post("/login", autenticateUserController.handle)


export { autenticateRouter }