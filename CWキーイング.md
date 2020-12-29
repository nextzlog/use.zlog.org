## 概要

COMポート又はUSBインターフェースを使用してCWのキーイング動作が可能です。キーボードからCWを送信できるCW Keyboardと定型文用のCW Message Padを備えています。

## COMポート仕様

PTTがRTS信号、KeyingがDTR信号を使用します(実COMポート、仮想COMポート共)。各信号をレベル変換して無線機に接続するインターフェースを用意して下さい。  
接続インターフェースは制作して頒布しているOMより購入するほか、[制作例や回路図](https://www.google.com/search?q=ZLOG+CW%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%95%E3%82%A7%E3%83%BC%E3%82%B9+%E5%9B%9E%E8%B7%AF%E5%9B%B3&oq=ZLOG+CW%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%95%E3%82%A7%E3%83%BC%E3%82%B9+%E5%9B%9E%E8%B7%AF%E5%9B%B3)が公開されていますので自分で制作することもできます。部品代数百円で制作できます（実COMポートの場合。仮想COMポートについては後述）。  
V2.5よりRTSとDTRを逆にできます（後述）  

D-SUB 9pinコネクタの場合（実COMポートの場合）
| ピン | 信号 | 内容 |
| --- | --- | --- |
|1|DCD||
|2|RXD||
|3|TXD||
|4|DTR|Keying|
|5|GND||
|6|DSR||
|7|RTS|PTT|
|8|CTS||
|9|RI||

| メス側のピン配列 |
| :---: |
| 5 4 3 2 1<br>  9 8 7 6|

４，５，７番ピンを配線します。

### COMポートが無いPCの場合（USBを使った仮想COMポートの場合）

最近はCOMポートが存在しないPCが増えてきました。その場合は市販のUSB-Serial変換ケーブルを使用して下さい。  
[amazon](https://www.amazon.co.jp/s?k=usb+%E3%82%B7%E3%83%AA%E3%82%A2%E3%83%AB%E5%A4%89%E6%8F%9B%E3%82%B1%E3%83%BC%E3%83%96%E3%83%AB)に色々売っています。また、[秋月電子](http://akizukidenshi.com/catalog/c/cusb232/)でも色々取り扱っています。
USBを使っていますが、仮想COMポートなので、zLog内のプルダウンで、USBでは無くCOMxを選択します。    

### 信号線を逆にする（V2.5～）(実COMポート、仮想COMポート共)

「Options」－「Hardware」タブの「CW/PTTControl」グループにある、「Reverse the signal lines」をチェックONでRTSとDTRが逆になります。  

![CW/PTT Control](https://github.com/jr8ppg/zLog/blob/images/options_cwptt.png)

### RIGコントロールと同時に使用する（V2.6～）
ICOMの一部機種では一つのCOMポートでCI-V通信とCWキーイングが可能です。また[U5-Link(ICOM)](https://www.venus-itech.com/product/u5-link/)と言うCW I/Fでも可能です。  
使用するにはRIGコントロールのCOMポートとCWキーイングのCOMポートを同じにします。
![U5-LInk](https://github.com/jr8ppg/zLog/blob/images/u5-link.png)  
IC-705,IC-7300では動作確認ができています。その他はIC-7851が可能と思われますが、未確認です。  

## USBポート仕様
ここでは、USBポートは、Cypress社CY7C63001A RISC CPUを使ったUSBの事を指します。zLog内のプルダウンで、USBを選択します。
（同じUSBでも仮想COMポートとは動作が違います）


[USBIF4CW](http://nksg.net/usbif4cw/product/feature_ver2-x/)や[AMD-USB-CQ Ver.1.0x/AMD-USB-KEY](http://jn2amd.html.xdomain.jp/usbcq10.htm)を使用してキーイングできます。  
USBIF4CW内蔵のキーヤーに対して、速度設定（同期），PTT Delay設定（同期），パドルリバース設定ができます。（Ver.2のみ）  
Ver.1とVer.2は自動判別します。
~~~
USBIF4CWの制限事項
・PTT Delayは255ms以上を設定しても、USBIF4CWに対しては254msの設定になります。（Before/After共）
・下限値はBeforeが0ms、Afterが50msです。
・複数台接続には対応していません。
~~~

## その他のインターフェース

1. YAESUのSCU-17(仮想COMポート)でもキーイングできたとレポートがありました。  
CWとRTTY(FSK)の同時接続（配線）も可能ですが、機種によって配線方法が異なりますのでYAESUへご相談をお勧めします。  
2. [PCWI01](https://www.jh4vaj.com/pcwi01_01)でもキーイング出来ます。
3. JN2AMD OMのインターフェースについて<BR>
JN2AMD OMが作成されたIFには回路的に二種類有ります。<BR>
一つ目は、Cypress RISC CPU with USB:CY7C63001Aを使った、「ZLOG用インターフェース」<BR>
二つ目は、FTDI社の汎用RS232-USB変換ICを使った、「アマチュア無線のＣＷインターフェース、音声ＣＱマシーン、ＳＳＴＶ、ＲＴＴＹインターフェース関連」<BR>
zLog令和版では、どちらも使う事が可能ですが、CW/PTT portで、一つ目は「USB」、二つ目は「COMxx」を選択します。<BR>
以下のインターフェースは、WEB内に「ＺＬＯＧでは、ＣＷは打てませんでした。」との記述が存在しますが、「USB」では無く、COMxx(仮想COMポート)を選択すれば、zLog令和版でCWキーイング可能です。<BR>
* [AMD-USB-RIG-CW-SOUND Ver4.0](http://jn2amd.html.xdomain.jp/usbrigcwsound40.htm)
* [AMD-USB-RS232C-CW-SOUND Ver1.6](http://jn2amd.html.xdomain.jp/usbrs232ccwsound16.htm)
* [AMD-USB-RIG-CW-SOUND Ver3.5<表記上はVer3.2>](http://jn2amd.html.xdomain.jp/usbrigcwsound30.htm)
* [AMD-USB-CW-SOUND Ver1.7](http://jn2amd.html.xdomain.jp/usbcwsound10.htm)
* [AMD-USB-RIG-CW Ver1.1](http://jn2amd.html.xdomain.jp/usb_rig_cw_10.htm)


## パドル接続について

従来はUSBIF4CWに接続したパドル操作に対応してzLogのキーヤー（エレキー）が符号を送出することができましたが、バージョン2.5で廃止となりました。  
USBIF4CW自体にキーヤー機能が存在するためzLogで行う必要がなくなり、その他のパドル接続I/Fが存在しないため不要となったものです。  
ただし、パドル操作をzLogが検出した場合、実行中のCWキーイングは中止されます（ESCキー操作と同等）
~~~
影響
・USBIF4CW Ver.1はキーヤー機能が無いため、パドルを接続しても使用できません
・AMD-USB-CQ Ver.1.0xもキーヤー機能が無いため、パドルを接続しても使用できません
~~~

## 置換マクロ
CW送出メッセージ内の置換マクロコマンドです。
|番号|置換マクロ|置換後|
| --- | --- | --- |
|1|[AR]|AR|
|2|[SK]|SK|
|3|[KN]|KN|
|4|[BK]|BK|
|5|$B|現在交信中の相手コールサイン|
|6|$X|自局コンテストナンバー|
|7|$R|自局ＲＳＴ|
|8|$F|相手局コンテストナンバー|
|9|$Z|CQ ZONE|
|10|$I|IARU ZONE|
|11|$Q|QTH(CITY又はPROV又はMY ZONE)(コンテストによる)<br>PROV：ALL JA,KCJ,Pedition,JIDX,ARRL(W/DX),AADX<br>MY ZONE：CQWWと派生Contest,IARU<br>CITY：その他Contest|
|12|$V|QTH(PROV)|
|13|$O|オペレーター|
|14|$S|シリアルＮＯ|
|15|$P|電力符号(H,M,L,P)|
|16|$A|相手局年齢|
|17|$N|電力符号(10,50,100,500,1KW)|
|18|$L|最後にロギングしたコールサイン|
|19|$C|RTTY時は相手局コールサイン。それ以外は:***************(16文字スキップ？)|
|20|$E|交信中コールサイン。<br>1.コール入力欄が未入力なら最後にロギングしたコールサイン。<br>2.#082交信開始（TABキー）操作後に修正されていればコール入力欄の内容。<br>1.2.以外なら置換されない（$Eは無くなる）|
|21|$M|自局コールサイン|

## CW Keyboard
「Windows」メニューの「CW Keyboard」より開きます。  
入力した文字をそのままキーイングします。  使用できる文字は、A-Z,0-9の他、/と?です。  
![CW Keyboard](https://github.com/jr8ppg/zLog/blob/images/cwkbd.png)

特殊文字として下記の４種類が使用できます。
|キー|送信符号|
| --- | --- |
|SHIFT+A|AR|
|SHIFT+B|BK|
|SHIFT+K|KN|
|SHIFT+S|SK|

## CW Message Pad
簡単に定型文を送信するウインドウです。（V2.5より）  
「Windows」メニューの「CW Message Pad」より開きます。各定型文のボタンをクリックするとCWが送信されます。
定型文には$C等の置換マクロを含めることができます。定型文のボタンはドラッグアンドドロップで移動可能です。  
CTRLキーを押しながらドラッグアンドドロップすることでコピーできます。  
![CW Message Pad](https://github.com/jr8ppg/zLog/blob/images/cwmsgpad1.png)  

定型文を編集するには、右クリックメニューで「編集」をクリックします。  
![CW Message Pad](https://github.com/jr8ppg/zLog/blob/images/cwmsgpad2.png)

簡易エディターが表示されるので、下図を見習って入力して下さい。  
一桁目からは分類名を入力します。定型文は次の行よりTABで区切って入力します。定型文は１００文字まで入力可能です。  
入力した内容はcwmessage.txtと言うファイルに保存されます。    
![CW Message Pad](https://github.com/jr8ppg/zLog/blob/images/cwmsgpad3.png)

特殊な定型文として下記の４種類が使用できます。
|定型文|送信符号|
| --- | --- |
|[AR]|AR|
|[BK]|BK|
|[KN]|KN|
|[SK]|SK|

