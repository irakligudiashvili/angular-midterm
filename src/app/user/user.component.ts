import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChildUser } from '../child-user';
import { ParentUser } from '../parent-user';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() parentUsers: ParentUser[] = [
    {Id: 1, Firstname: 'john', Lastname: 'smith', DateOfBirth: '2000', PhoneNumber: 234523523, Email: 'john@gmail.com'},
    {Id: 2, Firstname: 'jane', Lastname: 'doe', DateOfBirth: '2000', PhoneNumber: 892364839, Email: 'jane@gmail.com'},
  ];

  childUsers: ChildUser[] = [
    {Id: 1, Firstname: 'jack', Lastname: 'smith', DateOfBirth: '2010', PhoneNumber: 234523523, Email: 'jack@gmail.com'},
    {Id: 2, Firstname: 'jill', Lastname: 'doe', DateOfBirth: '2010', PhoneNumber: 892364839, Email: 'jill@gmail.com'},
    {Id: 3, Firstname: 'jacob', Lastname: 'turing', DateOfBirth: '2010', PhoneNumber: 345993049, Email: 'jacob@gmail.com'},
  ];

  @Output() ChildUserEmitter = new EventEmitter<ChildUser[]>();

  passChildUsers() {
    this.ChildUserEmitter.emit(this.childUsers);
  }

  constructor(private displayService: DisplayService){}

  displayArrays(){
    this.displayService.displayArray(this.childUsers);
  }
}
