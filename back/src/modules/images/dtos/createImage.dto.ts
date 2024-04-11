import { ApiProperty } from "@nestjs/swagger";




export class CreateImageDto {
    @ApiProperty()
    name: string
}