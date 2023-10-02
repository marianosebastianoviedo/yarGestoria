import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailcontactoService {

  constructor(private http:HttpClient) { }

  sendMail(bodyMail:any){
    return this.http.post('http://localhost:3000/mail', bodyMail);
  }

}
