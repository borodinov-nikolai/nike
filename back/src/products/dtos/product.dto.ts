import { ApiProperty } from '@nestjs/swagger';

export class AddProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  categoryId: number;
  @ApiProperty()
  image: string;
}

export class DeleteProductDto {
  @ApiProperty()
  id: number
}
