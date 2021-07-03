import 'reflect-metadata'
import { Request, Response, NextFunction} from 'express'
import express from 'express'
import 'express-async-errors'
import { routes } from './routes'
import '../typeorm/index'
import '../../container/index'
import { AppError } from '../../errors/AppError'




const server = express()

server.use(express.json())

server.use(routes)

server.use((err: Error, request: Request, response: Response, next:NextFunction) =>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
            
        })
        
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server Error - ${err.message}`
    })
})



server.listen(3333, () => {
    console.log("Server is running in port 3333")
})