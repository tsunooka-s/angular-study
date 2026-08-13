import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'Angular Study!!';
  message = 'Angularの学習を開始しました。';
  isDisabled = true;

  changeMessage() {
    this.message = 'ボタンがクリックされました！';
  }
}
