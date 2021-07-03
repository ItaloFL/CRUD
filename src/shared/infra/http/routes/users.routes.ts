import { Router } from "express";
import { CreateUserController } from "../../../../modules/accounts/UseCase/CreateUser/CreateUserController";
import { DeleteUserController } from "../../../../modules/accounts/UseCase/DeleteUser/DeleteUserController";
import { ListUsersController } from "../../../../modules/accounts/UseCase/ListUsers/ListUsersController";
import { UpdateUserController } from "../../../../modules/accounts/UseCase/UpdateUser/UpdateUserController";
import { ensureAutenticate } from "../middlewares/ensureAutenticate";


const usersRouter = Router()

const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const listUserController = new ListUsersController()
const updateUserController = new UpdateUserController()

usersRouter.post("/user", createUserController.handle)
usersRouter.delete("/deleteUser",ensureAutenticate, deleteUserController.handle)
usersRouter.get("/list", ensureAutenticate ,listUserController.handle)
usersRouter.put("/update", ensureAutenticate, updateUserController.handle)


export { usersRouter }