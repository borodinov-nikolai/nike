import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/modules/users/entities/user.entity';
import { Request, Response } from 'express';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import axios from 'axios';


@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @ApiOperation({
    summary: 'регистрация нового пользователя',
  })
  @ApiResponse({
    status: 201,
    description: 'успешная регистрация нового пользователя',
    type: User,
  })
  signUp(
    @Body() body: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<User> {
    return this.authService.signUp(body, res);
  }

  @Post('sign-in')
  @ApiOperation({
    summary: 'авторизация пользователя',
  })
  @ApiResponse({
    status: 200,
    description: 'авторизация прошла успешно',
    type: User,
  })
  signIn(
    @Body() body: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<User> {
    return this.authService.signIn(body, res);
  }

  @Get('sign-out')
  @ApiOperation({
    summary: 'выйти из аккаунта',
  })
  @ApiResponse({})
  signOut(@Res({ passthrough: true }) res: Response) {
    return this.authService.signOut(res);
  }

  @ApiOperation({
    summary: 'получить свои данные',
  })
  @UseGuards(RolesGuard)
  @Roles(['ADMIN', 'USER'])
  @Get('me')
  getMe(@Req() req: Request): Promise<User> {
    return this.authService.getMe(req);
  }

  @Get('refresh')
  @ApiOperation({
    summary: 'Обновление токенов',
  })
  @ApiResponse({
    status: 201,
    description: 'успешное обновление токена',
    type: String,
  })
  refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.authService.refresh(req, res);
  }

  @Get('google') 
  async googleAuth(@Query('code') code: string, @Res() res: Response) {
    const url = 'https://oauth2.googleapis.com/token';
    const clientId = '1027607799493-leqd0k3htg8dljcjtbea14nn26tgil9o.apps.googleusercontent.com'; // Ваш клиентский идентификатор
    const clientSecret = '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'; // Ваш секрет клиента

    try {
      const response = await axios.post(url, {
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: 'http://localhost:5000/api/auth/google', // URL обратного вызова
        grant_type: 'authorization_code',
      });
      const token = response?.data?.access_token
      console.log(token)
      
      const user = await axios.get('https://people.googleapis.com/v1/people/me',{
        params: {
          personFields: 'names,emailAddresses',
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(user.data)
      
      return res.redirect('http://localhost:3000');

    } catch (error) {
      console.error('Ошибка при обмене кода на маркер доступа:', error.response.data);
      throw error;
    }


  }
 
  }

