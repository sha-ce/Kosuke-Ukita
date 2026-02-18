---
title: 'Google Drive容量が2TBになったのでマウントしたい'
date: '2026-01-30'
description: 'Google Driveを適当なLinuxサーバーにマウントするためのrcloneの環境構築メモ．'
---


Google Drive の容量が2TBに増えたのですが，かなりの空き容量があり，活用できていないと感じていました．そこで，Google Driveをメインのワークスペースにして実験ログなどを保存しようということを思いつきました．

この作業スペースを高性能なLinuxサーバ等にマウントして共有サーバーのディスクを圧迫することなく，かつ作業スペースの統一ができるという最高のアイデアです．

### 1. rclone のセットアップ
#### rclone とは？
[rclone](https://rclone.org)は，様々なクラウドストレージやサーバーのディスクをコマンドラインでマウント操作するための，サービスです．ローカルストレージはもちろんのこと，Google Drive，Dropboxなど，数十ものサービスに対応しています．

共用サーバなどはsudo権限がないので，ユーザー権限で構築できる方法を探したところ，.local/binにrcloneコマンドをダウンロードする方法に辿り着きました．<br>
[rclone install](https://rclone.org/install/)ここに詳しく書いていますが，手順を追って説明します．<br>

- wget やcurlで rclone zip ファイルをダウンロードする．
- `.local/bin`に`rclone`コマンド実行ファイルを移動する．
- `.local/bin`のパスを通す．
- `rclone config`でリモートマシンの設定．

#### rclone zip ファイルをダウンロードする．
```bash
wget https://downloads.rclone.org/rclone-current-linux-amd64.zip
unzip rclone-current-linux-amd64.zip
```
`rclone-*-linux-amd64`というディレクトリが作成されます．
その中にいくつかファイルが存在しますが，`rclone`という実行ファイルだけ使用します．

#### `.local/bin`に`rclone`コマンド実行ファイルを移動する．
`/home/<user>/.local/bin/`の中に`rclone`をムーブする．
`.local/bin`がなければ作成する．

#### `.local/bin`にパスを通す．
```bash
export PATH=$PATH:~/.local/bin
```

#### `rclone config`でリモートマシンの設定．
```bash
$ rclone config
```
設定手順
```bash
# New Remote
e/n/d/r/c/s/q> n
# リモートマシンの名前を設定する．なんでもいい．後で変更可能．
name> google-drive
# Google Driveの番号 or driveと入力
Storage> drive
# そのまま Enter
client_id>
# そのまま Enter
client_secret>
# Full access の1を入力
scope> 1
# そのまま Enter
root_folder_id>
# そのまま Enter
service_account_file>
# No
Edit advanced config?> n
# Yes
Use auto config?> y
# → ブラウザが自動で開き，Googleアカウントの認証画面が表示されるので，許可して下さい．

# No
Configure this as a team drive?> n
# yes
y/e/d> y
# Quit(q)を押して設定終了．続けて設定する場合は，nで新たなマシンの設定をする．
e/n/d/r/c/s/q> n
```

### rclone mount
```bash
# マウントポイントを作成
mkdir ~/GoogleDrive

# マウントを実行 (--daemonでバックグラウンド実行)
rclone mount google-drive: ~/GoogleDrive --daemon
```

マウントの必要がなくなれば，`umount`で処理を終了する．
```bash
umount ~/GoogleDrive
```

