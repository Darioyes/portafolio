import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import type { IEmail } from '../interfaces/email';//no realiza transpilacion al pasarlo a produccion
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  private http = inject(HttpClient);

  sendError(error: HttpErrorResponse) {
    let errorMessage = 'Algo ha ocurrido mal, por favor intentalo de nuevo';
    let success ='true';
  
    if (error.status === 400 && error.error && error.error.errors) {
      errorMessage = error.error.message;
      success = error.error.success;
    }
  
    return throwError(() =>  ({ message: errorMessage, errors: error.error.errors, success : success }));
  }


  // sendError(error : HttpErrorResponse){
  //   if(error.status === 0){
  //     console.log(`Ha ocurrido un error: ${error.error}`);
  //   }else{
  //     console.log(`Ha ocurrido en el backened: ${error.status}. El error es: ${error.error.errors}`);
  //   }

  //   return throwError( () =>  new Error('Algo ha ocurrido mal, por favor intentalo de nuevo')) 
  // }

  sendEmail(data:Observable<IEmail>) {
    return this.http.post('http://127.0.0.1:8000/api/email', data).pipe(
      catchError(this.sendError)
    );
  }
}
