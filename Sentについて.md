## Sentについて仕様変更（V2.5～）

今までは「Options」－「Categories」タブの「Sent」を変更しても保存されない仕様でした。  
V2.5より仕様を変更して、初回起動（新規にZLOファイルを作成）時には各コンテストごとに決められた値をセットし、２回目以降はzlog.iniファイルに記録された値を使用する様にしました。User Defined Contest時は常に.CFGファイル内のSENDNRを使用します。変更の必要がある場合はCFG編集を行います。  

![Sent](https://github.com/jr8ppg/zLog/blob/images/options_sentno.png)

