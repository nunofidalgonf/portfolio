import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  public onLogin(): void {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).then((user) => {
      // const userId: string = user.id;
      // this.getUserInfo(userId);
      console.log(user);
    });
  }

  private getUserInfo(userId: string) {
    
  }

}
