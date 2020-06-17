## 概要
Packet ClusterサーバーにTELNET接続して、スポット情報を取り込む機能です。バンドスコープと連携しRIGへ周波数をセットすることができます。  
※COMポートを使用した接続（パケット通信）機能は残っていますが動作未確認です。

## 設定

### ClusterList.txt
zlog.exeと同じフォルダにClusterList.txtと言うファイルを置いておくと、接続先ホストの選択リストに表示されます。  
  
内容例
~~~
telnet.reversebeacon.net:7000
ccc.jg1vgx.net:7373
arc.jg1vgx.net:7000
dxc.jg1vgx.net:7300
~~~

