import { Body, Controller, Post, Response} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


    @Post('sign-up')
    @ApiOperation({
      summary: 'регистрация нового пользователя'
    })
    @ApiResponse({
      status: 201,
      description: 'успешная регистрация нового пользователя',
      type: User
    })
    signUp(@Body() body: AuthDto, @Response() res):Promise<User>{
      return this.authService.signUp(body)
    }


    
    @Post('sign-in')
    @ApiOperation({
      summary: 'авторизация пользователя'
    })
    @ApiResponse({
      status: 200,
      description: 'авторизация прошла успешно',
      type: User
    })
    signIn(@Body() body: AuthDto):Promise<User>{
      return this.authService.signIn(body)
    }
  
}
