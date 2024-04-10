import { ApiProperty } from '@nestjs/swagger';
import { JsonValue } from '@prisma/client/runtime/library';
import { Color } from 'src/modules/colors/entities';

export class Product {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  preview: string
  @ApiProperty()
  characteristics: JsonValue[]
  @ApiProperty()
  gender: string;
  @ApiProperty()
  colors?: Color[]
  @ApiProperty()
  createdAt?: Date;
  @ApiProperty()
  updatedAt?: Date;
}

