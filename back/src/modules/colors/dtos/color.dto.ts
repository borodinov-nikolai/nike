import { ApiProperty } from "@nestjs/swagger"

export class AddColorDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    value: string
}