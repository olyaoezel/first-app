import { Component, OnInit } from '@angular/core';
import { UserActionsCounter } from '../../services/user-actions-counter.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  inactiveUsers: string[];

  constructor(private userService: UserService, private countActions: UserActionsCounter) { }

  ngOnInit() {
    this.inactiveUsers = this.userService.inactiveUsers;
  }
  
  onSetToActive(id: number) {
    this.countActions.countUserActions();
    this.userService.setToActive(id);
  }

}
