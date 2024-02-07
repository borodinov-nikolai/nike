import { ApiProperty } from "@nestjs/swagger"



export class User{
   @ApiProperty()
   id: number
   @ApiProperty()
   email: string
   @ApiProperty()
   login: string
   @ApiProperty()
   role?: "ADMIN"|"MODERATOR"|"AUTHOR"|"USER"
   @ApiProperty()
   phoneNumber: string
   @ApiProperty()
   name?: string
   @ApiProperty()
   surname?: string
   @ApiProperty()
   isActivate?: boolean
   @ApiProperty()
   banned?: boolean
   @ApiProperty()
   createdAt?: Date
   @ApiProperty()
   updatedAt?: Date
}



