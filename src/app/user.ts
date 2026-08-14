// Angularでサービスを定義するためのServiceを読み込む
import { Service } from '@angular/core';

// ユーザー関連のデータ取得・処理を担当するサービス
@Service()
export class User {
  // ユーザー一覧
  users = [
    { id: 1, name: '田中' },
    { id: 2, name: '山田' },
    { id: 3, name: '佐藤' },
  ];

  // ユーザー一覧を取得
  getUsers() {
    return this.users;
  }
}
