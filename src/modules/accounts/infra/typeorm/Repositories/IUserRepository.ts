import { DeleteResult, UpdateResult } from "typeorm";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { User } from "../entities/User";




export interface IUserRepository{

  create(data: ICreateUserDTO):Promise<void>
  findById(id: string):Promise<User>
  delete(data: ICreateUserDTO):Promise<void>
  update(data: ICreateUserDTO, id: string): Promise<User>
  list(): Promise<User[]>
  findByEmail(email: string): Promise<User>
  

}


