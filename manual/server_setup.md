---
title: Z-Serverのセットアップ
---

# Z-Serverのセットアップ

ここではZ-Serverのセットアップを説明いたします

## Z-Serverでできること

マルチオペ・マルチTXのコンテストの際に、ログの共有・コンテストナンバーの共有・チャット・PacketClusterの情報共有などができ、社団局の大きな支えとなります

## 必要なもの

2台以上のインターネット（または、同じルータ）に接続されたPC
これはZ-Serverを起動させて、ログの共有やチャットなどするための仕事をするサーバを立てるPCとzLogでロギングするPCを同じにしても構わないためです。

ただし、ここでは同じルータに接続された場合のみ説明いたします

## Z-Serverを行うPCおよびロギングだけのPCにおいて共通する作業

### それぞれのPCの住所(IPアドレス）を知るための作業
#### コマンドプロンプトを検索し、開く

![cmd1](https://user-images.githubusercontent.com/58735989/195389228-5b76aec3-39bc-4e96-87a1-da8daad3e011.png)

#### 黒い画面にipconfigと入力し、エンターを押す

![cmd2](https://user-images.githubusercontent.com/58735989/195389470-14c9efe5-b088-49c2-b602-d8a056b662c1.png)

#### 出てくる文字列の中で、無線接続の場合はWi-Fi, 有線接続の場合はイーサネットというところの配下にある「IPv4の横の数字をメモする」
- ここではZ-Serverを立てるPCは192.168.134.121でした

![cmd3](https://user-images.githubusercontent.com/58735989/195390297-27744bd6-46e7-4eb3-bf9c-33e572427a79.png)

### Pingを通して、お互いが通信できるか確認する作業
お互いが接続できるかを確認するためにpingという通信をする必要があります。しかし、その通信は安全のためにファイアウォールと呼ばれるものに止められてしまうので、その設定を変更します

#### windows homeボタンを押し、歯車マークの設定を開く

![set2](https://user-images.githubusercontent.com/58735989/195391149-8f73f98a-35cb-4f2b-aecb-7a2b930ffb0f.png)

#### 更新とセキュリティを押す

![set3](https://user-images.githubusercontent.com/58735989/195391453-edd3bdf1-3037-4ea9-92d2-16bdaa1b51aa.png)

#### Windowsセキュリティを開く

![set4](https://user-images.githubusercontent.com/58735989/195391836-25317a27-3308-4543-9749-bcd51492c269.png)

#### ファイアウォールを開く

![set5](https://user-images.githubusercontent.com/58735989/195392013-ef90e16f-5431-41d7-b948-a6579573aa3f.png)

#### プライベートネットワークの右にアクティブと来ていることを確認する

![set6](https://user-images.githubusercontent.com/58735989/195392488-29938f4f-81a2-4e3b-a805-5bed6f06175b.png)

#### 違う場合は

Wi-Fiの設定をするところから

![setbef1](https://user-images.githubusercontent.com/58735989/195392682-b55b0ce7-67ba-4f81-9385-8ff3bfd7f1cd.png)

現在接続中のものの、プロパティを押して

![setbef2](https://user-images.githubusercontent.com/58735989/195392889-6a7831ad-3252-422f-910a-00733aa91e2c.png)

プライベートにチェックを変えてください

![setbef3](https://user-images.githubusercontent.com/58735989/195393128-30ce9368-3930-4c93-a4d8-19d10c116eef.png)

#### 詳細設定を選ぶ

![set6](https://user-images.githubusercontent.com/58735989/195393312-06e5bd3f-ebc0-4115-b4d0-8845d4998dda.png)

#### 受信の規則を選ぶ

![set7](https://user-images.githubusercontent.com/58735989/195393523-82c09ffa-55fa-48e0-9cfc-c001c4da99e3.png)

#### ファイルとプリンタの共有　（ICMPv4）をクリックして青くし、右側の有効化を押してください

![set8](https://user-images.githubusercontent.com/58735989/195393986-5bd1fc96-257d-4e42-b905-b9792428f3ee.png)

#### チェックがついたことを確認してください

![set9](https://user-images.githubusercontent.com/58735989/195394198-91942a6d-0eac-48ea-9f95-fa3a247644e9.png)

これで事前の準備が完了です

## Z-Serverを立てるPCが必要なこと

### Z-Serverのインストール

#### [ここから](https://zlog.org/download.html)Z-Serverをダウンロードする

![install1](https://user-images.githubusercontent.com/58735989/195394524-c0fbf27e-f8d9-4799-be13-dd08341e72bf.png)


#### zipフォルダを解凍するとその下にまたzipフォルダがあります

![install4](https://user-images.githubusercontent.com/58735989/195394891-30660536-5232-4dd5-b673-eb2cffc50f68.png)


#### ご使用のPCのbit数に合わせて、適切な方を解凍し、置き換えてください
ここでは64bitなので、x64を解凍し、解凍してすぐの位置にあったものを削除し、x64から出てきたもので置き換えています

![install6](https://user-images.githubusercontent.com/58735989/195395247-bec1f6fc-9f9c-4347-8db8-93dda6fb8a50.png)

### Pingを通して確認する

#### 再度、上と同じ方法でコマンドプロンプト(黒い画面）を開く

#### Zserverを立てるPCで、ping (zLogを使うPCのIPアドレス)と入力してエンターを押す
- ここでは "ping 192.168.134.121"
- 画像は間違えて、zLogのPCからZserverのPCにpingを叩いていますが、気にしないでください
- 基本的には使うPCすべてに行ってください

![setsub2](https://user-images.githubusercontent.com/58735989/195395959-cf936d58-b942-4573-85cf-28cb5549a340.png)

#### そして、応答があり、損失が0%に近いことを確認してください（接続できない場合は、ルーターとの接続やファイアウォール周りを確認してください）

### Z-Serverを起動する

#### インストールしたZ-Serverを起動してください

#### ファイアウォールの警告が出た場合は許可してください

![zserver2](https://user-images.githubusercontent.com/58735989/195397376-a97e5438-d971-4ae5-a7b6-bc04414b36cb.png)

#### コンテストの種類を選んでください
- これはZ-Serverでの得点表示のために使うものです。そのため、対応していないコンテストの場合でもzLogの機能自体には支障はありませんので、その場合は適当なコンテストを選んでおいてください。

![zserver](https://user-images.githubusercontent.com/58735989/195397593-6d35ca87-182a-4c7b-8696-7c59df4267e8.png)

#### このような画面が出てきたらServerが立ちました

![zserver3](https://user-images.githubusercontent.com/58735989/195397651-906ca813-cfeb-4e7d-90eb-2b5f3556bfa6.png)

## zLogを使うPCについて

#### zLogを通常通り起動します

![zlog1](https://user-images.githubusercontent.com/58735989/195398128-a921cd03-ee25-4e44-8d93-3a6ca0592f25.png)

#### 設定 -> オプションを選びます

![zlogsub1](https://user-images.githubusercontent.com/58735989/195398298-c655c031-d6e3-44e1-bed5-35cd6b72fe65.png)

#### ハードウェア2に行きます

![zlogsub2](https://user-images.githubusercontent.com/58735989/195398351-0f6ef9e2-dd51-4ebe-9a89-002cabcdfe9d.png)

#### Z-ServerをNoneからTELNETに変えます

![zlogsub3](https://user-images.githubusercontent.com/58735989/195398504-878c0bcd-6f06-4963-8000-ae053d11b4da.png)

#### TELNET設定を押して、Z-Serverを建てたPCのIPアドレス（ここでは192.168.134.121）を入力します

![zlogsub4](https://user-images.githubusercontent.com/58735989/195398734-48c3cffa-e021-48ba-95b5-0bbc3f4a505e.png)

#### 注意！　Z-ServerのPCでzLogを使う場合、そのPCのzLogはIPアドレスではなく、localhostと入力します

![zlog4](https://user-images.githubusercontent.com/58735989/195399120-d9cefc73-cac0-42ae-86d7-8be780a026cb.png)

#### そして、PCの名前を好きなように決めましょう（ダブりがないようにしてください。ここではsubにしています）

![zlogsub5](https://user-images.githubusercontent.com/58735989/195399232-5eab3b1f-e498-4fd7-b7c6-de284586881a.png)

#### そして、OKを押してください

#### ネットワーク -> Z-Serverに接続を押してください

![zserverzlog1](https://user-images.githubusercontent.com/58735989/195399530-7d6015e9-350a-4a47-9137-05c2a859c341.png)

#### ログをどのようにするか選んでください
- Merge local log with Z-Server : ローカルのPCのログと、Z-Serverでつながったネットワーク上のログをマージします。
これは「ローカルPCにないQSOをネットワークからダウンロード」および「ネットワークにないQSOをローカルPCからアップロード」することでマージしますので、既存QSOが削除されることはありません。したがって、再接続時だけでなく、初回の接続時に選択しても安全です。

- Download log from Z-Server (Erase local log) : ローカルのPCのログを完全に消去して、ネットワークからログをダウンロードします。初回の接続時以外は絶対に必要な場合でない限り、このオプションを選ぶべきではありません。

- 基本的にはMergeで良いでしょう

![zserverzlog2](https://user-images.githubusercontent.com/58735989/195399589-948c59a9-455c-4c47-9128-3760f13ad7e7.png)

#### そして、OKを押すと　Z-Serverと接続できます

- 接続されるとツールバー上にアイコンが表示されます。また、接続後にネットワークから何らかの理由で切断された場合、警告ダイアログが表示されます。

## 機能や使い方について

設定の説明について、長々とお付き合いいただきありがとうございます。

長くなってしまったので、機能や使い方は[Zlink(Z-Serverに接続したzLog)の機能](zlink_howto.md)にてご紹介いたします。
