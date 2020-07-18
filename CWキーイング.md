## 概要

COMポート又はUSBインターフェースを使用してCWのキーイング動作が可能です。キーボードからCWを送信できるCW Keyboardと定型文用のCW Message Padを備えています。

## COMポート

PTTがRTS信号、KeyingがDTR信号を使用します。各信号をレベル変換して無線機に接続するインターフェースを用意して下さい。

D-SUB 9pinコネクタの場合
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

## USBポート仕様

[USBIF4CW](http://nksg.net/usbif4cw/product/feature_ver2-x/)を使用してキーイングできます。

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
|11|$Q|QTH(PROV)|
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

