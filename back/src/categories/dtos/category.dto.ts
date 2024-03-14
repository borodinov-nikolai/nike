import { ApiProperty } from "@nestjs/swagger";




export class AddCategoryDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    value: string
}


export class DeleteCategoryDto {
    @ApiProperty()
    id: number
}