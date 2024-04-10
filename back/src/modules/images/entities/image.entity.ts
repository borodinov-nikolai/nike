import { ApiProperty } from "@nestjs/swagger";



export class Image {
  @ApiProperty()
  id: number
  @ApiProperty()
  url: string
  @ApiProperty()
  createdAt: Date
  @ApiProperty()
  updatedAt: Date
}