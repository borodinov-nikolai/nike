import { ConflictException, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateUserDto, UpdateUserDto } from './dtos/users.dto';

@Injectable()
export class UsersService {
 constructor(private db: DbService){}


 getUserById(id: number | undefined){
   if(id) {
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
  
 }

 getUserByEmail(email: string | undefined){
   if(email){
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
   
 }

 async createUser(data: CreateUserDto){
   const user = await this.db.user.findUnique({where:{
      email: data.email
   }})
   const admin = await this.db.user.findFirst({where:{
      role: 'ADMIN'
   }})

   if(user){
      throw new ConflictException('User with this email already exists')
   }
  
   if(data.role === 'ADMIN' && data.role === admin?.role) {
     throw new ConflictException('Admin alredy exist')
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




 async updateUser({id, data}: {id: number, data:UpdateUserDto}){
    const updatedUser = await this.db.user.update({
      where: {
         id
      },
     data
    })
   return updatedUser

 }


 removeUser(){}
}
