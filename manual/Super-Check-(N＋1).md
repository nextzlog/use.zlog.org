## 概要

Super Checkとは、予め用意したコールサインリストをコールサイン欄に入力した内容で部分一致検索を行い。マッチする物をリスト表示する機能です。コールサインリストは従来のZLOG.SPC形式の他、コンテスト毎の.ZLOファイル、[MASTER.SCP](http://www.supercheckpartial.com/MASTER.SCP)ファイルが使用できます。

## N+1とは

通常のSuper Checkは部分一致ですが、N+1の場合は入力した内容と１文字違うコールサインをリスト表示する機能です。他のソフトウェアに実装されているものと同様のものです。コールサイン欄に３文字以上入力した場合に動作します。

![N+1](https://raw.githubusercontent.com/jr8ppg/zLog/images/Nplus1.png)

また、完全一致した場合は設定した色でハイライトします。  
![full match](https://raw.githubusercontent.com/jr8ppg/zLog/images/nplus1_4.png)

※正確には１文字では無くレーベンシュタイン距離が１のものです。

## 設定

OptionsのMiscタブで設定します。
ZLOG.SPCとMASTER.SCPは下図のフォルダ欄で入力したフォルダか、zlog.exeと同じフォルダに配置します。 
.ZLOファイルはフォルダ欄のみです。

![設定](https://raw.githubusercontent.com/jr8ppg/zLog/images/spcsetting.png)

## ZLOG.SPCの仕様

下記の様に１行１レコードで記述します。先頭の文字が;又は#の場合、コメント行として扱われます。  
コールサインの後にスペースで区切ってコンテストナンバーも記述できます。なくても構いません。

~~~
; ZLOG.SPC
JA0ABK     0809
JA0ACQ     0920
JA0ADY     0804
JA0AMA     9011
JA0AUF     0822
JA0BBM     0805
~~~

## SuperCheckデータのロード順

SuperCheckデータのロード順は下記の通りです。
1. *.SPCファイル（ファイル名順）  
同じファイル内では最初のレコードが有効  
複数ファイルがある場合は後のファイルのレコードが有効  
※この時、SPCファイルのレコードは交信日時をロード時の日時とします。(21/10/09追記)
1. MASTER.SCP
1. *.ZLO  
ファイルの並びにかかわらず交信日時が新しい物が有効  
※既にロードしているSPCファイルのレコードを含め、交信日時が新しい物を有効とします。(21/10/09追記)


