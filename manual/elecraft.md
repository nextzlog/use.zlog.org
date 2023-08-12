---
title: Elecraft K3の設定
---

# Elecraft K3の設定

## 概要

ここではElecraft社のK3での接続について説明します。

## K3の設定

K3はCOMポートのRTS/DTR端子でPTT制御並びにCWキーイングが行えますので、特別なI/Fは必要ありません。PCとRS232Cで接続するだけです。  

### PCとの接続

PCとの接続はRS232Cケーブルで接続します。何故かK3側はメスの９ピンコネクターなので、オスのケーブルが必要です。市販されているケーブルはメス－メスがほとんどなのでその場合はジェンダーチェンジャーが必要です。  

### RS232端子のスピード設定

1. \[MENU\]ボタンを長押しして、CONFIG設定モードに入ります。
2. サブダイヤルを回して、「RS232」メニューを表示します。
3. メインダイヤルを回して、お好みのスピードに設定します。
![設定例](https://github.com/nextzlog/use.zlog.org/blob/master/images/k3_config_rs232.png?raw=true)

### PTT-KEYの設定

1. \[MENU\]ボタンを長押しして、CONFIG設定モードに入ります。
2. サブダイヤルを回して、「PTT-KEY」メニューを表示します。
![設定例](https://github.com/nextzlog/use.zlog.org/blob/master/images/k3_config_ptt-key_off-off.png?raw=true)
3. メインダイヤルを回して、「RTS-DTR」に設定します。
![設定例](https://github.com/nextzlog/use.zlog.org/blob/master/images/k3_config_ptt-key_rts-dtr.png?raw=true)

## zLogの設定

Optionsウインドウの「ハードウェア」タブで下図のように設定します。  
![設定例](https://github.com/nextzlog/use.zlog.org/blob/master/images/k3_zlog.png?raw=true)



