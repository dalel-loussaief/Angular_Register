import { Component } from '@angular/core';
import { User } from '../model/User.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 /*  user = new User();
  err:number = 0;
  success:number = 0;
  loading= false;
  toastr: any;
  confirmPassword?:string;
  myForm!: FormGroup;


  constructor(
    private authService : AuthService,
    private router: Router, private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {this.myForm = this.formBuilder.group({
   
    username : ['', [Validators.required]],
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword : ['', [Validators.required]],
    validators: this.emailConfirmationValidator // Add custom validator for email confirmation
 } )
  }

  emailConfirmationValidator(control: AbstractControl): { [email: string]: boolean } | null {
    const email = control.get('email');
    const confirmEmail = control.get('confirmEmail');

    if (email && confirmEmail && email.value !== confirmEmail.value) {
      return { 'emailMismatch': true };
    }

    return null;
  }

  register() {
    this.authService.registerUser(this.user).subscribe({
      next : (data)=>{
        //this.success=1;
        console.log(JSON.stringify(data));
        this.router.navigate(['/verifierEmail'], {
          queryParams: { email: this.user.email },
        });
      },error:(err:any)=>{
        this.err = 1; 
        console.error('register failed:', err);
      }
    });

    
  } */

  user = new User();
 
  confirmPassword: string = '';
  code: number=0 ;
  err: number = 0;
  verif: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  register() {
  
    if (this.user.password !== this.confirmPassword) {
      this.err = 2;
      return;
    }


    this.authService.register(this.user).subscribe({
      next: (response: any) => {
        console.log("response from register", response);
        if (response.status === 'success') {
          this.verif = true;
        } else {
  
          this.err = 1;  
        }
      },
      error: (err: any) => {
        this.err = 1;
        console.error('register failed:', err);
      },
    });
    
  }


  verifyCode() {
  
    this.authService.validateEmail(this.user.email, this.code).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
      
          this.authService.login(this.user).subscribe({
            next: (data) => {
              let jwToken = data.headers.get('Authorization')!;
              this.authService.saveToken(jwToken);
              this.router.navigate(['/']); 
            },
            error: (err: any) => {
              console.log(err);
              this.err = 1; 
            }
            }
          ); 
        } else {
          this.err = 1;
        }
      },
      error: (err: any) => {
        this.err = 4;  
        console.error('Verification failed:', err);
      },
    });
  }
}
