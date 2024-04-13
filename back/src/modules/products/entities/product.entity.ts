import { ApiProperty } from '@nestjs/swagger';
import { JsonValue } from '@prisma/client/runtime/library';
import { Color } from 'src/modules/colors/entities';
import { Image } from 'src/modules/images/entities/image.entity';

export class Product {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  characteristics: JsonValue[]
  @ApiProperty()
  gender: string;
  @ApiProperty()
  colors?: Color[]
  @ApiProperty()
  materials?: Color[]
  @ApiProperty()
  categories?: Color[]
  @ApiProperty()
  images?: Image[]
  @ApiProperty()
  preview?: Preview
  @ApiProperty()
  createdAt?: Date;
  @ApiProperty()
  updatedAt?: Date;
}

type Preview = {
  id: number,
  name: string,
  createdAt: Date,
  updatedAt: Date
}