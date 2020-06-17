## 概要
Packet ClusterサーバーにTELNET接続して、スポット情報を取り込む機能です。バンドスコープと連携しRIGへ周波数をセットすることができます。  
※COMポートを使用した接続（パケット通信）機能は残っていますが動作未確認です。

## 設定
1. WindowsメニューのOptionsをクリックして、Optionsダイアログを表示しHardwareタブを開きます。
1. PacketCluster欄（赤枠の所）でPortをTELNETにし、[TELNET settings]ボタンをクリックします。  
![設定画面](https://github.com/jr8ppg/zLog/blob/images/cluster01.png)
1. 下図のTELNET settingsダイアログで、Host name Port #を入力します。Host name欄にホスト:ポートの形式で入力することもできますが、Port #欄は0以外の値にして下さい。（Host name欄のポート番号が優先されます）  
![ホスト情報入力画面](https://github.com/jr8ppg/zLog/blob/images/cluster02.png)  

### ClusterList.txt
zlog.exeと同じフォルダにClusterList.txtと言うファイルを置いておくと、接続先ホストの選択リストに表示されます。  
![選択リスト表示例](https://github.com/jr8ppg/zLog/blob/images/cluster03.png)  
内容例
~~~
telnet.reversebeacon.net:7000
ccc.jg1vgx.net:7373
arc.jg1vgx.net:7000
dxc.jg1vgx.net:7300
~~~

## ホストへ接続
1. WindowsメニューのPacket Clusterをクリックするか、zLogのメインウインドウのボタンをクリックします。  
![Packet Cluster接続ボタン](https://github.com/jr8ppg/zLog/blob/images/cluster04.png)
1. Packet Clusterウインドウが表示されるので、[Connect]ボタンをクリックします。
1. ホストの種類にもよりますが、コールサインの入力を求められますので、自分のコールサインを入力しEnterキーを押します。  
![Packet Clusterウインドウ](https://github.com/jr8ppg/zLog/blob/images/cluster05.png)
1. 受信が始まります。  
![Packet Clusterウインドウ](https://github.com/jr8ppg/zLog/blob/images/cluster06.png)
1. 受信したスポットはバンドスコープへ展開されます。未交信が緑、交信済みが黒で表示されます。リグコントロールしている場合、ダブルクリックすることでリグへ周波数を設定します。  
![Band Scope表示例](https://github.com/jr8ppg/zLog/blob/images/cluster07.png)
