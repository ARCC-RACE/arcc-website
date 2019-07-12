import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from 'src/app/_models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  currentUser: User;
  updatedUser: User;
  form: FormGroup;
  loading: boolean;
  blogs: any;


  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
      this.updatedUser = user;
    });
    this.form = this.fb.group({
      displayName: ['', Validators.required]
    });
    this.authService.getBlogPosts().subscribe(blog => {
      this.blogs = blog;
    });
  }

  async submitHandler() {

    const formValue = this.form.value;
    this.updatedUser.displayName = formValue.displayName;

    try {
      this.authService.updateUserData(this.updatedUser);
      this._snackbar.open('Username updated!', 'Dismiss', {
        duration: 2000,
      });
    } catch (err) {
      console.error(err);
      this._snackbar.open('Something happened :(', 'Dismiss', {
        duration: 2000,
      });
    }
  }

}
