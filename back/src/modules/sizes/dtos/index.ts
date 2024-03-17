import { ApiProperty } from "@nestjs/swagger";




export class AddSizeDto {
    @ApiProperty()
    value: string
}


export class DeleteSizeDto {
    @ApiProperty()
    id: number
}