E-LOG 1.0は主にJARL主催以外のいわゆるローカルコンテストで使用します。（JARL主催コンテストは2.0を使用して下さい）

## JARL E-LOG 1.0の作成

①コンテスト後はFileメニューより、Create E-Log (JARL 1.0)メニューをクリックします。  
![E-LOG 1.0の作成](https://raw.githubusercontent.com/jr8ppg/zLog/images/elog10_1.png)

②入力ダイアログに必要事項を入力します。  
![必要事項の入力](https://raw.githubusercontent.com/jr8ppg/zLog/images/elog10_2.png)

③必要に応じてスコア調整をします。  
（参加部門以外のバンドの交信をサマリーから除きます。参加部門以外でもログは提出しましょう。）  
![スコア調整](https://raw.githubusercontent.com/jr8ppg/zLog/images/elog10_3.png)

④E-log作成ボタンをクリックしてファイルに出力します。  
⑤作成されたログは下記の様になります。ログ部分は固定長形式です。
~~~
<SUMMARYSHEET VERSION=R1.0>
<CONTESTNAME>ALL JA コンテスト</CONTESTNAME>
<CATEGORYCODE>X7</CATEGORYCODE>
<CATEGORYNAME></CATEGORYNAME>
<CALLSIGN>JR8PPG</CALLSIGN>
<OPCALLSIGN></OPCALLSIGN>
<SCORE BAND=7MHz>593,590,48</SCORE>
<SCORE BAND=TOTAL>593,590,48</SCORE>
<TOTALSCORE>28320</TOTALSCORE>
<ADDRESS>〒007
札幌市東区
</ADDRESS>
<TEL></TEL>
<NAME></NAME>
<EMAIL></EMAIL>
<LICENSECLASS></LICENSECLASS>
<POWER>200</POWER>
<POWERTYPE>定格出力</POWERTYPE>
<OPPLACE></OPPLACE>
<POWERSUPPLY></POWERSUPPLY>
<EQUIPMENT>
FT-2000
</EQUIPMENT>
<COMMENTS></COMMENTS>
<REGCLUBNUMBER></REGCLUBNUMBER>
<REGCLUBNAME></REGCLUBNAME>
<OATH>私は、JARL制定のコンテスト規約および電波法令にしたがい運用した結果、ここに提出するサマリーシートおよびログシートなどが事実と相違ないものであることを、私の名誉において誓います。
</OATH>
<DATE>2020年xx月xx日</DATE>
<SIGNATURE></SIGNATURE>
</SUMMARYSHEET>
<LOGSHEET TYPE=ZLOG.ALL>
Date       Time  Callsign    RSTs ExSent RSTr ExRcvd  Mult  Mult2 MHz  Mode Pt Memo
2020/04/25 21:00 JH1***       59  106H    59  09M     09    -     7    SSB  1  TX#0  
2020/04/25 21:01 JJ5***       59  106H    59  36H     36    -     7    SSB  1  TX#0  
2020/04/25 21:01 JE6***       59  106H    59  40H     40    -     7    SSB  1  TX#0  
2020/04/25 21:02 JH1***       59  106H    59  16M     16    -     7    SSB  1  TX#0  
~~~

## 提出方法
### JARL主催コンテスト
E-LOG 2.0形式で提出します。

### JARL主催コンテスト以外
各コンテストの規約に従って提出して下さい。（メールに添付してはいけないケースが多いです）

