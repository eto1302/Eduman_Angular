import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: IUser = null;

  get currentFullName(){
    return this.currentUser.firstName + ' ' + this.currentUser.lastName
  }

  get currentRole(){
    if(this.currentUser === null) return undefined;
    else return this.currentUser.role;
  }
  
  get isLogged(){
    return !!this.currentUser;
  }

  constructor() { 
    const currentUser = localStorage.getItem('current-user');
    this.currentUser = currentUser ? JSON.parse(currentUser) : null;
  }

  register(firstName: string, lastName: string, username: string, email: string, password: string, number: string, school: string, role: string){
    
  }

  login(username: string, password: string){
  }

  logout(){
    this.currentUser = null;
    localStorage.removeItem('current-user');
  }
}