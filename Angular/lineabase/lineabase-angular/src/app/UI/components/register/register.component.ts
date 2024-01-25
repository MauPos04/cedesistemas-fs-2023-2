import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, NgIf, NgFor],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerform! : FormGroup;
  public validationMessages = {
    email:[
      {type: 'pattern', message: 'solo se permiten campos de tipo email'},
      {type:'email', message: 'solo se permiten campos de tipo email'},
      {type: 'required', message: 'Este campo es requerido'}
    ],
    password:[
      {type: 'required', message: 'Este campo es requerido'},
      {type: 'pattern', message: 'La contraseña debe tener por lo menos 8 caracteres , una minuscula, una mayuscula y un caracter especial'},
      {type: 'minlength', message: 'La contraseña debe tener al menos 9 caracteres'}
    ],
    name: [
      { type: 'pattern', message: 'Solo se permiten letras y espacios' },
      { type: 'required', message: 'Este campo es requerido' }
    ],
    phone: [
      { type: 'required', message: 'Este campo es requerido' }
    ],
    identification: [
      { type: 'required', message: 'Este campo es requerido' }
    ],
    terms: [
      { type: 'required', message: 'Se deben aceptar los terminos y condiciones' }
    ]
  }
  constructor(private router: Router, private formBuilder: FormBuilder, private http:HttpClient){}
  register () {
    if (this.registerform.valid){
    var email = this.registerform.controls['email'].value;
    var name = this.registerform.controls['name'].value;
    var password = this.registerform.controls['password'].value;
    var phone = this.registerform.controls['phone'].value;
    var identification = this.registerform.controls['identification'].value;
    this.http.post('http://localhost:3000/users/signup',{email, password, name, phone, identification}).subscribe(
    (data:any) => {
      if (data){
        alert(`El usuario ${data.user.name} fue creado con exito`)
        this.router.navigate(['/fullscreen/login'])
        return;
      }
    },
    (error) => {
      alert(error.error.message)
      return;
    }
    );
}
  else{
    alert('Formulario no valido')
    return;
  }
}

  ngOnInit(): void {
    //variables localstorage
    localStorage.setItem('mail','admin@admin.com');
    localStorage.setItem('password','Colombia2023*');
    sessionStorage.setItem('mail', 'admin@admin.com');

    //eliminar variables local storage
    sessionStorage.removeItem('mail')

    this.registerform = this.formBuilder.group({
      email:[
        '',
        [
          Validators.pattern(/[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i),
            Validators.email,
            Validators.required,

        ]
      ],
      password: [
        '',
        [
          Validators.required,
          // Validators.minLength(9),
          // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]).{8,}$/)
        ]
      ],
      identification: [
        '',
        [
          Validators.required,
        ]
      ],
      phone: [
        '',
        [
          Validators.required,
        ]
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z\s]+$/)
        ]
      ],
      terms: [
        '',
        [
          Validators.requiredTrue,
        ]]

    })
  }

  public get getControls(){
    return this.registerform.controls
  }

}
