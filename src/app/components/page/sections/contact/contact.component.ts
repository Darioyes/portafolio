import { SendEmailService } from './../../../../services/send-email.service';
import { CommonModule,  } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Component, inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IEmail } from '../../../../interfaces/email';




export class TuModulo { }

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  constructor() { }

  //creamos un formgroup
  public formSend:FormGroup = new FormGroup({});
  
  //inyectamos el formbuilder
  public formbuilder = inject(FormBuilder);
  //inyectamos el servicio
  public sendEmailService = inject(SendEmailService);
  
  //inicializamos el ngOnInit
  ngOnInit(): void {
    //Inicializamos el formgroup
    this.formSend = this.formbuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      message: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])],
    });
    //Nos suscribimos a los cambios que ocurran en el formulario y mostramos los datos
    //this.formSend.valueChanges.subscribe(console.log);

  }
  //recogemos los datos del formulario
  get email() { return this.formSend.get('email'); }
  get name() { return this.formSend.get('name'); }
  get message() { return this.formSend.get('message'); }
  
  //enviar datos
  sendData(){
    //controlar que el formulario sea valido
    
    if(this.formSend.valid){
      //enviar datos
      //console.log(this.formSend.value);
      //enviar datos al servicio
      this.sendEmailService.sendEmail(this.formSend.value).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
      

      //resetear los datos del formulario
      this.formSend.reset();
    }

  }
}
