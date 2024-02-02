import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { DbService } from './db/db.service';

class HelloWorldDto {
  @ApiProperty()
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly dbService: DbService) {}
  @Get()
  @ApiOkResponse({
    type: HelloWorldDto,
  })
  async getHello() {
    const users = await this.dbService.user.findMany({})
    return { message: 'Hello world' };
  }
}
