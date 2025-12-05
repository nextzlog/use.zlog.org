---
title: WAEコンテストでのQTCの送り方
---

## WAEコンテストとは

## QTCとは

QTCとはWAEコンテストで他のQSOをヨーロッパの局に通報するルールです。  
ヨーロッパ以外の局には送れません。  
zLogはQTCを受信して記録する機能はありません。  

## QTCの送り方

相手局よりQTC要求があった場合、下記の手順でQTCを送ります。  
※V2.9.7.1まではCOMポート/USBIF4CWの場合のみ使用可能です。WinKeyer及び互換機では動作しません。  
※V3.0.0.0からはWinKeyer及び互換機も送信可能です。  


<img width="967" height="392" alt="image" src="https://github.com/user-attachments/assets/064b73f0-e389-488e-ae3c-486f86b61af0" />

1. 送信相手のコールサインをコールサイン欄に入力してCTRL+Qを押します。コール欄が空の場合は最後のQSOの相手に対して送ります。  
2. QTCウインドウが表示されます。  
   下図の例では最後の交信のF1GGに対して送る場合を表しています。  
    <img width="326" height="335" alt="image" src="https://github.com/user-attachments/assets/5bd4e594-9602-458d-8d49-ff6be85bc602" />  
3. ウインドウ1行目の「# of QTCs to be sent」の右側に送る数が表示されているので送りたい数に調整します。
6. 既にいくつかQTCを送っている場合は、2行目に「n QTCs have been sent to <Your call> already.」と表示されます。（nは送信済みのQTC数）
7. 3行目には相手に送る電文が表示されています。最初は「<your call> QTC 1/n」です。n個のQTCがあると言うことです。
8. 2個のQTCを送るとします。画面を操作して送信数を2にします。    
    <img width="326" height="335" alt="image" src="https://github.com/user-attachments/assets/7d16efd9-9eae-45f8-a4fa-dd578a77e791" />  
9. 左下の「Send」ボタンを押すと、「F1GG QTC 2/2」を送信します。これはQTCが2こありますよということを相手にお知らせします。
10. 送信が終わると画面は下図のように次の電文の表示に変わります。  
    <img width="326" height="335" alt="image" src="https://github.com/user-attachments/assets/518dcacd-38f2-442f-b87a-466fef69b9e0" />  
11. ここで相手から了解が返ってきたら、「Send」ボタンを押します。押すと一つ目の「1202 G1BBB 22」を送信します。もし、AGN?等が返った場合は「Back」ボタンを押すと1つ前の電文に戻ります。
12. 送信が終わると画面は下図のように次の電文の表示に変わります。  
    <img width="326" height="335" alt="image" src="https://github.com/user-attachments/assets/a1d7334a-13e5-4e93-ac9e-9bfbb6af36e1" />  
13. さらに相手から了解が返ってきたら、「Send」ボタンを押します。押すと二つ目の「1203 DL1CCC 3」を送信します。
14. 送信が終わると画面は下図のように表示が変わります。二つ送ったので送信完了です。    
    <img width="326" height="335" alt="image" src="https://github.com/user-attachments/assets/ff370979-6d06-47a9-9f2f-ed89901785f1" />  
15. 「Done」ボタンをクリックします。
16. 下図の様にMemo欄に、QTC送信済みの記録が行われます。  
    <img width="967" height="392" alt="image" src="https://github.com/user-attachments/assets/5d43338f-bdd5-4716-8127-5039687a0837" />  

## ログ提出

zLogはV3.0.0.0より、CabrilloにQTCを出力できるようになりました。  
出力例  
```
QSO: 21350 CW 2025-12-05 1202 JR8PPG        599 001    F2AAA         599 11     0  
QSO: 21350 CW 2025-12-05 1202 JR8PPG        599 002    G1BBB         599 22     0  
QSO: 21350 CW 2025-12-05 1203 JR8PPG        599 003    DL1CCC        599 3      0  
QSO: 21350 CW 2025-12-05 1203 JR8PPG        599 004    OH1DDD        599 44     0  
QSO: 21350 CW 2025-12-05 1225 JR8PPG        599 005    G2EEE         599 55     0  
QSO: 21350 CW 2025-12-05 1229 JR8PPG        599 006    F1GG          599 66     0  
QTC: 21350 CW 2025-12-05 1208 OH1DDD        1/1        JR8PPG        1202 F2AAA         11  
QTC: 21350 CW 2025-12-05 1400 F1GG          2/2        JR8PPG        1202 G1BBB         22  
QTC: 21350 CW 2025-12-05 1401 F1GG          2/2        JR8PPG        1203 DL1CCC        3  
END-OF-LOG:  
```

<pre>
QSO: 21350 CW 2025-12-05 1202 JR8PPG        599 001    F2AAA         599 11     0  
QSO: 21350 CW 2025-12-05 1202 JR8PPG        599 002    G1BBB         599 22     0  
QSO: 21350 CW 2025-12-05 1203 JR8PPG        599 003    DL1CCC        599 3      0     
</pre>




