---
title: JARL E-LOG 2.1の作成
---
## 概要

JARL E-LOG 2.1を作成します。  

ログシート部分は<strong>タブ区切り</strong>です。  
タブで区切るのでメモ帳などのテキストエディタで見た場合、カラムが揃っていないように見えることがありますが問題ありません。  
（タブ区切りにしているのは、人が見ることを前提としていないこととExcelへの貼り付け親和性が良いためです。）

※バージョン2.8.0.6よりE-LOG 2.1に対応します。  
※バージョン2.8.5.3よりTOTALSCOREタグに正しく対応しました。  

## 作成方法
①コンテスト後は「ファイル」－「JARL E-LOG 2.1の作成]メニューをクリックします。  
![E-LOG 2.1の作成](https://raw.githubusercontent.com/nextzlog/use.zlog.org/master/images/jarl-elog-2.1-menu.png?raw=true)

②入力ダイアログに必要事項を入力します。  
　参加部門以外のバンドでのQSOがある場合は、右側の「スコア調整」欄で参加部門以外のバンドをチェックOFFとして下さい。  
　参加部門以外のバンドのQSOのログはログチェックに使用すると思われますので削除する必要はありません。  
![必要事項の入力](https://raw.githubusercontent.com/nextzlog/use.zlog.org/master/images/jarl-elog-2.1.png?raw=true)

③E-log作成ボタンをクリックしてファイルに出力します。  

④作成されたログは下記の様になります。ログ部分はタブ区切り形式です。

~~~
<SUMMARYSHEET VERSION=R2.0>
<CONTESTNAME>ALL JA コンテスト</CONTESTNAME>
<CATEGORYCODE>XA</CATEGORYCODE>
<CALLSIGN>JR8PPG</CALLSIGN>
<OPCALLSIGN></OPCALLSIGN>
<TOTALSCORE>93840</TOTALSCORE>
<ADDRESS>〒007
札幌市東区
</ADDRESS>
<NAME>名前</NAME>
<TEL>電話番号</TEL>
<EMAIL>jr8ppg@jarl.com</EMAIL>
<POWER>200</POWER>
<OPPLACE></OPPLACE>
<POWERSUPPLY></POWERSUPPLY>
<COMMENTS>FT-2000</COMMENTS>
<REGCLUBNUMBER></REGCLUBNUMBER>
<OATH>私は、JARL制定のコンテスト規約および電波法令にしたがい運用した結果、ここに提出するサマリーシートおよびログシートなどが事実と相違ないものであることを、私の名誉において誓います。
</OATH>
<DATE>2020年4月26日</DATE>
<SIGNATURE>名前</SIGNATURE>
</SUMMARYSHEET>
<LOGSHEET TYPE=ZLOG>
DATE(JST)	TIME	BAND	MODE	CALLSIGN	SENTNo	RCVNo
2020-04-25	21:00	7	SSB	JH1P**	59 106H	59 09M
2020-04-25	21:01	7	SSB	JJ5P**	59 106H	59 36H
2020-04-25	21:01	7	SSB	JE6C**	59 106H	59 40H
2020-04-25	21:02	7	SSB	JH1B**	59 106H	59 16M
~~~


## 提出方法
### JARL主催コンテスト
作成されたファイル（.em）ファイルを電子メールに添付（JARL主催コンテストの場合）し、提出用アドレスへメール送信します。  
心配な場合は提出前にlogtest@jarl.org宛に提出の練習ができます。（このアドレスはいつでも提出できますが、直近のコンテストに合わせたチェック仕様となっています。）
### JARL主催コンテスト以外
コンテストの規約に従って提出して下さい。（メールに添付してはいけないケースが多いです）また、JARL E-LOG 1.0形式を要求するコンテストもありますので、注意して下さい。

## 関連ページ
[電子ログ提出要領解説(JARL Webサイト)](https://www.jarl.org/Japanese/1_Tanoshimo/1-1_Contest/e-log.htm)
