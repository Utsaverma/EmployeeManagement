import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
// @Injectable makes to available services in root level.
@Injectable({providedIn:'root'})
export class GitUserData {
  constructor(private http: HttpClient){ }
  user:string;
  setUser(value:string){
    this.user=value;
  }
  getUser(){
    return this.user;
  }
  getUserDetails(val:number){
    return this.http.get("https://api.github.com/users?since"+val);
  }
  getFollowers(){
    return this.http.get("https://api.github.com/users/"+this.user+"/followers").pipe();
  }
  getFollows(){
    return this.http.get("https://api.github.com/users/"+this.user+"/following").pipe();
  }
  getRepoData(){
    return this.http.get("https://api.github.com/users/"+this.user+"/repos").pipe();
  }
}