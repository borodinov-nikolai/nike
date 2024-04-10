import { ApiProperty } from '@nestjs/swagger';

export class AddProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  description: string
  @ApiProperty()
  gender: string;
  @ApiProperty()
  characteristics: Characteristics[];
  @ApiProperty()
  preview: string
}

type Characteristics = {
   name: string
   value: string
}

export class UpdateProductDto {
  @ApiProperty()
  name?: string;
  @ApiProperty()
  price?: number;
  @ApiProperty()
  description: string
  @ApiProperty()
  gender: string;
  @ApiProperty()
  characteristics: Characteristics[];
  @ApiProperty()
  preview: string
}