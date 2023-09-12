import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/modelo/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor( private usersService: UsersService ) { }

  users: User[] = [];

  ngOnInit(): void {
    console.log('>>>>>>>ngOnInit');
    // elf state management redux ngrx, akita
    this.usersService.getUsers().subscribe( users => {
      console.log(users);
      this.users = users;
    });
    
  }
  

}
