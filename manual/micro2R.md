---
title: microHAM社のmicro2R(u2R)を利用する場合のHow to
---

## 概要

ここではmicroHAM社のmicro2R(u2R)をzLogで使用する手順を解説します。  
V2.9.5.0で確認しました。  

## 問題点

ただ接続しただけではうまく動きません。動作させるための手順があります。  

## 動作させるための手順（初回）

1. microHAM USB Device Router 9.3.5をインストールします。
2. Windowsを再起動します。
3. micro2RをPCに接続します。（必ず電源OFFであることを確認します）
5. microHAM USB Device Router 9.3.5を起動します。
6. 「Virtual Port」－「Create Port」メニューをクリックします。
7. お好きな番号のPortを選択（チェックON）し、「OK」ボタンをクリックします。
8. 次に「Ports」タブを開きます。
9. タブ下段にある「WinKeyer2」のコンボボックスより6.で作成したPortを選択します。
  <img width="489" height="39" alt="image" src="https://github.com/user-attachments/assets/94832978-19b6-439f-9330-777950ca7ab1" />
  
10. zLogを起動します。
11. 「各種設定」－「ハードウェア設定」メニューをクリックします。
12. 「ハードウェア1」タブを開きます。
13. RIG-1のキーイングコンボボックスで6.で作成したPortを選択します。
<img width="437" height="82" alt="image" src="https://github.com/user-attachments/assets/88d79532-1e72-4485-b17b-5cf8be5ef460" />

14. その下にある「設定」ボタンをクリックします。
15. RTS「常時ON」，DTR「常時ON」に変更し、「OK」ボタンをクリックします。
16. 次に「ハードウェア3」タブを開きます。
17. WinKeyerオプションの「WinKeyer使う」チェックボックスをONにします。
<img width="428" height="71" alt="image" src="https://github.com/user-attachments/assets/ea8c9182-6f24-40bc-a28d-79aaee843668" />

18. 「OK」ボタンをクリックします。
19. micro2Rの電源を入れます！（重要）
20. 立ち上がるまで少し待ちます。
21. micro2Rの「CW SPEED」をくるくる動かします。
22. zLog側のWPMが連動して変われば設定成功です。
23. F1を押すとCQが発出されます。

## 動作させるための手順（２回目以降）

２回目以降はVirtualPortの作成などは済んでいますので、少し簡単です。  
これで動かない場合は、RigControl OFF→電源OFF→電源ON→RigControl ONを試します。  

1. micro2Rの電源を切ります。
2. microHAM USB Device Router 9.3.5を起動します。
3. micro2Rの電源を入れます！（重要）
4. 立ち上がるまで少し待ちます。
5. zLogを起動します。
6. micro2Rの「CW SPEED」をくるくる動かします。
7. zLog側のWPMが連動して変われば設定成功です。
8. F1を押すとCQが発出されます。

## 動作状況のモニター方法

うまく動かない（キーイングしない）時はmicroHAM USB Device Router 9.3.5のモニター機能で状況を把握できます。  

1. Portsタブの下段WinKeyer2欄にある「MON」ボタンをクリックします。
<img width="501" height="44" alt="image" src="https://github.com/user-attachments/assets/73c1b342-fc71-468b-b2a2-8ceb0052b236" />

2. モニターウインドウが表示されます。
3. 「Start」ボタンをクリックします。

正常時は下図のように、\[Set WPM Speed: 29\]がSPEEDダイヤルの操作に応じて表示されます。  
<img width="511" height="293" alt="image" src="https://github.com/user-attachments/assets/f6287fd6-e2af-44df-9ac1-6ea4fbce3b73" />

動かない場合は下図のように、\[Set WPM Speed: 29\]が表示されません。  
<img width="511" height="293" alt="image" src="https://github.com/user-attachments/assets/b1ea1fb0-03cb-4e89-8e8e-ea26e55a20c8" />

または下図のようになります。（9600bpsにした場合）  
<img width="511" height="293" alt="image" src="https://github.com/user-attachments/assets/c8f93e41-2738-4ca8-bfe3-a8e8a164461e" />


