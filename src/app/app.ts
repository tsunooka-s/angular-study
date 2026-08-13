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

  changeMessage() {
    this.message = 'ボタンがクリックされました！';
  }
}
