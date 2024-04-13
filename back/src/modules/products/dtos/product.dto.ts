import { ApiProperty } from '@nestjs/swagger';
import { JsonValue } from '@prisma/client/runtime/library';

export class AddProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string
  @ApiProperty()
  price: number;
  @ApiProperty()
  oldPrice?: number;
  @ApiProperty()
  preview: number
  @ApiProperty()
  gender: string;
  @ApiProperty()
  sizes?: number[];
  @ApiProperty()
  materials?: number[];
  @ApiProperty()
  images?: number[];
  @ApiProperty()
  categories?: number[];
  @ApiProperty()
  colors?: number[];
  @ApiProperty()
  characteristics?: JsonValue;

}



export class UpdateProductDto {
  @ApiProperty()
  name?: string;
  @ApiProperty()
  description?: string
  @ApiProperty()
  price?: number;
  @ApiProperty()
  oldPrice?: number;
  @ApiProperty()
  preview?: number
  @ApiProperty()
  gender?: string;
  @ApiProperty()
  sizes?: number[];
  @ApiProperty()
  materials?: number[];
  @ApiProperty()
  images?: number[];
  @ApiProperty()
  categories?: number[];
  @ApiProperty()
  colors?: number[];
  @ApiProperty()
  characteristics?: JsonValue[];

}