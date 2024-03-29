---
title: ロギングを始める前に(Sentについて)
---

## コンテストを始める前に必ずやっておくべきこと

zLog では、自局が送出するコンテストナンバーを「Options」－「Categories」に設定するようになっています。Prov($V) および City($Q) の欄にそれぞれ都府県支庁ナン バー（例: 東京都 → 10 ）、 AJA ナンバー（例: 東京都目黒区 → 100110 ）を入力してください。これらの欄の内容は送信ナンバーに使われます。この設定をしなくてもロギングはできますが、ログデータを電子ログとして提出したり、ほかのロギングソフトウエア（ターボハムログなど）に転記したりする場合に、自局のナンバーのデータが空白になってしまいます。その結果、せっかくログを提出したのにスコアがゼロとされてしまうケースが見受けられますので、充分注意してください。

※ $ で始まる英文字は、CW 送出時のマクロとして使用されます。

## Sentについて仕様変更（V2.5～）

過去の zLog のバージョンでは、「Options」－「Categories」タブの「Sent」は変更しても保存されない仕様でした。Ver.2.5より仕様を変更して同項目はグレー表示とし、入力変更はできなくなりました。入力できませんから保存も行われません。Sent NR はビルトインコンテストの場合は上記で入力したデータを使うようになっています。CWキーイングでは、 $V / $Q / $P (電力記号) 等を反映した適切なナンバーとして $X を使うことができますが、ログデータには、CWキーイングの設定とは関係無くこの $X の内容が SentNR (送出したナンバー) として保存されます。

User Defined Contest時は常に.CFGファイル内のSENDNRを使用します。変更の必要がある場合はCFG編集を行います。 

![Sent](https://raw.githubusercontent.com/jr8ppg/zLog/images/options_sentno.png)

