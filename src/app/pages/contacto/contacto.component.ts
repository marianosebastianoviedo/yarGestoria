import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailcontactoService } from 'src/app/services/mailcontacto.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public forma: FormGroup;
  public successMail:boolean = false;
  public failMail:boolean = false;
  constructor(private formbuilder: FormBuilder, private mailService:MailcontactoService, private spinner: NgxSpinnerService){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.forma = this.formbuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      consulta: ['', [Validators.required, Validators.minLength(3)]],
      receptor: ['ayresgestoria@gmail.com', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  enviarConsulta(){
    this.successMail = false;
    this.failMail = false;
    console.log(this.forma);
   if (this.forma.invalid) {

     return Object.values( this.forma.controls ).forEach(control => {

       if (control instanceof FormGroup) {
         Object.values( control.controls ).forEach(control => control.markAsTouched());
       } else {
         control.markAllAsTouched();          
       }

     });
   }else{
    this.spinner.show();

    
     console.log(this.forma.value);
     const finalForm = this.forma.value;
     this.mailService.sendMail(finalForm).subscribe({
      next: (resp)=>{
        console.log(resp);
        this.successMail = true;
        this.failMail = false;
        setTimeout(() => {
          this.successMail = false;
        }, 10000);
        this.spinner.hide();
        this.forma.reset();
      },
      error: (e)=>{
        console.log(e);
        this.successMail = false;
        this.failMail = true;
        setTimeout(() => {
          this.failMail = false;
        }, 10000);
        this.spinner.hide();
      },
      complete: ()=>{console.log('COMPLETE FULL');}
     });
    }
 }

  get nombreNoValido(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
  }
  get telefonoNoValido(){
    return this.forma.get('telefono')?.invalid && this.forma.get('telefono')?.touched;
  }
  get correoNoValido(){
    return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched;
  }
  get consultaNoValido(){
    return this.forma.get('consulta')?.invalid && this.forma.get('consulta')?.touched;
  }
}
