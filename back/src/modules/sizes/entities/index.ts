import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/modules/products/entities/product.entity";




export class Size {
    @ApiProperty()
    id: number
    @ApiProperty()
    value: string
    @ApiProperty()
    products?: Product[]
    @ApiProperty()
    createdAt?: Date;
    @ApiProperty()
    updatedAt?: Date;
}