import { ApiProperty } from '@nestjs/swagger';

export class editProfileDto {
  @ApiProperty()
  login: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phoneNumber: string;
}
