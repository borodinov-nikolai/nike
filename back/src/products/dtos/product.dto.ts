import { ApiProperty } from '@nestjs/swagger';

export class AddProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  categories: number[];
  @ApiProperty()
  image: string;
}

export class DeleteProductDto {
  @ApiProperty()
  id: number
}


export class UpdateProductDto {
  @ApiProperty()
  name?: string;
  @ApiProperty()
  price?: number;
  @ApiProperty()
  categories?: number[];
  @ApiProperty()
  image?: string;
}