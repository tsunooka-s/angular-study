import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserList } from './user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [FormsModule, UserList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'Angular Study!!';
  message = 'Angularの学習を開始しました。';
  isDisabled = false;
  userName = '';
  showMessage = true;

  users = [
    { id: 1, name: '田中' },
    { id: 2, name: '山田' },
    { id: 3, name: '佐藤' },
  ];

  changeMessage() {
    this.message = 'ボタンがクリックされました！';
  }
}
