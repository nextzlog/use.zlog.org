---
title: 目標設定機能
---

## 概要

予め目標交信数を入力しておくことで、コンテストの進行状況（進捗）をチェックできる機能です。  
これは試作版（プロトタイプ）ですので、ご意見やアイデア募集中です。  
バージョン2.7.0.6～の機能です。  

## Target Editorウインドウ

Taget Editorウインドウで目標交信数を入力します。  

1.メインメニューの「Settings」－「Target Editor」より入力画面を表示します。  
![](https://raw.githubusercontent.com/jr8ppg/zLog/images/target_editor1.png)

2.Target Editorウインドウが表示されるので、バンド毎時間ごとの目標交信数を入力します。  
![](https://raw.githubusercontent.com/jr8ppg/zLog/images/target_editor2.png)

|ボタン|説明|
| --- | --- |
|Load ZLO|入力を簡便にするために過去のコンテストのZLOファイルをロードします|
|Adjust 5|入力された交信数を５の倍数に合わせます。ただし５未満はそのままです|
|Adjust 10|入力された交信数を１０の倍数に合わせます。ただし１０未満はそのままです|
|Show WARC|チェックONでWARCバンドを表示します|
|Show Zero|チェックONで0を表示します|
|OK|入力された内容を保存してウインドウを閉じます|
|Cancel|入力された内容を破棄してウインドウを閉じます|

### Excel等での編集(2.8.0.0～)

CTRL+CでTSV形式(タブ区切り)でクリップボードにコピーできます。Excel等のソフトに貼り付けすることで編集が容易になります。  
編集後はExcel画面の左上セルの所をクリックして全選択とし、CTRL+Cでクリップボードへコピー。  
その後、Target EditorウインドウでCTRL+Vを押下し貼り付けします。  

## QSO Rate Exウインドウ

1.メインメニューの「Windows」－「QSo Rate Ex」より画面を表示します。  
![](https://raw.githubusercontent.com/jr8ppg/zLog/images/rateex1.png)

### Graphタブ

グラフは１ｈあたり２本の棒グラフで表され、右側がTarget交信数、左側がActual交信数です。  

![](https://raw.githubusercontent.com/jr8ppg/zLog/images/rateex2.png)

### ZAQタブ

ZAQタブでは表形式で表示します。上段がTarget交信数、下段がActual交信数です。  
合計のTarget交信数に対して80%を超えると、合計欄が青表示に変わります。  
現在のバンドは背景が水色で表示されます。  

![](https://raw.githubusercontent.com/jr8ppg/zLog/images/rateex3.png)

#### 達成率(Rate)表示／勝ち負け(Win/Loss)表示(2.8.0.0～)

表の上でマウス右クリック操作をすることで、達成率表示か勝ち負け表示を切り替えることができます。  
* 達成率表示・・・目標値に対して何%達成したかの表示  
* 勝ち負け表示・・・目標値に対しての過不足を表示（多い場合＋表示、少ない場合－表示）
