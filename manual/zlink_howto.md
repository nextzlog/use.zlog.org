---
title: Zlink(Z-Serverに接続したzLog)の機能
---

# Zlink(Z-Serverに接続したzLog)の機能

Zlink(Z-Serverに接続したzLog)はマルチオペ・マルチTXのコンテストの際に、ログの共有・コンテストナンバーの共有・チャット・PacketClusterの情報共有などができ、社団局の大きな支えとなります
## Z-Serverなどの設定
別のページにて紹介しております。そちらをご確認ください
- [Z-Serverの設定方法, Z-Server使用時のzLogの設定方法](server_setup.md)

## ログの共有

Z-ServerにzLogを接続すると自動的にログは共有されます。
#### 144MHzで運用しているzLogにログを入力する

![144MHz](https://user-images.githubusercontent.com/58735989/195654467-97c1f64d-0230-4c8c-8f27-c6ffdb69ca32.png)

#### すると、7MHzで運用しているzLogにログが共有されます

![144MHzari](https://user-images.githubusercontent.com/58735989/195654554-d2476942-133b-4c78-acaf-4e32cb2b0d1c.png)

#### View -> Show Current Band Only(現在のバンドのみ表示）のチェックボックスで現在のバンドのみかどうかを変更できます。

![144MHzari](https://user-images.githubusercontent.com/58735989/195654596-c9045c66-634d-4b61-b5c3-8a49a6c9026b.png)

![144MHznashi](https://user-images.githubusercontent.com/58735989/195654654-e04231d9-85e1-4842-8ce1-19d74890186c.png)

#### ログが共有されているため、パーシャルチェックの画面でマルチの番号を全員で共有することができます

![144MHzpartial](https://user-images.githubusercontent.com/58735989/195654727-ad58d9d2-317b-4cfb-bf22-a731c5ae05c5.png)

## 運用されている周波数の一覧の確認

#### ウィンドウ -> Running 周波数のウィンドウを開きます

![ichiran](https://user-images.githubusercontent.com/58735989/195654833-48951cb4-455a-4abe-b1dc-be4254a1d84d.png)

#### 現在、運用されている自分以外の全てのバンドが分かります

![running](https://user-images.githubusercontent.com/58735989/195654893-6654d910-fe4c-4dbb-a4fd-672436a23743.png)

## チャット機能

#### ウィンドウ -> Z-Serverメッセージを開きます

![ichiran](https://user-images.githubusercontent.com/58735989/195654969-76fb35aa-ab2a-4c83-bf7b-5ed62a512b2d.png)

#### 入力欄に伝えたいことを入力し、Sendを押します

![chattosub](https://user-images.githubusercontent.com/58735989/195655043-5a24fb6e-a817-40fc-8b87-2697dad60d55.png)

#### すると、他の人も見ることができます
- 他の人のPC

![chatmain](https://user-images.githubusercontent.com/58735989/195655098-814a413a-2ee1-471b-9a12-d6b449e8c383.png)

- また、zLogの下にもチャットが表示されます

![chatwindow](https://user-images.githubusercontent.com/58735989/195655144-b232e8de-6208-4b0a-90a9-e55354e2000e.png)
  
- Z-Serverのアプリでもチャットすることができます。　そのため、同様に確認することができます

![chatzserver](https://user-images.githubusercontent.com/58735989/195655211-de6bba6a-b8f5-4a47-8d3c-a83056106a0b.png)

#### Z-Serverのアプリでは、それぞれのバンドの人に個別に連絡すること連絡することができます
- Z-Serverアプリ（全体向けと個別向けのウィンドウがあります）

![zserver4](https://user-images.githubusercontent.com/58735989/195655403-76c6ff0c-0298-499e-9a55-af6d86d60c7b.png)

- Z-Serverから送られた人

![chatservertosub](https://user-images.githubusercontent.com/58735989/195655659-c49be216-ea80-4fa9-b8fa-550b94eed7e9.png)

#### ￥WHO を入力することで運用者を全て確認できます

![who](https://user-images.githubusercontent.com/58735989/195655728-51053c9e-4887-48dd-a103-ea52b9f98e80.png)

## PacketClusterの情報共有
- Z-Serverに繋いでいるzLogの中で一台だけがPacketClusterに接続するだけでも、すべてのzLogにPacketClusterの情報を知らせることができます
- PacketClusterについては[Packet Cluster連携](Packet-Cluster%E9%80%A3%E6%90%BA)をご確認ください

#### まず、PacketClusterに接続するzLogは通常通り、PacketClusterのウィンドウを開いてください。そして、Relay Spot to Other Bandをチェックして、接続してください

![packetcluster](https://user-images.githubusercontent.com/58735989/195655789-5ed8967a-8d17-4539-b5b2-15312b8be114.png)

#### PacketClusterに接続しないzLogは各種設定-> オプション　-> ハードウェア2でPacketClusterの欄をNoneにしてください
#### そして通常通り、 バンドスコープを開くとPacketClusterの情報を確認できます（バンドスコープを押しても何も開かない場合は、各種設定-> オプション　-> バンドスコープで開く周波数の設定を確認してください）

![packetclustersub](https://user-images.githubusercontent.com/58735989/195655882-760da524-beaa-4ee4-a72c-06427de77937.png)

## コンテスト終了時
#### zserverも、file -> save as(またはsave)で全てのログを保存することができます(閉じる際にも保存を確認されると思います)

![zserver5](https://user-images.githubusercontent.com/58735989/195656385-6e7ce488-93eb-44c9-8a88-09a4d88fa782.png)

## ぜひ、社団局の皆様はzLogをご活用ください！！
