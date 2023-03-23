---
title: K3NG Arduino CW Keyerを利用する場合のHow to
---

## 概要

K3NGさんが開発しているWinKeyer互換の[K3NG Arduino CW Keyer](https://github.com/k3ng/k3ng_cw_keyer)を利用する場合のポイントについて解説します。  

WinKeyerで9600bpsでの通信を行う場合、zLogは最初に1200bpsで接続し、制御確立後9600bpsへの移行コマンドを送信します。  
そうすることで、その後は9600bpsでの通信が行われます。  

## 問題点

K3NG Arduino CW Keyerのビルド設定や派生製品によっては、終了後も1200bpsに戻らない設定でビルドされているケースがあります。    
その場合は、１回目はzLogから制御できるが、zLogを終了し再度立ち上げると制御できなくなります。  
また、最初から9600bps固定となっているケースもあり、その場合は全く接続できません。  

## 対処方法

下記の２ファイルを修正してビルドを行います。  

### k3ng_keyer.ino

修正箇所確認中・・・  

修正前  

```
//          case 0x11: // set high baud rate (17)
           case 0x12: // set high baud rate (18)
```

修正後

```
//          case 0x12: // set low baud rate (18)  
           case 0x11: // set low baud rate (17)  
```


### keyer_features_and_options.h

[10行目](https://github.com/k3ng/k3ng_cw_keyer/blob/master/k3ng_keyer/keyer_features_and_options.h#L10)　コメント(//)を取る
```
#define FEATURE_WINKEY_EMULATION       // disabling Automatic Software Reset is highly recommended (see documentation)
```

[75行目](https://github.com/k3ng/k3ng_cw_keyer/blob/master/k3ng_keyer/keyer_features_and_options.h#L75)　コメント(//)を取る
```
#define OPTION_WINKEY_2_SUPPORT                      // comment out to revert to Winkey version 1 emulation
```

[78行目](https://github.com/k3ng/k3ng_cw_keyer/blob/master/k3ng_keyer/keyer_features_and_options.h#L78)　コメントにする(// を行頭につける)
```
// #define OPTION_WINKEY_2_HOST_CLOSE_NO_SERIAL_PORT_RESET  // (Required for Win-Test to function)
```


