import { Injectable } from '@nestjs/common';
import { MailService } from '../mail/mail.service';

@Injectable()
export class PasswordResetService {
    constructor(private readonly mailService: MailService){} 

    async resetPassword({email}:{email: string}){
       await this.mailService.sendEmail(email, 'восстановление пароля', 'для восстановления перейдите по ссылке')
    }
}
