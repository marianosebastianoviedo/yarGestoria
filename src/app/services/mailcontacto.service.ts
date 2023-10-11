import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailcontactoService {

  constructor(private http:HttpClient) { }

  sendMail(bodyMail:any){
    return this.http.post('https://formsubmit.co/ajax/9afc4e30cb08afd039764f95e785db97', bodyMail);
    /* return this.http.post('https://formsubmit.co/ajax/ayresgestoria@gmail.com', bodyMail); */
  }
}
