import { Router } from "express";
import { usersRouter } from './users.routes'
import { autenticateRouter } from './autenticate.routes'


const routes = Router()

routes.use(usersRouter)
routes.use(autenticateRouter)


export { routes }