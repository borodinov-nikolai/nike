import { ApiProperty } from "@nestjs/swagger"


export class User{
   @ApiProperty()
   id: number
   @ApiProperty()
   email: string
   @ApiProperty()
   password: string
   @ApiProperty()
   login: string
   @ApiProperty()
   phone_number: string
   @ApiProperty()
   name?: string
   @ApiProperty()
   surname?: string
}

