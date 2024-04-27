import { Body, Controller, Post } from '@nestjs/common';
import { PasswordResetService } from './password-reset.service';
import { ResetPasswordDto } from './dtos/reset.password.dto';

@Controller('password-reset')
export class PasswordResetController {
  constructor(private readonly passwordResetService: PasswordResetService) {}

  @Post()
  resetPassword(@Body() body: ResetPasswordDto) {
          this.passwordResetService.resetPassword(body)
  }
}
