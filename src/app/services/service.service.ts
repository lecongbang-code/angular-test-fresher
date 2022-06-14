// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, of, catchError } from 'rxjs';
// import { MessageService } from './message.service';
// import { Student } from '../models/Students';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     Authorization: 'my-auth-token'
//   })
// };

// @Injectable({
//   providedIn: 'root'
// })
// export class ServiceService {

//   constructor(
//     private httpClient: HttpClient,
//     private messageService: MessageService
//   ) { }

//   private REST_API_SERVER = 'http://localhost';

//   getStudent(): Observable<any>
//   {
//     const url = `${this.REST_API_SERVER}/get_student`;
//     return this.httpClient.get<Student>(url, httpOptions).pipe(catchError(this.handleError<any>('')));
//   }

//   private log(message: string) {
//     this.messageService.add(`HeroService: ${message}`);
//   }

//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(error);
//       this.log(`${operation} failed: ${error.message}`);
//       return of(result as T);
//     };
//   }
// }
