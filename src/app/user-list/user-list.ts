import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  users = [
    { id: 1, name: '田中' },
    { id: 2, name: '山田' },
    { id: 3, name: '佐藤' },
  ];
}
