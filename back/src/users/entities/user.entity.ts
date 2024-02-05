import { ApiProperty } from "@nestjs/swagger"
import Prisma from "@prisma/client"

export class User implements Prisma.User{
   @ApiProperty()
   id: number
   @ApiProperty()
   email: string
   @ApiProperty()
   password: string
}

