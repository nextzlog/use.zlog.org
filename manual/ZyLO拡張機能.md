zLog令和版には、プラグインマネージャ機能が標準装備されました。
有志が開発した便利なプラグインで、zLogを強化できます。

1. TOC
{:toc}

### プラグインって何？

zLogに新しいウィンドウを追加したり、ウェブサービスと連携する機能を追加したり、USBインターフェースと通信する機能を独自に作れます。
もちろん、大多数のユーザーは、プラグインを使う側でしょう。
なので、zLog本体にはない便利な機能をzLogに追加できる仕組みだと思ってください。

### どんなプラグインがあるの？

まず、プラグインの代表的な例を見てみましょう。

#### zLog additional I/O

zLogにCTESTWINのLG8ファイルやHAMLOGのHDBファイルなど、zLog本体で対応していないファイルのインポートとエクスポートの機能を追加するプラグインです。
このプラグインをインストールすることで、zLogは、CTESTWIN、HAMLOGと直接データの交換ができます。

#### zLog update checker

zLogの新バージョンがリリースされるたびに通知します。

#### Maplot

QSO済みのJCC/JCGコードに対応した市区町村を地図にプロットするプラグインです。
電波の飛び方が可視化されるので、コンテストのモチベーションアップにもつながります。

<img width="446" alt="window2" src="https://user-images.githubusercontent.com/23717324/190862693-f0ea347a-8fff-46fa-922e-68081f9c5e98.PNG">

#### 旭川コンテスト
#### 高校コンテスト
#### 東海マラソンコンテスト
#### YLコンテスト
#### リアルタイムコンテスト

旭川コンテストや高校コンテストは、zLogのCFGファイルでは完全に対応できないコンテストです。
得点のルールが特殊なため、CFGファイルをいくら工夫しても、正確な得点が計算できません。
そこで、専用のプラグインを用意しました。
それぞれ、対応するプラグインをインストールすることで、正確な得点状況がスコアウィンドウに表示されるだけでなく、JARLサマリーシートにもその得点が反映されます。

#### Es通知プラグイン

日本各地のスポラディックE層の発生状況を表示してくれるプラグインです。
特にVHF帯でのコンテスト運用で有利です。

#### 総務省APIプラグイン

zLogで入力中の相手局の免許情報を検索できるプラグインです。
何に使うかって？
無線家たるもの法令を遵守するために、ですよ。

#### CW練習プラグイン

モールス符号の聞き取り訓練を、zLogのUIでコンテストさながらにできるというプラグインです。

### zLogのどのバージョンで使えるの？

zLog 2.8以降のx64版で使えます。
x86版では使えません。

### そもそも何でプラグインなの？

プラグインではなくて、zLog本体に機能を追加すれば良いではないか？という疑問はもっともです。
しかし、zLog本体での対応が難しかったり、逆に、対応するのが大袈裟すぎるような機能は、むしろプラグインで対応すべきでしょう。
zLog本体での対応が難しい機能の代表例が、上に挙げたようなコンテストへの個別対応、そして、Es通知プラグインのようなクラウドサービスとの連携です。
また、対応するのが大袈裟すぎるような機能とは、皆さんの自作ハードウェア、例えば、CWキーヤーとの連携です。

### プラグインを見つける

