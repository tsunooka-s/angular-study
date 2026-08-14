// Angularのコンポーネント作成に必要なComponentと、
// DI（依存性注入）でサービスを取得するためのinjectを読み込む
import { Component, inject } from '@angular/core';

// [(ngModel)]による双方向データバインディングを使用するために読み込む
import { FormsModule } from '@angular/forms';

// 子コンポーネント
import { UserList } from './user-list/user-list';

// ユーザー関連の処理を行うサービス
import { User } from './user';

@Component({
  // このコンポーネントをHTMLで使用するときのタグ名
  selector: 'app-root',

  // このコンポーネント内で使用する機能・子コンポーネント
  imports: [FormsModule, UserList],

  // このコンポーネントで使用するHTML
  templateUrl: './app.html',

  // このコンポーネントで使用するスタイル
  styleUrl: './app.scss',
})
export class App {
  // UserサービスをDI（依存性注入）で取得
  private userService = inject(User);

  // Userサービスからユーザー一覧を取得
  users = this.userService.getUsers();

  // 画面表示・動作確認用データ
  title = 'Angular Study!!';
  message = 'Angularの学習を開始しました。';
  isDisabled = false;
  userName = '';
  showMessage = true;

  // メッセージを変更
  changeMessage() {
    this.message = 'ボタンがクリックされました！';
  }
}
