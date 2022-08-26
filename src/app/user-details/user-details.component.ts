import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userInterface } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private userService:UserService
  ) { }
users!:userInterface
  ngOnInit(): void {
    const loginid=this.route.snapshot.paramMap.get("login")!
    console.log(loginid);
    this.userService.getUserByLoginId(loginid).subscribe(val=>this.users=val)
    
  }

}
