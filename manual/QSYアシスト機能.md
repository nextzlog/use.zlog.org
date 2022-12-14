## 概要

QSYアシスト機能とは、Multi OP運用時のQSY制限（１０分 or ８回/Hourなど）を支援する機能です。  
バージョン2.7.1.0以降からの対応です。  

以前は![QSY OK](https://raw.githubusercontent.com/jr8ppg/zLog/images/qsy_old_0.png)や![Count down](https://raw.githubusercontent.com/jr8ppg/zLog/images/qsy_old_1.png)と表示されていましたが、全然目立たないので改良した物です。

## 設定
メインメニューの「Settings」－「Options」メニューより設定画面を表示し、Preferences タブで設定します。  

![QSY Assist](https://raw.githubusercontent.com/jr8ppg/zLog/images/options_qsyassist.png)

## Count downタイプ

Count downタイプとは設定した時間（分）が経過するまでをカウントダウンする機能です。  
設定時間（分）からカウントダウンを行い、０分になると「QSY OK」の表示に変わります。  
QSY OK表示になる前でもQSYはできますが、Memo欄に「\*QSY Violation\*」の表示が記録されます。

### QSY OK時の表示
![QSY OK](https://raw.githubusercontent.com/jr8ppg/zLog/images/qsyindicator_1.png)  

### QSY OKまでのカウントダウン表示
![QSY NG](https://raw.githubusercontent.com/jr8ppg/zLog/images/qsyindicator_2.png)

## QSY Countタイプ

QSY Countタイプとは１時間あたりのQSY回数を数える機能です。  
QSY回数が設定回数を超えると、QSY Indicatorウインドウが赤表示に変わります。  
赤表示でもQSYはできますが、Memo欄に「\*QSY Violation\*」の表示が記録されます。

### QSY回数が上限未満時の表示
![QSY OK](https://raw.githubusercontent.com/jr8ppg/zLog/images/qsyindicator_3.png)  

### QSY回数が上限を超えた際の表示
![QSY NG](https://raw.githubusercontent.com/jr8ppg/zLog/images/qsyindicator_4.png)
