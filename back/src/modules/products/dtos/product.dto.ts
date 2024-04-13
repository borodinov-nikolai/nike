import { ApiProperty } from '@nestjs/swagger';

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
  categories?: number[];
  @ApiProperty()
  colors?: number[];
  @ApiProperty()
  characteristics?: Characteristics[];

}

type Characteristics = {
   name: string
   value: string
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
  categories?: number[];
  @ApiProperty()
  colors?: number[];
  @ApiProperty()
  characteristics?: Characteristics[];

}