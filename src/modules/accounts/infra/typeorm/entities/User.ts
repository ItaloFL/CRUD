
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity("users")
class User{

  @PrimaryColumn()
  id: string

  @Column()
  email: string
  
  @Column()
  username: string

  @Column()
  password: string

  @Column()
  CPF: string

  @Column()
  data_nascimento: string

  @CreateDateColumn()
  created_at: Date



  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }

}

export { User }