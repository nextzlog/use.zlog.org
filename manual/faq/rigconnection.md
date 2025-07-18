---
title: リグとの接続に関するFAQ
---

# 目次

FAQ-2 リグコントロールに関すること

* [FAQ-2-1 リグコントロールとCWキーイングを1本のUSBケーブルで行う](#faq-2-1-リグコントロールとcwキーイングを1本のusbケーブルで行う)

FAQ-3 CWキーイングに関すること
  
* [FAQ-3-1 CWが突然全く打てなくなってしまう](#faq-3-1-cwが突然全く打てなくなってしまう)

  
## FAQ-2-1 リグコントロールとCWキーイングを1本のUSBケーブルで行う

### 質問

USBポートをもつリグで、リグコントロールとCWキーイングをUSBケーブル1本でやりたいです。どうすればいいですか？

### 答え

リグによって、できるものとできないものとがあります。まず、[マニュアルのリグコントロールのページ](https://use.zlog.org/manual/%E3%83%AA%E3%82%B0%E3%82%B3%E3%83%B3%E3%83%88%E3%83%AD%E3%83%BC%E3%83%AB)を読み、自分のリグがどのような機能に対応しているかを確認してください。リグのUSBポートが持つ機能により、以下の4つの可能性が考えられます。

(1) 仮想COMポートを2つ持つリグの場合(IC-9700, IC-705, FT-991A, FT-891, TS-890 など)  
リグコントロール用のCOMポートと、CWキーイング用のCOMポートを別に持つリグの場合は、リグコントロールの設定(ハードウエア)でそれぞれのポートを"Control port"と"CW port"に設定すればOKです。(例として、[IC-9700での設定方法](https://use.zlog.org/manual/ic9700.html)がマニュアルにあります。)

(2) 仮想COMポートを1つしか持たないがCWキーイングに対応するリグの場合(IC-7300 など)  
1つのCOMポートをリグコントロールとCWキーイングで共用できるタイプのリグでは、"Control port"と"CW port"におなじCOMポートを設定し、運用ができます。(例として、[IC-7300での設定方法](https://use.zlog.org/manual/ic7300.html)がマニュアルにあります。)

(3) 仮想COMポートを2つ持っているが、CWキーイングに対応していないリグの場合(IC-9100, IC-7100 など)  
リグコントロールはできますが、CWキーイングには対応していないため、CWキーイング用のインターフェースを別途用意する必要があります。
インターフェースの作例としては、nksg氏による[USBIF4CW](https://nksg.net/gadget/) や、USB-シリアル変換ケーブルを介してシリアルポートでキーイングするものなどがあります。[マニュアルのCWキーイングのページ](https://use.zlog.org/manual/CW%E3%82%AD%E3%83%BC%E3%82%A4%E3%83%B3%E3%82%B0)も参考にしてください。

(4) 仮想COMポートを1つしか持たず、CWキーイングに対応していないリグの場合(TS-590,TS-2000 など)  
(3)の場合と同じです。CWキーイング用のインターフェースを別途用意する必要があります。ただし、CATコマンドを使ってCW符号を再生する機能が使える場合があります。その場合は別途インターフェースを用意しなくてもCWの送出が可能です。

  
## FAQ-3-1 CWが突然全く打てなくなってしまう

### 質問

コンテスト中、ＣＷキーイングが突然できなくなりました。  
仕方ないのでzLogを再起動すると回復しましたが、何か起こりましたか？  

### 答え

考えられる原因のひとつはUSBへのRF回り込みです。  

以下説明長いです。  
1. 最近のUSB直結でPC接続できるリグに対応するため、
   リグコントロール用のシリアル通信と、キーイング用のシリアル通信を
   共用するようにしました。（そうしないと実現できない）
2. 屋外でのノートＰＣ使用時に給油等で発電機を止める際などの停電時にリグは電源OFF，
   ノートＰＣはバッテリー駆動となるが、通信はできないため結局zLogを再起動することに
   なるため、リグコントロールのウインドウにON/OFFのスイッチを設けてシリアル通信を
   ON/OFFできるようにしました。
3. そのついでに、zLogはUSBケーブルの抜去を検出すると、リグコントロールをOFFにするようにしています。
   これはリグ直結，シリアル変換ケーブル，その他I/F機器はUSB接続なので、抜けたと言うことは
   何らかのトラブルが発生したと推測できるからです。
4. 上記1と2よりリグコントロールをOFFにするとCWキーイングができなくなります。
5. ここで本題ですが、USBにRFの回り込みが発生してUSBコントローラがリセットされるような状況（詳細はわかりません）になると、
   上記3が発動してリグコントロールをOFFにしてしまいます。
   そうすると突然CWキーイングができなくなります。（同時にリグコントロールも止まっているはずです）
  
突然CWキーイングができなくなったら、リグコントロールウインドウ左上のスイッチがOFFになっていないか確認して下さい。  
OFFならONにするとキーイングできるようになります。  
ONなら別の原因と思われます。  
  
参考：[モバイル対応](https://use.zlog.org/manual/%E3%83%AA%E3%82%B0%E3%82%B3%E3%83%B3%E3%83%88%E3%83%AD%E3%83%BC%E3%83%AB#%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E5%AF%BE%E5%BF%9C2850)


