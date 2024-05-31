import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { JsendResponse } from '../models/jsend-response';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient) { }

  list(page = 1) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + localStorage.getItem('token')
    });
    let params = new HttpParams();
    params = params.set('page', page);
    const options = {
      headers: headers,
      params: params
    };
    return this.http.get(`${environment.apiUrl}/assignment`, options)
        .pipe(
          map((response: JsendResponse) => {
            let data = response.data;
            return data;
          }),
          catchError((error: any) => {
            throw error;
          })
        );
  }

  getById(id: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + localStorage.getItem('token')
    });
    const options = {
      headers: headers
    };
    return this.http.get(`${environment.apiUrl}/assignment/${id}`, options)
        .pipe(
          map((response: JsendResponse) => {
            let data = response.data;
            return data;
          }),
          catchError((error: any) => {
            throw error;
          })
        );
  }
}
