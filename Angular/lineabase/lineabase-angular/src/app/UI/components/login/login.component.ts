import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup;
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
    ]
  }
  constructor(private router: Router, private formBuilder: FormBuilder, private http:HttpClient){}
  login () {
    if(this.loginForm.valid){
    var user = this.loginForm.controls['email'].value;
    var password = this.loginForm.controls['password'].value;
    this.http.post('http://localhost:3000/users/login',{email: user, password}).subscribe(
      (data: any) => {
        if(data.token){
          localStorage.setItem('token', data.token)
          this.router.navigate(['/home'])
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
    alert('El formulario no es valido')
    return;
  }
}
  ngOnInit(): void {
    //crear variable en Localstorage /SessionStorage
    localStorage.setItem('mail','admin@admin.com');
    localStorage.setItem('password','Colombia2023*');
    sessionStorage.setItem('mail', 'admin@admin.com');

    //eliminar variable en Local storage  /SessionStorage
    sessionStorage.removeItem('mail')


    this.loginForm = this.formBuilder.group({
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
      ]

    })
  }

  public get getControls(){
    return this.loginForm.controls
  }

}
