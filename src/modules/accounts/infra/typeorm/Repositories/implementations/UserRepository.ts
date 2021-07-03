import { getRepository, UpdateResult, Repository, DeleteResult } from "typeorm";
import { ICreateUserDTO } from "../../../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";



class UserRepository implements IUserRepository{

  private repository: Repository<User>

  constructor(){
    this.repository = getRepository(User)
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      email
    })

    return user
  }
  
 
  async create({username, email, CPF, password, data_nascimento}: ICreateUserDTO):Promise<void> {
    
    const user = this.repository.create({
      username,
      password,
      email,
      data_nascimento,
      CPF,
      
    })

    await this.repository.save(user)
  }

  async findById(id: string): Promise<User> {
    
    const user = await this.repository.findOne(
      id
    )

    return user
  }

  async delete( data : ICreateUserDTO): Promise<void> {
    
    const user = await this.repository.delete({
      id: data.id
    })

    
  }

  async update( data : ICreateUserDTO, id: string): Promise<User> {
    
    let user = await this.repository.findOne({
      id
    }) 

    user = { ...user, ...data}

    await this.repository.save(user)

    return user
  }

  async list(): Promise<User[]> {
    
    return await this.repository.find()
  }
  

}


export { UserRepository }