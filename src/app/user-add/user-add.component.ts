import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User();
  submitted: boolean = false;
  constructor(private builder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.builder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(7)]],
      website: ['', Validators.required]
    });
  }
  get f(): any {
    return this.userForm.controls;
  }

  submit(): void {
    this.submitted = true;
    console.log(this.user);
    if (this.userForm.valid) {
      this.userService.addUserDetails(this.user).subscribe( result => console.log(result));
      this.router.navigate(['user']);
    }
  }

  reset(): void {
    this.submitted = false;
    this.userForm.reset();
  }

}
