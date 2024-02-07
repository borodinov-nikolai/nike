import { ConflictException, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateUserDto } from './dtos/users.dto';

@Injectable()
export class UsersService {
 constructor(private db: DbService){}


 getUserById(id:number){
   return this.db.user.findUnique({
      where: {
       id
      },
      select:{
         id: true,
         email: true,
         login: true,
         phoneNumber: true,
         createdAt: true
      }
   })
 }

 getUserByEmail(email: string){
   return this.db.user.findUnique({
      where: {
       email
      },
      select:{
         id: true,
         email: true,
         login: true,
         phoneNumber: true,
         createdAt: true,
         role: true,
         password: true
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
      data,
      select:{
         id: true,
         email: true,
         login: true,
         phoneNumber: true,
         createdAt: true,
         role: true
      }
    })
 }




 updateUser(){}

 removeUser(){}
}
