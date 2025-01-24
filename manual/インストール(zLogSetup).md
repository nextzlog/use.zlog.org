---
title: zLogのインストール（zLogSetup）
---

## 概要
zLogでは V2.9.2.4 よりインストーラーを用意しました。zLogSetup.exeを起動し、インストール先のフォルダやJCCコードなどを入力することで直ぐにzLogを利用可能な状態でインストールすることができます。  
上書きインストールにも対応していますので、バージョンアップも容易に行うことができます。  
32bit/64bitはインストーラーが判別し、Windowsに応じたzLogがインストールされます。但しWindowsXPではzLogSetup.exeが起動しません。  

## インストール方法

インストールするときは、下記の手順で行って下さい。  

1. zlog portal サイトの [download](https://zlog.org/download.html) ページより最新のインストーラー版(exe)をダウンロードします。
2. ダウンロードしたzLogSetup.exeファイルをダブルクリックして起動します。
3. インストーラーが起動します。
1. 最初にインストール先フォルダを指定します。初期値として"D:\zlogwin"が表示されます。入力後、「次へ」クリックします。  
![image](https://github.com/user-attachments/assets/834d05fc-90d6-4de7-8204-b8029f2e0411)
1. 既に指定したフォルダが存在する場合は下図のウインドウが表示されます。[はい]か[いいえ]をクリックします。  
![image](https://github.com/user-attachments/assets/3b69a032-6307-4800-b597-14bf6ee434e6)
1. 次に自局のステーション情報を入力して、「次へ」をクリックします。  
![image](https://github.com/user-attachments/assets/0a8e8b56-c989-495a-93b8-769002a4b59a)
1. 次にCQゾーン,ITUゾーンを入力します。JA局なので25,45が初期値として表示されます。入力後、「次へ」をクリックします。  
![image](https://github.com/user-attachments/assets/b98aa0db-4219-4cca-8bec-7b48aa7d82b9)
1. 次に操作方法を選択して「次へ」をクリックします。(V2.9.3.0以降)  
![image](https://github.com/user-attachments/assets/ac379297-1c9f-490b-82d6-330450780912)
1. 次にインストールするコンポーネントを選択します。多くの方は初期値のままで良いでしょう。  
![image](https://github.com/user-attachments/assets/b613d86a-7030-4431-a8ce-cebfed521743)
1. 次に追加タスクを選択して「次へ」をクリックします。現在はデスクトップアイコンの作成有無のみです。  
![image](https://github.com/user-attachments/assets/6a384245-3299-453d-a759-3ed7211ac5de)
1. インストールの準備ができました。「インストール」をクリックするとインストールを開始します。  
![image](https://github.com/user-attachments/assets/fe8eb083-8aea-440b-8d8c-21993f46e42f)
1. インストール中です。  
![image](https://github.com/user-attachments/assets/d716e123-3a27-4e2d-a31d-465c335389b5)
1. インストールが完了すると、readme.txtを表示します。  
![image](https://github.com/user-attachments/assets/ab35b0c5-37c6-407c-9bcf-fdb03d5f4b7e)
1. インストールが完了しました。  
![image](https://github.com/user-attachments/assets/924a4814-737a-446e-aa79-39076fa164c9)


## 推奨動作環境
* OS:Windows10, CPU:Core i3以上程度, Memory:8G以上（4Gでも良いけど他のことができなくなる）, モニター:FHD(1920×1080）以上推奨

### 制作者のテスト環境
* OS:Windows11(64bit), CPU:Core i5, Memory:16Gのデスクトップ
* OS:Windows10(64bit), CPU:Core i5, Memory:8GのノートＰＣ
* <s>OS:Windows7(64bit), CPU:Core2 Duo, Memory:8Gのデスクトップ</s>
* <s>OS:WindowsXP(32bit), CPU:Pentium4, Memory:1Gのデスクトップ（zLog単独なら支障はありません）</s>
