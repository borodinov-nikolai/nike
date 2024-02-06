import { ConflictException, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateUserDto } from './dtos/users.dto';

@Injectable()
export class UsersService {
 constructor(private db: DbService){}

 getUser(email: string){
   return this.db.user.findUnique({
      where: {
       email
      }
   })
 }

 async createUser(data: CreateUserDto){
   const user = await this.db.user.findUnique({where:{
      email: data.email
   }})
   if(user){
      throw new ConflictException('User with this email already exists')
   }
    return this.db.user.create({
      data
    })
 }

 updateUser(){}

 removeUser(){}
}
