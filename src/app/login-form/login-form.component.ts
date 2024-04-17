import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserDetails } from '../Model/user-details';
import { UsersService } from '../Services/users.service';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DashboardComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit{
  form!: FormGroup;
  allUsers: UserDetails[] = [];
  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private users: UsersService
  ) {}
  ngOnInit(): void {
    this.form = this._fb.group({
      userName: [''],
      password: [''],
    });
    this.allUsers = this.users.getUsers();
  }

  authenticate(): void {
    const userName = this.form.value.userName;
    const password = this.form.value.password;

    const user = this.allUsers.find(u => u.userName === userName && u.password === password);

    if (user) {
      localStorage.setItem('user', user.userName);
      localStorage.setItem('password', user.password);
      console.log(localStorage);
      this.router.navigateByUrl('dashboard');
    } else {
      console.log('Invalid username or password');
    }
  }

  logout(): void {
    localStorage.clear();
  }
  
}
