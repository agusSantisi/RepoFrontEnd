import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from '../model/newUser';
import { Observable } from 'rxjs';
import { LoginUser } from '../model/loginUser';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(newUsuario: NewUser): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', newUsuario);
  }

  public login(loginUsuario: LoginUser): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
}
