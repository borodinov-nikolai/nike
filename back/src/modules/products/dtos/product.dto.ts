import { ApiProperty } from '@nestjs/swagger';

export class AddProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  gender: string;
  @ApiProperty()
  image: string;
}


export class UpdateProductDto {
  @ApiProperty()
  name?: string;
  @ApiProperty()
  price?: number;
  @ApiProperty()
  gender: string;
  @ApiProperty()
  image?: string;
}