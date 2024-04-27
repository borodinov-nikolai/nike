import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService){}

    async sendEmail(to: string, subject: string, text: string) {
            try {
                await this.mailerService.sendMail({
                    from: '"Petproekt" <support@petproekt.ru>',
                    to,
                    subject,
                    text
                })
            } catch(e) {
           
             throw e
            }
    }
}
