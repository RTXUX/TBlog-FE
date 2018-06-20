import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated: boolean;
  public title = "TBlog";
  public apiBase = "http://localhost:8080/";
  public authorization: string;
  constructor() {
    this.authenticated = false;
  }

  public isAuthenticated() {
    return this.authenticated;
  }


}
