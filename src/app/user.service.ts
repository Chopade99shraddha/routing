import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userInterface } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }
  getUser()
  {
    return this.http.get<userInterface[]>("https://api.github.com/users")
  }
  getUserByLoginId(loginId:string):Observable<userInterface>
  {
    return this.http.get<userInterface>(`https://api.github.com/users/${loginId}`)
  }
}
