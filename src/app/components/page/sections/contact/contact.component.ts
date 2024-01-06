import { SendEmailService } from './../../../../services/send-email.service';
import { CommonModule,  } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { Component, inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import type { IErrors } from '../../../../interfaces/email';




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

  public formErrors: IErrors | any = {};

  public valid: boolean = false;

  public loading: boolean = true;
  
  
  //inicializamos el ngOnInit
  ngOnInit(): void {
    //Inicializamos el formgroup
    this.formSend = this.formbuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      message: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])],
      
    });
  }
  //recogemos los datos del formulario
  get email() { return this.formSend.get('email'); }
  get name() { return this.formSend.get('name'); }
  get message() { return this.formSend.get('message'); }

  
  //enviar datos
  sendData(){
    //controlar que el formulario sea valido
    if(this.formSend.valid){
      this.loading = !this.loading;
      //enviar datos
      //console.log(this.formSend.value);
      //enviar datos al servicio
      this.sendEmailService.sendEmail(this.formSend.value).subscribe(
        {
          next:(data: any ) =>
          {
          //console.log(data);
          //enviar la respuesta que llega por la api en una alerta
          alert(data.message);
          
          },
          error:(error) => {
            console.log(error.message)
            this.formErrors = error;
            //console.log(this.formErrors.success);
          },
          complete:() => {
            console.info('Solicitud enviada');
            this.loading = !this.loading;
          }
        },
      );
      //resetear los datos del formulario
      this.formSend.reset();
    }else{
      this.valid = !this.valid;
    }
  }
}
