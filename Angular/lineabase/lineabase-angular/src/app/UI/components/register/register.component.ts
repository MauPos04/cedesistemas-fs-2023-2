import { NgFor, NgIf } from '@angular/common';
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
    ]
  }
  constructor(private router: Router, private formBuilder: FormBuilder){}
  ngOnInit(): void {
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
          Validators.minLength(9),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]).{8,}$/)
        ]
      ]

    })
  }

  public get getControls(){
    return this.registerform.controls
  }
  register () {
    var user = this.registerform.controls['email'].value;
    var password = this.registerform.controls['password'].value;
    if(this.registerform.valid){
      if(user == 'admin@admin.com' && password == 'Colombia2023*'){
        this.router.navigate(['/fullscreen/login'])
        return;
      }
      alert('usuario o contraseña invalido intente de nuevo')
      return;
    }
    alert('El formulario no es valido')
    return;
  }
}
