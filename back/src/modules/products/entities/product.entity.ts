import { ApiProperty } from '@nestjs/swagger';
import { Color } from 'src/modules/colors/entities';

export class Product {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  image: string;
  @ApiProperty()
  gender: string;
  @ApiProperty()
  colors?: Color[]
  @ApiProperty()
  createdAt?: Date;
  @ApiProperty()
  updatedAt?: Date;
}
