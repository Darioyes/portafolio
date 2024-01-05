import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { IEmail } from '../interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor() { }

   private http = inject(HttpClient);

  sendEmail(data:any) {
    return this.http.post('http://127.0.0.1:8000/api/email', data);
  }
}
