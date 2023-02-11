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
  @Render('movies')
  async getMovies(@Param('key') key: string) {
    let movies = await lastValueFrom(this.appService.getMovies(key));
    let result = {};
    for (let i=0; i<10; i++) {
      result[`movie${i}`] = JSON.stringify(movies[i])
    }
    return result;
  }
}
