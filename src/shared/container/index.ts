import {container} from 'tsyringe'
import { UserRepository } from '../../modules/accounts/infra/typeorm/Repositories/implementations/UserRepository'
import { IUserRepository } from '../../modules/accounts/infra/typeorm/Repositories/IUserRepository'


container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository
)
