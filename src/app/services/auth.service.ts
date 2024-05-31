import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, catchError, Observable } from 'rxjs';
import { JsendResponse } from '../models/jsend-response';
import { User } from '../models/user';
import { UserLogin } from '../models/user-login';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user!: User | undefined;

  constructor(private http: HttpClient) {}

  get user(): User | undefined {
    this.loadUserFromToken();
    return this._user;
  }
  get isAuth(): boolean {
    this.loadUserFromToken();
    return (this._user) ? true : false;
  }

  loadUserFromToken() {
    if(this._user == undefined) {
      let token = localStorage.getItem('token');
      if(token != null) {
        let data = jwt_decode.jwtDecode(token) as any;
        this._user = data.user;
      }
    }
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
            this._user = user;
            return user;
          }),
          catchError((error: any) => {
            throw error;
          })
        );
  }

  logout() {
    this._user = undefined;
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_role');
  }
}
