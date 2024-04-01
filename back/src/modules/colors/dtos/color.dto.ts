import { ApiProperty } from "@nestjs/swagger"

export class colorDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    value: string
}