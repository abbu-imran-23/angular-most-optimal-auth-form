import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

  variant: string = "LOGIN";

  authForm: FormGroup;

  formBuilder = inject(FormBuilder);
  router = inject(Router)
  authService = inject(AuthService);

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
      if(this.variant === "LOGIN") {
        console.log("Login Credentials", data);
        this.authService.setLoggedIn(true);
        localStorage.setItem('loginStatus', "authenticated");
        this.router.navigate(['/home']);
      }
      else {
        console.log("Register Details", data);
        this.variant = "LOGIN";
        this.ngOnInit();
      }
      this.authForm.reset();
    }
    else {
      console.log(this.authForm);
    }
  }

  switchAuth(variant: string) {
    if(variant === "LOGIN") {
      this.variant = "REGISTER";
    }
    else  {
      this.variant = "LOGIN";
    }
    this.ngOnInit();
  }

}
