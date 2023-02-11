import { Injectable } from '@nestjs/common';
import { constants, movieQuery } from './constants.helper';
import * as QRCode from 'qrcode'
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): Promise<string> {
    const generateQR = async (text: string) => {
      try {
        return(await QRCode.toDataURL(text))
      } catch (err) {
        console.error(err)
      }
    }

    const code = generateQR(`${process.env.BASE_URL}/movies/${constants.key}`)
    return code;
  }

  getMovies(key: string) {
    if (key!= constants.key) {
      const response = this.httpService.get(movieQuery()).pipe(map(response =>  response.data.results.splice(9, response.data.results.length-10)));
      return response;
    }

    const response = this.httpService.get(movieQuery()).pipe(map(response =>  response.data.results.splice(9, response.data.results.length-10)));
    return response;
  }
}
