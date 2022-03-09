import { Component,  Input, OnInit} from '@angular/core';
import { UserActionsCounter } from '../services/user-actions-counter.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  activeUsers: string[];
  
  constructor(private userService: UserService, private countActions: UserActionsCounter){}

   ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
   }
  
  onSetToInactive(id: number) {
    this.countActions.countUserActions();
    this.userService.setToInactive(id);
  }

}
