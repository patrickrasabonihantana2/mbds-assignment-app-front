import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, catchError, Observable } from 'rxjs';
import { JsendResponse } from '../models/jsend-response';
import { User } from '../models/user';
import { UserLogin } from '../models/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _User!: User;

  constructor(private http: HttpClient) { }

  get User(): User {
    return this._User;
  }
  get isAuth(): boolean {
    return (this._User) ? true : false;
  }

  login(userLogin: UserLogin): Observable<User> {
    console.log('userLogin', userLogin);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'username': userLogin.username,
      'password': userLogin.password
    });
    const options = {
      headers: headers
    };
    return this.http.post(`${environment.baseUrl}/auth/login`, {}, options)
        .pipe(
          map((response: JsendResponse) => {
            console.log(response);
            let token = response.data.token;
            localStorage.setItem('token', token);
            let user = response.data.user;
            localStorage.setItem('user_id', user._id);
            localStorage.setItem('user_role', user.role);
            this._User = user;
            return user;
          }),
          catchError((error: any) => {
            throw error;
          })
        );
  }
}
