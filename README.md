# 使用時術

## フロントエンド

- Next.js
  - ルーティング設計などに優れているため採用
- TypeScript
  - 型安全な開発をするために採用
- Tailwind
  - スタイルを手軽に当てることができるため採用
- Mantine
- useSWR
  - GET メソッドの API を叩くために採用
- Firebase
  - Google で認証をするために採用

## バックエンド

- express
- mongodb

## 使用方法

- 管理者側

  1. Google でサインイン
  1. 画面上部の「新しいリストを作成」をクリックし、名前を入力して追加のボタンを押す
  1. 画面上部の「タスクを追加」をクリックし、タスクや優先度などを入力して追加のボタンを押す
  1. 画面右上のアイコンをクリックし、「管理者画面へ移動」をクリックする
  1. 「メンバーを追加」をクリックし、招待したい人の名前とメールアドレスを入力して追加のボタンを押す

- 参加者側
  1. Google でサインインする
  1. 画面中央にあるフォームに管理者のメールアドレスを入力して検索のボタンを押す
  1. 管理者に招待（メンバーを追加で参加者のメールアドレスが追加されていれば）リストが表示されるのでクリック
  1. 管理者が追加したタスクを確認できる
