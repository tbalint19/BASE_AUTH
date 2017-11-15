import {Injectable} from "@angular/core";

@Injectable()
export class AuthStatus {

  constructor(){}

  public isAuthenticated(): boolean {
    return localStorage.getItem('auth-token') != null;
  }

  public isConfirmed(): boolean {
    return this.isAuthenticated() && localStorage.getItem('auth-token')
      .includes("Bearer ");
  }
}
