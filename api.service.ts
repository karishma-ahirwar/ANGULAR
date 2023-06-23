import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'thtps://reqres.in/api/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const loginData = {
      email: email,
      password: password
    };

    return this.http.post(this.apiUrl, loginData);
  }
}
//   login(email: string, password: string) {
//     return this.http.post(`${this.apiUrl}/login`, { email, password });
//   }

//   getProducts() {
//     return this.http.get(`${this.apiUrl}/products`);
//   }
// }

// login(email: string, password: string): Observable<any> {
//   const loginData = { email, password };
//   return this.http.post('/api/login', loginData);
// }

// setToken(token: string) {
//   this.token = token;
// }

// getToken(): string {
//   return this.token;
// }
