---
title: 第１回 zLogアンケート(2024/12/15～12/20)
---

# アンケートの趣旨

zLogの配布形態の検討材料とするためのものです。
どういう配布形態が良いか？
３２ビット版は必要か？

[https://forms.gle/TuqSugTgevSYZuVD9](https://forms.gle/TuqSugTgevSYZuVD9)

# 結果

４１件の回答をいただきました。

* PCに不慣れな方を考慮するとインストーラーを用意するのは順当であるといえる。  
* 一方で、インストーラーでできることの説明が不十分であるとわかったので、今後説明を充実していけば簡易パッケージはやめてもよさそう。
* githubのReleasesページにある単品zipは慣れているようなので当面は継続。
* 32ビットは当面やめられない　→いつかは終わりが来ることを認識していただく。  

## 設問１

![zlog_survey1_01](https://github.com/user-attachments/assets/3efbf10c-501a-4695-a5db-9e64512a047a)

WindowsXPが健在です。大半の方はWindows10/11へ移行済み。その他を入力式の設問としなかったため具体的に何かは不明です。  

## 設問２

![zlog_survey1_02](https://github.com/user-attachments/assets/6c3defdc-6b49-4d65-9656-396b1177e426)

趣旨とは関係無い設問ですが、各局がどのようなI/Fかがわかります。リグ直結が多いです。  

## 設問３

![zlog_survey1_03](https://github.com/user-attachments/assets/d999ce74-2f75-40b5-90e5-4ab5499943d1)

## 設問４

![zlog_survey1_04](https://github.com/user-attachments/assets/d224c4e9-d6a8-44e5-8f2a-ae51b91612a7)

## 設問５

![zlog_survey1_05](https://github.com/user-attachments/assets/c88674ad-31c9-4a15-ab9e-18d71699992a)

使用している：１１，使用していない：３２  
WindowsXPとWindows7の初期版でしょうか。  

## 設問６

![zlog_survey1_06](https://github.com/user-attachments/assets/3aeba561-5a08-4cb5-952b-15711ecb9d18)

簡易パッケージとJI6DUEさんのサイトが半々となりました。  

## 設問７

![zlog_survey1_07](https://github.com/user-attachments/assets/08327f94-0ca9-4fa3-9a9f-ad1057f12e5e)

これはライト勢が３２，ガチ勢が１２と見てよさそうです  

## 設問８

![zlog_survey1_08](https://github.com/user-attachments/assets/31c4be0a-f71d-4423-a91c-bf44d351f3bd)

はい：２２，いいえ：２１  

## 設問９

![zlog_survey1_09](https://github.com/user-attachments/assets/a79069f7-7ee6-4e85-9e77-fb07d0d4c65b)

はい：２１，いいえ：２２  
これは設問８の裏返しと見て良いのでしょうか。  

## 設問１０

![zlog_survey1_10](https://github.com/user-attachments/assets/7f2eeba0-5995-4765-a6ff-2c1a5718e31e)

はい：１５，いいえ：２８  
こちらは今までの配布の案内などの経緯を考えると順当と思われます。

## 設問１１

![zlog_survey1_11](https://github.com/user-attachments/assets/a8611124-66b2-415f-a692-f4baa91d59e6)

はい（使っていない）：２５  
はい（あきらめます）：７  
はい（代替機の目処がたつまで待って欲しい）：６  
いいえ（絶対無理）：２  
  
以下は自由入力部分です。  
はい（近い将来にWindows10のサポートが切れますので、そのタイミングまで待たれた方が宜しいかと思います）：１  
どちらでも：１  
現在学校社団で使用しているパソコンの半数ほどが32bit動作なので、残していただけると嬉しいです。：１  

切実な訴えがありました。当分は32bitはやめられなさそうです。  

## 設問１２

回答に記入があったのは以下の１２件です。初期導入時、PCに不慣れな方向け、慣れている方向けといった視点での回答がありました。  

|番号|回答|
| --- | --- |
|1|私のようなPCスキルが低い人にはsetup版が有り難いです。|
|2|細かいバージョンアップにより、複数の版をインストールしているので、最近はexeは使っていません。zipを適当なフォルダに解凍して使っています|
|3|使っていない。|
|4|初期インストール時に簡易パッケージ(インストールすれば不足ファイルなく、とりあえず動くもの)があるとありがたい。バージョンアップ時はGitHubより差分アップデートしているが、これだけだと初めてインストールする方がわからない可能性があると思う。|
|5|Program Files フォルダにインストールするプログラムではないのでインストーラーは不要です。Program Filesにインストールするようにするなら必要です。|
|6|特にありません。|
|7|使ったことがないのでよくわかりません。|
|8|必要。理由はzipファイルを取り扱い慣れていないユーザーが時にいます。<br>簡易パッケージは、含まれるフォルダデータが多く逆に複雑にも見えます。zlog.orgに、単体で揃えた方が分かりやすいと考えます。パッケージは廃止して<br>zLogSetup.exe（安定・開発版）<br>zlogwin_29110_x64_20241128.zip（安定・開発版）<br>Z-Server<br>cfg_dat.zip<br>manual<br>|
|9|インストーラは導入の敷居を下げると思いますので、負担が大きくなければ継続された方が宜しいかと思います。<br>Vectorなどでの配布も検討して頂ければ幸いです。|
|10|ダウンロードについてはよく判っていません。トウシロでも問題なく扱える仕組みがよろしいかと思います。|
|11|zip版と比べてメリットがあるかが知りたい。<br>例えば更新時に前の設定を引き継ぐだったり、opリストを引き継ぐだったりがあったら良い。|
|12|あってもなくてもどちらでも結構です。|

