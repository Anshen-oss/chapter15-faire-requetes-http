import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  public users: { name: string }[];
  public user: string;
  

  constructor(private userService: UserService){}

  ngOnInit() {
    this.userService.getUsers().subscribe( users => {
      console.log(users);
      if (users) {
        this.users = users;
      } else {
        this.users = [];
      } 
    }, err => {

    });
  }

  addUser(){
    this.users.push({ name: this.user});
    this.userService.createUsers(this.users).subscribe( res => {
      // On reset le user pour ne pas créer de fois le même user, 
      // On reset le user pour ce soit  une chaîne de caractères vide
      this.user = '';
      console.log(res);
    });
   }
}
