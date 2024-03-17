import { Controller, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { join } from 'path';

@ApiTags('dashboard')
@Controller()
export class DashboardController {
  @Get('admin*')
  serveAdminApp(@Res() res: Response) {
    const rootPath = process.cwd();
    const appPath = join(rootPath, 'files');
    res.sendFile('index.html', { root: appPath });
  }
}
