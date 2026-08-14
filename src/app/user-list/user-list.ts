// Angularのコンポーネント作成に必要なComponentと、
// 親コンポーネントから値を受け取るためのinputを読み込む
import { Component, input } from '@angular/core';

@Component({
  // 親コンポーネントのHTMLから使用するタグ名
  selector: 'app-user-list',

  // このコンポーネント内で使用する機能・子コンポーネント
  imports: [],

  // このコンポーネントで使用するHTML
  templateUrl: './user-list.html',

  // このコンポーネントで使用するスタイル
  styleUrl: './user-list.scss',
})
export class UserList {
  // 親コンポーネントからユーザー一覧を受け取る
  // requiredのため、親からusersを渡す必要がある
  users = input.required<{ id: number; name: string }[]>();
}
