---
title: K3NG Arduino CW Keyerを利用する場合のHow to
---

## 概要

K3NGさんが開発しているWinKeyer互換の[K3NG Arduino CW Keyer](https://github.com/k3ng/k3ng_cw_keyer)を利用する場合のポイントについて解説します。  

zLogでWK 9600bpsを有効にしてWinkeyerとの通信速度を9600bpsにした場合、zLogは最初に1200bpsで接続し、制御確立後9600bpsへの移行コマンドを送信します。  
そうすることで、その後は9600bpsでの通信が行われます。  

※zLogは、1文字ごとにWinKeyerのエコーバックを待ってから次の1文字を送出するため、9600bps(WK 9600bpsにチェック)に変更すると、符号間に微妙に間が空く現象が改善します。  

## 問題点

K3NG Arduino CW Keyerのビルド設定や派生製品によっては、終了後も1200bpsに戻らない設定でビルドされているケースがあります。    
その場合は、１回目はzLogから制御できるが、zLogを終了し再度立ち上げると制御できなくなります。  
また、最初から9600bps固定となっているケースもあり、その場合は全く接続できません。  

## 対処方法

下記の２ファイルを修正してビルドを行います。  

### k3ng_keyer.ino

[12088行](https://github.com/k3ng/k3ng_cw_keyer/blob/master/k3ng_keyer/k3ng_keyer.ino#L12088)を下記の様に修正する。  

```
//          case 0x11: // set high baud rate (17)      <--元
           case 0x12: // set high baud rate (18)    <--修正後
```

[12096行](https://github.com/k3ng/k3ng_cw_keyer/blob/master/k3ng_keyer/k3ng_keyer.ino#L12096)を下記の様に修正する  

```
//          case 0x12: // set low baud rate (18)      <--元
           case 0x11: // set low baud rate (17)     <--修正後
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

## どうしてこうなるか

1. K3NG KeyerのWinkey2 Emulationでは、Set High BaudコマンドとSet Low Baudコマンドが、K1EL Winkeyer2とは逆に実装されている。  
従って、zLogのWK 9600bpsにチェックする場合は、スケッチ(k3ng_keyer.ino)を修正してSet High BaudコマンドとSet Low Baudコマンドを入れ替える必要がある。  
※実は、K1ELのWinkeyer2データシートの記載が間違っているのが元々の原因と思われる。  
(誤)  
17: Set High Baud Change Baud Rate to 9600 baud  
18: Set Low Baud Change Baud Rate to 1200 (default)  
(正)  
17: Set Low Baud Change serial comm. Baud Rate to 1200 (default)  
18: Set High Baud Change serial comm. Baud Rate to 9600  
  
2. さらに9600bpsの場合、keyer_features_and_options.hのデフォルト設定では#define OPTION_WINKEY_2_HOST_CLOSE_NO_SERIAL_PORT_RESETが有効のため、zLog終了時にK3NG Keyerが1200bpsに戻らず、zLogを終了して再度立ち上げるとK3NG Keyerを制御できなくなる。

3. また、keyer_features_and_options.hの#define OPTION_WINKEY_UCXLOG_9600_BAUDまたは#define FEATURE_SO2R_BASEをコメントアウトしている場合は、最初から9600bps固定となり、zLogからK3NG Keyerを全く制御できない。  
ただし、SO2R Neoについては、ハードウェア2(Hardware2) > SO2Rサポート(SO2R Support) で SO2R Neo を選択することで9600bps固定で動作可能。  
