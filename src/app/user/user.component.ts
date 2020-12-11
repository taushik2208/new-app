import { UserService } from './../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userList: any = [];
  // userList: any = [
  //   {firstName: 'Shagy', lastName: 'Osbourne', age: 22},
  //   {firstName: 'Scooby', lastName: 'Dooby', age: 20},
  //   {firstName: 'Harry', lastName: 'Potter', age: 32},
  //   {firstName: 'Doby', lastName: 'Elf', age: 12},
  //   {firstName: 'Albus', lastName: 'Dumbledore', age: 102},
  //   {firstName: 'Jack', lastName: 'Sparrow', age: 52},
  // ];
  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(
      result => { this.userList = result; }
    );
  }
}
