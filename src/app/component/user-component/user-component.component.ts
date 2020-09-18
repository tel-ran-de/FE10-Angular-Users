import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
