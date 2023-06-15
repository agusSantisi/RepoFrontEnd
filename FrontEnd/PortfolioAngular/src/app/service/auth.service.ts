import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from '../model/newUser';
import { Observable } from 'rxjs';
import { LoginUser } from '../model/loginUser';
import { JwtDto } from '../model/jwt-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = environment.URL + 'auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(newUsuario: NewUser): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'nuevo', newUsuario);
  }

  public login(loginUsuario: LoginUser): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuario);
  }
}
