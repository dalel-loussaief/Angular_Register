import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-verifier-email',
  templateUrl: './verifier-email.component.html',
  styleUrls: ['./verifier-email.component.css']
})
export class VerifierEmailComponent {
  //implements OnInit
  /* code:string="";
  Obj:any;
  user:User=new User();
  err="";
  //err:number=0;
  verifectioncode=0;
  constructor(private route:ActivatedRoute,
    private authService:AuthService,
    private router:Router
    ) {}

    
    ngOnInit(): void {
      this.user =this.authService.regitredUser;
      this.route.queryParams.subscribe(params => {
        this.user.email = params['email'];
      });
    }

onValidateEmail(){
  this.authService.validateEmail(this.user.email,this.verifectioncode).subscribe({
    next : (res)=> {
    alert('Login successful');
    console.log(this.verifectioncode);
    console.log(this.user.email)
    this.authService.login(this.user).subscribe({
      next: (data) => {
      let jwToken = data.headers.get('Authorization')!;
    //  this.authService.saveToken(jwToken);
      this.router.navigate(['/']);
      },
      error: (err: any) => {
        console.log(err);
      }
      });
    },
  error: (err: any) => {
    if(err.status=400){
      console.log(err);
      
      this.err= err.error.message;
       }
    console.log(err.errorCode);
  }});

 
} */
}

