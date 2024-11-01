import { Component } from '@angular/core';
import { ParentUser } from './parent-user';
import { ChildUser } from './child-user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Irakli Gudiashvili';

  users = [
    {firstname: 'john', lastname: 'smith', age: 25},
    {firstname: 'jane', lastname: 'mith', age: 17},
    {firstname: 'jade', lastname: 'tith', age: 36},
    {firstname: 'jack', lastname: 'kith', age: 21},
    {firstname: 'jill', lastname: 'sith', age: 19}
  ];

  parentUsers: ParentUser[] = [];

  receivedChildUsers: ChildUser[] = [];

  getChild(childUsers: ChildUser[]){
    this.receivedChildUsers = childUsers;
  }

  userForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.userForm = this.fb.group({
      Firstname: ['', Validators.required, Validators.minLength(3)],
      Lastname: ['', Validators.required, Validators.minLength(3)],
      PhoneNumber: ['', Validators.required, Validators.minLength(9)],
      Email: ['', Validators.required, Validators.minLength(8)],
      DateOfBirth: ['', Validators.required],
    });
  }

  onSubmit(){
    console.log(this.userForm);
  }
}
