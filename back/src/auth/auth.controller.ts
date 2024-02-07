import { Body, Controller, Get, Post, Req, Res, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { Request, Response } from 'express';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

@ApiTags('auth')
@UseGuards(RolesGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

    @Roles(['ALL'])
    @Post('sign-up')
    @ApiOperation({
      summary: 'регистрация нового пользователя'
    })
    @ApiResponse({
      status: 201,
      description: 'успешная регистрация нового пользователя',
      type: User
    })
    signUp(@Body() body: AuthDto, @Res({passthrough: true}) res:Response):Promise<User>{
      return this.authService.signUp(body, res)
    }


    @Roles(['ALL'])
    @Post('sign-in')
    @ApiOperation({
      summary: 'авторизация пользователя'
    })
    @ApiResponse({
      status: 200,
      description: 'авторизация прошла успешно',
      type: User
    })
    signIn(@Body() body: AuthDto,  @Res({passthrough: true}) res:Response):Promise<User>{
      return this.authService.signIn(body, res)
    }


    @ApiOperation({
      summary: 'получить свои данные'
    })
 
    @Roles(['ADMIN',"MODERATOR","USER"])
    @Get('me')
    getMe(@Req() req: Request):Promise<User>{
      return this.authService.getMe(req)
    } 


    @Roles(['ALL'])
    @Get('refresh')
    @ApiOperation({
      summary: 'Обновление токенов'
    })
    @ApiResponse({
      status: 201,
      description: 'успешное обновление токена',
      type: String
    })
    refresh(@Req() req:Request,  @Res({passthrough: true}) res:Response){
      return this.authService.refresh(req, res)
    }
    
  
}
