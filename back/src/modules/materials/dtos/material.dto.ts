import { ApiProperty } from "@nestjs/swagger"

export class AddMaterialDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    value: string
}