zLogで利用可能なプラグインのリストは、[こちらのページ](https://use.zlog.org/plugins)か、後述するzLog本体のプラグインマネージャから確認できます。
掲載されているプラグインは、いずれもzLogユーザーが自作し、ZyLO開発チームが依頼を受けて登録したプラグインです。

### プラグインが見つからない

[こちらのページ](https://use.zlog.org/plugins)には掲載されているのに、zLogのプラグインマネージャに表示されないプラグインがあります。
そのプラグインは「実験的」もしくは「安定版ではない」プラグインでしょう。
後述するプラグインマネージャのウィンドウの中程にShow unstable (experimental) pluginsというチェックボックスがあります。
そのチェックボックスにチェックを入れることで、そのようなプラグインも表示されるようになります。

### プラグインをインストールする

#### zLogの起動

まず、zLogを起動します。
先に述べたように、v2.8以降の64bit版でしか、プラグインはインストールできません。
起動時に、コンテストを選ぶ必要がありますが、ここでは、単にzLogのメインウィンドウを開きたいだけなので、適当なコンテストで大丈夫です。

![image](https://user-images.githubusercontent.com/23717324/189514051-79db35a1-b796-4b11-b7e1-278128586b1e.png)

#### プラグインマネージャを開く

zLogのメインウィンドウが開いたら、メニューバーからSettings(設定)メニューを選び、その中にあるPlugin Manager(プラグインマネージャ)メニューをクリックします。

![image](https://user-images.githubusercontent.com/23717324/189514062-28aa0c39-6cb1-455f-b206-48addc92c998.png)

すると、ZyLO Plugin Managerというウィンドウが開きます。
その中に、プラグインのリストがあります。

#### プラグインを選ぶ

プラグインマネージャが表示されたら、リスト項目から、好きなプラグインを選びます。
例えば、zLog additional I/Oの項目をクリックしましょう。
すると、プラグインの詳細が表示されます。
また、ウィンドウの一番下に、ボタンが並んでいますが、Installボタンが押せる状態になります。

![image](https://user-images.githubusercontent.com/23717324/189514070-efd435c4-0057-458d-be12-a77482b9f411.png)

#### プラグインをインストールする

そのままInstallボタンを押して、zLog additional I/Oプラグインをインストールしてみましょう。
ボタンを押すと、インターネット経由で、プラグインのダウンロードが始まります。
回線次第ですが、小さなプラグインなので、ダウンロードはすぐに終わります。
ダウンロードに時間がかかっていると、進捗バーが表示されることがあります。
ダウンロードが終わると、プラグインが自動的にインストールされます。
インストールが完了すると、Installボタンが押せなくなり、代わりにDisableボタンが押せるようになります。

![image](https://user-images.githubusercontent.com/23717324/189514096-a6d8661d-3adc-4052-89aa-7a559ec5836d.png)

そうなったら、インストール成功です。
プラグインマネージャのウィンドウを閉じてください。
zLogのFileメニューから、ImportメニューやExportメニューをクリックしましょう。

![image](https://user-images.githubusercontent.com/23717324/189514106-17f1a60c-e19f-4485-a6ef-015772d11698.png)

すると、LG8ファイルやHDBファイルの読み書きができるようになっているはずです。

![image](https://user-images.githubusercontent.com/23717324/189514112-4258d047-8cd4-4fe4-a58c-da64149977e3.png)

#### プラグインをアンインストールする

プラグインをアンインストールするには、先ほどのプラグインマネージャのウィンドウで、アンインストールしたいプラグインを選び、Disableボタンを押すだけで大丈夫です。
ただし、実際にプラグインが無効化されるのは、zLogを一旦終了し、次に起動した時です。
それまでは、プラグインは使える状態です。

#### プラグインをアップデートする

インストールしたプラグインも、しばらく経つと、新しいバージョンが利用可能になっているかも知れません。
その場合は、プラグインマネージャのウィンドウで、Upgradeボタンが押せるようになっているはずです。
アップデートしたいプラグインを選んで、Upgradeボタンを押すことで、そのプラグインの最新版がダウンロードされます。
なお、アップデートが適用されるのは、zLogを一旦終了し、次に起動した時です。

#### プラグインはどこに保存されるの？

プラグインの実体は、DLLファイルです。
デフォルトでは、`zlog.exe`と同じフォルダに保存されます。
なので、USBメモリにインストールして、持ち運ぶことも可能です。
ただし、コンテストプラグインの場合は、DLLと一緒にCFGファイルもインストールされるでしょうが、それは、CFGファイルの保存場所に保存されます。
これは、zLog本体のCFGファイルの保存場所の設定に従います。

### zLogで高校コンテストに参加する

次に、高校コンテストを例に、コンテストプラグインの使い方を学びましょう。
上にも述べた通り、コンテストプラグインは、CFGファイルでは対応が難しいコンテスト、代表例を挙げると、旭川コンテストや、高校コンテスト、東海マラソンコンテスト、YLコンテストの得点計算を行うためのプラグインです。
使い方は難しくありません。

#### 高校コンテストのプラグインをインストールする

まず、Settings(設定)メニューからPlugin Manager(プラグインマネージャ)メニューを選び、プラグインマネージャを開きます。

![image](https://user-images.githubusercontent.com/23717324/189514123-b0da221c-9318-433b-80b4-0f4f2b18bad1.png)

そして、プラグインのリストから、高校コンテストを選んで、Installボタンを押します。

![image](https://user-images.githubusercontent.com/23717324/189514126-e5185238-add5-4fc4-bea0-e7af8d087e3d.png)

これで、高校コンテストのプラグインがインストールされます。
そうしたら、プラグインマネージャのウィンドウを閉じます。

#### コンテストを開き直す

FileメニューからNew Contestメニューをクリックするか、もしくは、zLogを閉じて、起動し直します。

![image](https://user-images.githubusercontent.com/23717324/189514135-a3babc9f-b64a-4781-af63-6fdaf400767d.png)

コンテストを選ぶウィンドウが表示されるので、下にあるUser Defined Contestのボタンをクリックします。

![image](https://user-images.githubusercontent.com/23717324/189514140-80843aca-7072-4210-84ee-ea5293d713eb.png)

すると、high school contestという名前のCFGファイルがリストに表示されているはずです。

![image](https://user-images.githubusercontent.com/23717324/189514149-a94977d3-b690-40eb-8cff-dfc67137e663.png)

これは、[hstest.cfg](https://github.com/nextzlog/zylo/blob/master/plugins/rules/hstest/hstest.cfg)というCFGファイルです。
このCFGファイルは、高校コンテストのプラグインと同時にインストールされたものです。
このCFGファイルを選び、zLogを起動してください。

![image](https://user-images.githubusercontent.com/23717324/189514193-2aa2d4e7-42e9-40c5-8fae-0d0adb81a4e1.png)

もし、リストのhstest.cfgが表示されない場合は、CFGファイル選択ウィンドウの上の参照ボタンから、zlog.exeのあるフォルダを選ぶと表示されます。
それでも見つからない場合は、どこかに保存されてはいるが、散逸してしまったのでしょう。
プラグインをインストールし直せば、今、CFGファイルを参照しているフォルダに再びダウンロードされます。

#### QSOを入力する

後は、普通にQSOを入力していくだけです。

![image](https://user-images.githubusercontent.com/23717324/189514220-d05be501-6582-4be5-a99f-42ef266db2af.png)

スコアウィンドウを表示すると、高校コンテストのルールに沿った得点が表示されます。

![image](https://user-images.githubusercontent.com/23717324/189514227-53fe9ff6-1d72-4550-933d-ba6c7798958d.png)

#### サマリーシートを作成する

また、JARL R2.0サマリーシートを作成すると、得点が正しく記載されるはずです。
試しに作成してみましょう。
Fileメニューから、Contest E-Log (JARL 2.x)メニューをクリックしましょう。

![image](https://user-images.githubusercontent.com/23717324/189514231-9ac66762-86ab-453b-8a63-9ed77231e98b.png)

すると、サマリーシートの作成ウィンドウが表示されます。

![image](https://user-images.githubusercontent.com/23717324/189514259-06ad9ae7-bc70-4a15-bdb3-c8aa9ad356c7.png)

ウィンドウの下にあるE-log作成ボタンを押して、EMファイルを保存しましょう。
すると、以下のように、正しく得点が計算されています。

```
<SUMMARYSHEET VERSION=R2.1>
<CONTESTNAME>high school contest</CONTESTNAME>
<CATEGORYCODE></CATEGORYCODE>
<CALLSIGN>JA1ZLO</CALLSIGN>
<OPCALLSIGN></OPCALLSIGN>
<TOTALSCORE>209</TOTALSCORE>
<ADDRESS>??
</ADDRESS>
<NAME></NAME>
<TEL></TEL>
<EMAIL></EMAIL>
<POWER></POWER>
<FDCOEFF>1</FDCOEFF>
<OPPLACE></OPPLACE>
<POWERSUPPLY></POWERSUPPLY>
<COMMENTS></COMMENTS>
<REGCLUBNUMBER></REGCLUBNUMBER>
<DATE>2022?N9??11??</DATE>
<SIGNATURE></SIGNATURE>
</SUMMARYSHEET>
<LOGSHEET TYPE=ZLOG>
DATE(JST)	TIME	BAND	MODE	CALLSIGN	SENTNo	RCVNo
2022-09-11	14:23	7	SSB	JO1ZAA	59 10C	59 11HS
2022-09-11	14:23	7	SSB	JO1YAA	59 10C	59 11HS
2022-09-11	14:23	7	SSB	JS2YAA	59 10C	59 18HS
2022-09-11	14:23	7	SSB	JQ1YCK	59 10C	59 11HS
2022-09-11	14:24	7	CW	JS2XAA	599 10C	599 18C
2022-09-11	14:24	7	SSB	JI1TAA	59 10C	59 11C
2022-09-11	14:24	7	CW	JS7XAA	599 10C	599 02C
2022-09-11	14:25	7	CW	JP7XAA	599 10C	599 02HS
2022-09-11	14:25	7	CW	JQ1YCK	599 10C	599 11HS
2022-09-11	14:25	7	CW	JQ1YKM/1	599 10C	599 16HS
</LOGSHEET>
```

なお、JARLサマリーシートR1.0には対応していません。
つまり、R1.0で保存すると、得点が間違ったものになります。
希望が寄せられれば、R1.0への対応を検討しようと思います。

#### 通常のユーザ定義コンテストと何が違うの？

高校コンテストのプラグインをインストールしたとは言え、結局のところ、[hstest.cfg](https://github.com/nextzlog/zylo/blob/master/plugins/rules/hstest/hstest.cfg)というCFGファイルを選んでコンテストを開いた点では、従来と同じです。
しかし、このCFGファイルには、従来にない、特殊な設定がされています。
以下にCFGファイルの全容を示します。

```
#high school contest
mycall        JA1ZLO
wpm           30
weight        50
tone          on
loop          2.5
vloop         10.0
prov          10
zero          O
one           A
nine          N
f1_a          CQ HS TEST DE $M $M TEST
f2_a          $C $R$VC
f3_a          TU $M TEST
f4_a          NR?
f5_a          $C?
f6_a          QRZ?
f7_a          $C TU DE $M TEST
f8_a          $C QSO B4 TU
f1_b          $M
f2_b          $R$VC
f3_b          GL
f4_b          NR?
f5_b          QRL?
f6_b          QRZ?
f7_b          TU
f8_b          E E
reverse       off
power         --H-H-HMM----
pt7           1311
pt21          1311
pt50          1311
pt144         1311
pt430         1311
dat           hstest
spc           zlog
sub           zlog
cut           0
sendnr        $VC
JARL          on
mode          on
counthigh     on
unlistedmulti off
exit
dll           hstest.dll
```

最後の2行に注目してください。
まず、exitとは、CFGファイルの解析をその行で終えることを意味する命令です。
これ以降の行は、従来のCFGファイルとしては無視されます。
特に、32bit版のzLogでは完全に無視されます。

```
exit
```

そして、続くdll命令は、hstest.dllをコンテストプラグインとして利用することを指示する命令です。
hstest.dllは、高校コンテストのプラグインの本体です。

```
dll           hstest.dll
```

つまり、この命令によって、高校コンテストに特化した得点計算が有効になるというわけです。
他のコンテストプラグインでも、同様にexit命令とdll命令を利用することで、コンテストプラグインが有効化されています。

### zLogをアップデートしたらプラグインはどうなるの？

zlog.exeを最新版で上書きした場合、zlogの設定(`zlog.ini`)が引き継がれるのと同様に、プラグインの設定も引き継がれます。
なので、引き続き使用できます。
もちろん、フォルダごとzLogを入れ替えた場合は、何も引き継がれないので、プラグインをインストールし直す必要があります。
