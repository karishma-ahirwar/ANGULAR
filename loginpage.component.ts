import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
email:string='';
password: string='';


constructor(private router: Router, private http: HttpClient){}

login() {
  const loginData = {
    email: this.email,
    password: this.password
  };

  this.http.post('https://reqres.in/api/login',loginData ).subscribe(
    (response: any) => {
      
      const token = 'example_token';
      localStorage.setItem('token', response.token);

     // Save the this.email, this.password (emathis.email, this.passwordssword) in local storage
     localStorage.setItem('user',JSON.stringify({email:loginData, password: loginData}));
    // Navigate to the home page
    this.router.navigate(['/homepage']);

    }
  );
}
}