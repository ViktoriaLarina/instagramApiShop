import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL, CLIENT_ID, REDIRECT_URL} from '../config';
import {Observable} from "rxjs/index";
import { map } from 'rxjs/operators';

import {Image, ImagesData} from '@models/images';


@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private http: HttpClient,
              @Inject(BASE_URL) private baseUrl: string,
              @Inject(CLIENT_ID) private clientId: string,
              @Inject(REDIRECT_URL) private redirectUrl: string) {
  }

  loginToInstagram() {
    const url = `${this.baseUrl}/oauth/authorize/?client_id=${this.clientId}&redirect_uri=${this.redirectUrl}&response_type=token`;
    window.open(url, '_self');
  }

  getImages(token: string) {
    const url = `${this.baseUrl}/v1/users/self/media/recent/?access_token=${token}`;
    return this.http.get(url);
  }
}
