## 概要

シングルオペ2Radio(SO2R)とは、シングルオペであることは変わりないのですが、１人で２台の送信機を使いM/Sの様な運用を行う形態です。  
基本はシングルオペですから２波同時送信以外の制限はありません。バンドが違っていても同時送信はできません。  
JARL主催の国内コンテストでは”電信(電話)シングルオペ・オールバンド”と言う部門が該当します。　　

zLogではバージョン2.8より、SO2Rでの運用サポートを行います。  

## zLogでのSO2Rサポート(2.8.0.0～)

### メインウインドウ
下図のように、コール入力欄を左右に配置したレイアウトです。左はRIG1、右はRIG2です。下段がRIG3です。  
RIG1/RIG2はリグコントロール対応で、RIG3はリグコントロール非対応です。RIG3はRIG1/RIG2以外の何かと言う使い方になります。（従来のVirtual Rigと同じイメージ）  
実際のRIGの配置も左側にRIG1、右側にRIG2を配置して下さい。そうすることでzLogの画面と視覚的なイメージが一致します。  

受信用に選択しているRIGは青枠表示、送信用に選択しているRIGは緑色のランプが点灯します。送信／受信共に独立してRIG1/RIG2を切り替えることができます。  

![SO2Rメインウインドウ](https://github.com/jr8ppg/zLog/blob/images/so2r_main_window.png)

### 設定
1. SettingsメニューのOptionsをクリックして、Optionsダイアログを表示しHardware2タブを開きます。
1. SO2R Supportグループで、「COM Port」又は「SO2R Neo」を選択します。

![設定画面](https://github.com/jr8ppg/zLog/blob/images/options_hardware2.png)

### Auto RIG switch機能

Auto RIG switch機能とは、連続CQ時にRIG1/RIG2交互にCQを送信する機能です。深夜帯などに２つのバンドを交互に送信することでオペレーションの軽減を行うものです。  

![](https://github.com/jr8ppg/zLog/blob/images/so2r_arsw_cqinv.png)

### CQ Invert機能

CQ Invert機能とは、CQの際に受信RIGの逆側RIGでCQを送信する機能です。Auto RIG switchと併用できます。  
これは下記の様な使い方になります。  

1. RIG1でCQ
1. RIG1でCQ後コール待ち
1. RIG1でコール待ちorピックアップ中にRIG2でCQ
1. RIG1でピックアップできれば交信
1. RIG1でピックアップできない場合、RIG2でコール待ち、RIG1でCQへ


## システム構成例

zLogでのシステム構成例です。  
いずれもRIGが２セット、PC(zLog)が１セット必要です。    

### 自作の切り替え器を使うケース

図ではCWのみですが、実際はPhone(MIC/Headphone)の切り替えも必要です。  

![](https://github.com/jr8ppg/zLog/blob/images/so2r_sample1.png)

### WinKeyerやSO2R Neo等の2RIGに対応した機器を使うケース

CWのみの場合は、WinKeyerでも可能ですが、Phoneも含めたSO2Rの場合はSO2R Neo等の専用の機器をします。  

![](https://github.com/jr8ppg/zLog/blob/images/so2r_sample2.png)

## SO2R運用をサポートする機器

### リグ切り替え信号(2.8.0.0～)

バージョン2.8より現在選択中のRIGを表す信号をCOMポートに出力できます。  

|選択RIG|DTR|RTS|
| --- | --- | --- |
|なし|OFF|OFF|
|RIG1|ON|OFF|
|RIG2|OFF|ON|
|RIG3|ON|ON|

### SO2R Neo(2.8.0.0～)
JH5GHM OMが頒布するSO2R用インターフェースBOXです。  
リグ／MIC,Headphone／CWの切り替えの他、送信時にどのRIGの受信音をHeadphoneに流すかなどを制御できます。  

