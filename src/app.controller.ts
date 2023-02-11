import { Controller, Get, Param, Render } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async getHello(): Promise<{message: string}> {
    return {message: await this.appService.getHello()};
  }

  @Get('movies/:key')
  async getMovies(@Param('key') key: string) {
    let result = this.appService.getMovies(key);
    return result;
  }
}
