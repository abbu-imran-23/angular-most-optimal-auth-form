import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;

  formBuilder = inject(FormBuilder);
  router = inject(Router)

  ngOnInit(): void {
    if(this.variant === "REGISTER") {
      this.authForm = this.formBuilder.group({
        name: ['', Validators.required], 
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.required],
      })
    }
    else {
      this.authForm = this.formBuilder.group({ 
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.required],
      })
    }
  }

  onSubmit(data: any) {
    if(this.authForm.valid) {
      console.log(data);
      this.router.navigate(['todos']);
      this.authForm.reset();
    }
    else {
      console.log(this.authForm);
    }
  }

  handleRegister() {
    this.variant = "REGISTER";
    this.ngOnInit();
  }

  variant: string = "LOGIN";

}
