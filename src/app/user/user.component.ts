import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userInterface } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private userService:UserService
   
  ) { }
users:userInterface[]=[]
  ngOnInit(): void {
    this.userService.getUser().subscribe(val=>this.users=val)
    
  }

}
