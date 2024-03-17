import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/modules/products/entities/product.entity";




export class Category {
    @ApiProperty()
    id: number
    @ApiProperty()
    name: string
    @ApiProperty()
    value: string
    @ApiProperty()
    products?: Product[]
    @ApiProperty()
    createdAt?: Date;
    @ApiProperty()
    updatedAt?: Date;
}