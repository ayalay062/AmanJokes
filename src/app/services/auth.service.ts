import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { BehaviorSubject, Subject } from 'rxjs';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private configService: ConfigService) { }

  public userChanged: Subject<string> = new BehaviorSubject<string>('');
  isAuth() {
    return sessionStorage.getItem(USER_KEY) || '';
  }
  saveUser(user: string): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, user);
    this.userChanged.next(user);
   
  }
  removeUser(): void {
    window.sessionStorage.removeItem(USER_KEY);

  }
  login(username: string, password: string) {
    if (username === this.configService.getConfigData().username
      && password === this.configService.getConfigData().password) {

      this.saveUser(username);
      return true;
    }
    return false;
  }
}
