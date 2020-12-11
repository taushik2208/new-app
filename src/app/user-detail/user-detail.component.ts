import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  details: any = [];
  id: any;
  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.userService.getUserDetails(this.id).subscribe(
      result => { this.details = result; }
    );
  }

  ngOnInit(): void {
  }

}
