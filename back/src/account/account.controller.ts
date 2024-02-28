import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { editProfileDto } from './dtos/editProfile.dto';
import { Request } from 'express';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

@ApiTags('account')
@UseGuards(RolesGuard)
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiOperation({
    summary: 'редактирвание профиля'
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: User
  })
  @Roles(["ADMIN","USER"])
  @Post('/edit')
  editProfile(@Body() body: editProfileDto, @Req() req: Request){
    return this.accountService.editProfile({body, req})
  }
}
