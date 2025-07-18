---
title: zLogの使い方に関するFAQ
---

# 目次

* [FAQ-1 いつのまにか「DUPEを許可」のチェックボックスが無くなったのですがどうしてですか？](#faq-1-いつのまにかdupeを許可のチェックボックスが無くなったのですがどうしてですか)
* [FAQ-2 DXPedition モードで送信RS(T)を変更したいのですかできますか？](#faq-2-dxpedition-モードで送信rstを変更したいのですかできますか)
* [FAQ-3 シリアルナンバー形式のコンテストで次に送るシリアルナンバーを変更したいのですか可能ですか？](#faq-3-シリアルナンバー形式のコンテストで次に送るシリアルナンバーを変更したいのですか可能ですか)
* [FAQ-4 紙ログで提出したいのですがどうしたらいいですか？](#faq-4-紙ログで提出したいのですがどうしたらいいですか)
* [FAQ-5 DXコンテストで得点が計算されません](#faq-5-dxコンテストで得点が計算されません)
* [FAQ-6 ログデータをバンド別に整理したい](#faq-6-ログデータをバンド別に整理したい)
* [FAQ-7 ログデータから特定の条件に当てはまるデータを抽出したい](#faq-7-ログデータから特定の条件に当てはまるデータを抽出したい)
* [FAQ-8 CWで送信するナンバーの省略形の変更](#faq-8-cwで送信するナンバーの省略形の変更)
* [FAQ-9 ICOMのリグ使用時、ステータスバーに赤い文字が出る](#faq-9-icomのリグ使用時ステータスバーに赤い文字が出る)
* [FAQ-10 SPCファイルを作成する方法は？](#faq-10-spcファイルを作成する方法は)
* [FAQ-11 zLog を移動運用時や通常交信でも使うには？](#faq-11-zlogを移動運用時や通常交信でも使うには)
* [FAQ-12 かなや漢字の部分が文字化けすることがあるのですが？](#faq-12-かなや漢字の部分が文字化けすることがあるのですが)
* [FAQ-13 コールサインの文字表記のゼロ(0)に斜線を付けたいのですが？](#faq-13-コールサインの文字表記のゼロ0に斜線を付けたいのですが)
* [FAQ-14 E-Log機能機能でカレンダーのエラー](#faq-14-e-log機能機能でカレンダーのエラー)
* [FAQ-15 CFGファイルから取り込んだ項目の一時的な変更](#faq-15-cfg%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%8B%E3%82%89%E5%8F%96%E3%82%8A%E8%BE%BC%E3%82%93%E3%81%A0%E9%A0%85%E7%9B%AE%E3%81%AE%E4%B8%80%E6%99%82%E7%9A%84%E3%81%AA%E5%A4%89%E6%9B%B4)
* [FAQ-16 紙ログを電子化して提出したいのですが、zLogは電子化に使えますか？](#faq-16-%E7%B4%99%E3%83%AD%E3%82%B0%E3%82%92%E9%9B%BB%E5%AD%90%E5%8C%96%E3%81%97%E3%81%A6%E6%8F%90%E5%87%BA%E3%81%97%E3%81%9F%E3%81%84%E3%81%AE%E3%81%A7%E3%81%99%E3%81%8Czlog%E3%81%AF%E9%9B%BB%E5%AD%90%E5%8C%96%E3%81%AB%E4%BD%BF%E3%81%88%E3%81%BE%E3%81%99%E3%81%8B)
* [FAQ-17 以前あった zlistw  は使えないのですか？](#faq-17-%E4%BB%A5%E5%89%8D%E3%81%82%E3%81%A3%E3%81%9F-zlistw-%E3%81%AF%E4%BD%BF%E3%81%88%E3%81%AA%E3%81%84%E3%81%AE%E3%81%A7%E3%81%99%E3%81%8B)


## FAQ-1 いつのまにか「DUPEを許可」のチェックボックスが無くなったのですがどうしてですか？

### 質問

私はかつてOMにDUPEとなるQSOはログに記録しないように指導を受けてきたのですが、最近のzLogはDUPEを受け付けない設定ができなくなって困っています。  

### 答え

[バージョン2.9](https://github.com/jr8ppg/zLog/releases/tag/ZLOG2900)より「DUPEを許可」チェックボックスは廃止となりました。「DUPEを許可する」のみとなります。  
DUPEは気にしないで何度でも交信してログに付けて下さい。  
  
確かにその昔はDUPEはログに記録しないようにしていました。それは人海戦術でログをチェックしていたからです。DUPEは記載しないのが一番ラクでした。しかし最近はコンピューターによる提出ログの分析技術が進んだため、参加各局のログを突き合わせてチェックを行っています。そのためお互いのログに記載が無い場合は減点の対象となりますので、DUPEかどうかにかかわらずログに記載して提出を求められています。  
  
１度目の交信は相手がミスコピーをしていたかもしれません。２回目に呼ばれたときにQSO B4で断れば少なくとも自分はU判定ですが、相手なN判定です。逆の立場の場合、自分がN判定で減点となります。２回目に呼ばれたときに交信してログを付けていれば最悪でも１回目と２回目のどちらかの交信が０点になるだけです。  
  
また、気にしないで交信した方が時間的なロスが少なくなります。Es時など急いでいるときに「DUPEです」「えっ何時頃ですか？」等の問答を避けられます。  
  
というわけですので、DUPEは気にしないで何度でも交信してログに記録して下さい。  
どうしても宗旨替えができなくてDUPEをログに記録しないのであれば、QSO B4は自分で打鍵してEnterを押さずにALT+Wキーを押して下さい。  

## FAQ-2 DXpedition モードで送信RS(T)を変更したいのですかできますか？

### 質問

DXpedition モードで使用中に送信RS(T)を変更したいことがありました。変更できますか？  

### 答え

~~申し訳ありません。現在は送信RS(T)は変更できません。~~ Ver. 2.9.4.1 より、どのコンテストモードでも[QSO編集ダイアログ](https://use.zlog.org/manual/%E3%83%AD%E3%82%B0%E3%81%AE%E5%85%A5%E5%8A%9B)で変更可能になりました。また、DXpedition モードとユーザー定義コンテストモードではログデータ表示欄に送信RS(T)のカラムが表示できるようになりました。[FAQ-11](#faq-11-zlog%E3%82%92%E7%A7%BB%E5%8B%95%E9%81%8B%E7%94%A8%E6%99%82%E3%82%84%E9%80%9A%E5%B8%B8%E4%BA%A4%E4%BF%A1%E3%81%A7%E3%82%82%E4%BD%BF%E3%81%86%E3%81%AB%E3%81%AF)
も参照してください。

## FAQ-3 シリアルナンバー形式のコンテストで次に送るシリアルナンバーを変更したいのですか可能ですか？

### 質問

シリアルナンバー形式のコンテスト(CQ WPX等)で送信シリアルナンバーを変更することはできるのでしょうか。  
一度間違えてログを登録した後に削除したのですが、シリアルナンバーは一つ進んでいて戻すことができませんでした。  

### 答え

シリアルナンバーは変更できませんが、バージョン2.9.3.0より下記の様に発番方法の改善を行いました。この対応でご質問のケースには対応できていると思います。  

Issue [#678](https://github.com/jr8ppg/zLog/issues/678)  
> シリアルNO方式コンテストについて発番方法の改善。
> 主にPHONE時に、zLogが発番する番号と違う番号を誤って送った場合に番号に食い違いがおきる。
> 
> 現在
> 番号管理用の変数を使って、管理番号＋１を次のQSOのシリアルナンバーとしているが、
> ファイルロード時は最終QSOのシリアルナンバー＋１としている。
> 
> 改善
> 常に最終QSOのシリアルナンバー＋１を次のQSOのシリアルナンバーとする。

## FAQ-4 紙ログで提出したいのですがどうしたらいいですか？

### 質問

QSOパーティなど紙ログで提出する必要があるコンテスト用に、サマリーシート／ログシートの印刷はできないのでしょうか？  

### 答え

zLogではサマリーシート・ログシートの直接の印刷はサポートしていません。今すぐお近くのハムショップに行って「コンテスト用紙」を買って下さいといいたい所ですが、既に販売は終了しています。  
仕方ないので[有志のかたが作成したExcelファイル](JARL_logsheet.zip)を活用するしかありません。  
このファイルにzLogから出力したログの内容を貼り付けて印刷しましょう。  

## FAQ-5 DXコンテストで得点が計算されません

### 質問

DXコンテストに参加していますが、何故か得点が計算されません。どうしてでしょうか？  
そういえば、起動時に「CTY.DATがどうのこうの」と表示されていたような気がします。  

### 答え

CTY.DATファイルが無いからです。

多くのDXコンテストでは相手局のエンティティやZoneがマルチとしています。相手局のコールサインからエンティティの判定を行うためのデータがCTY.DATです。  
なるべく最新のCTY.DATを使用して下さい。  

## FAQ-6 ログデータをバンド別に整理したい

### 質問

複数のバンドで交信し、交信した順に入力しましたが、提出時にはバンドごとに並べる必要があります。どうしたらいいですか？  

### 答え

JARL型式やCabrillo型式、あるいは他の型式で出力(エクスポート)する前に、zLogの機能を使ってログデータを並べ替えてください。  
「並べ替え」は、メイン画面の「表示」メニューの中にあります。「バンドで並べ替え」を選択しクリックすると、ログデータが並び替わります。その後、提出用ログデータを出力してください。  

## FAQ-7 ログデータから特定の条件に当てはまるデータを抽出したい

### 質問

複数のバンドで交信しログに入力しましたが、提出は特定のバンドのみにしたいです。どうしたらいいですか？  

### 答え

現在のコンテスト主催者の多くは提出されたログデータどうしの照合を行っているため、自分の参加した部門の得点とならない交信についても提出するほうが望ましいとされています。  
それでも、得点に関係しないバンドやモードの交信を取り除いて提出したい場合は、[FAQ-6](#faq-6-ログデータをバンド別に整理したい)のようにデータをバンドあるいはモードであらかじめ並べ替えたあとJARL型式やCabrillo型式等で出力(エクスポート)し、生成したログデータファイルを「メモ帳」などのテキストエディタで編集してください。  
  
なお、JARLが主催するコンテストでは、得点に関係しない交信データ(チェックログ)について、明示的にログデータに記載する方法がいくつか示されています。ご自身のやりやすい方法でチェックログを明記すると良いでしょう。  
  
[https://www.jarl.org/Japanese/1_Tanoshimo/1-1_Contest/checklog.html](https://www.jarl.org/Japanese/1_Tanoshimo/1-1_Contest/checklog.html)

## FAQ-8 CWで送信するナンバーの省略形の変更

### 質問

CWで送信するナンバーの省略形を国際的に標準のものに変更したいです。どうしたらいいですか？  

### 答え

zLogでは、国内コンテストの習慣に従って、コンテストナンバーに含まれる数字の 0/1/9 を O/A/N と送る設定になっています。これを好みの省略形に変更するには、「運用設定」の「CW/RTTY」タブにある "019の省略形" で任意の代替符号を設定してください。  
たとえば、0(ゼロ) → T 、1→1(略さない)、9→N としたければ "T1N" と入力します。  
  
## FAQ-9 ICOMのリグ使用時、ステータスバーに赤い文字が出る

### 質問

ICOMのリグ使用時（リグコントロール時）、ときおりステータスバーに「No response from IC-XXXX」と表示されて気になります。  

### 答え

zLogの不具合だと思います。  
  
ICOMのCI-Vは一部コマンドで、コマンド受信後にOKの応答(いわゆるACK応答)を行うのですが、zLogがOKの応答を受信できないときに表示しています。  
動作に支障は無いので問題ありません。気にしないで下さい。  

## FAQ-10 SPCファイルを作成する方法は？

### 質問

Super Check 用のSPCファイルを自分で作るにはどうすればいいですか？ 

### 答え

[SPCファイル](https://use.zlog.org/manual/Super-Check-(N%EF%BC%8B1))はテキストファイルですので、1行につき1局分のデータを書き込みさえすれば、その内容は自由です。コールサインとナンバーのデータベースとする以外にも、1行分のテキストデータ(レコード)としてお好みのデータベースを作成することができます。たとえば、  
JA1ZLO 100110 東大無線部  
といった行を作成すれば、Super Check で JA1ZLO がヒットした場合にこの行全てがウインドウに表示されます(1カラム表示の場合)。  
自身のもつデータのみならず、外部のデータを活用してデータベースを作成することもあるでしょう。例として、JJ1AHS氏によるblog記事 ["Public Log データからSPCファイルを作成する方法"](https://jj1ahs.hatenablog.jp/entry/2024/11/18/201229) をご紹介します。

## FAQ-11 zLogを移動運用時や通常交信でも使うには？

### 質問

zLogを移動運用時などコンテスト以外の通常交信のログに使うことはできますか？  

### 答え

はい、使えます。簡単に使うには、コンテスト選択ダイアログで DXpedition モードを選択すれば、他のコンテストと同様の感覚でログができると思います。CWキーイングなど、zLogの便利な機能も基本的にはすべてそのまま使えます。 

少し高度な使い方としては、通常交信用の定義ファイル(CFG)を作ってしまう方法があります。[坂東入香氏の記事](https://docs.google.com/document/d/e/2PACX-1vRTcA7H1bLzlOvHJQ-lY6-U9j25z60gDVoG9uOnM5LEkoxNKfQ5JpADC2B3H-D1pl5ijgpO2s1MNccJ/pub)にその方法が詳しく紹介されています。

なお [FAQ-2](#faq-2-dxpedition-%E3%83%A2%E3%83%BC%E3%83%89%E3%81%A7%E9%80%81%E4%BF%A1rst%E3%82%92%E5%A4%89%E6%9B%B4%E3%81%97%E3%81%9F%E3%81%84%E3%81%AE%E3%81%A7%E3%81%99%E3%81%8B%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%81%8B) にあるように、2025年5月までのバージョン(Ver.2.9.4.0 以前)では、送信時のRS(T)レポートを59(9)以外に変更できない、という問題がありました。Ver.2.9.4.1 以後、DX pedition モードでは送信RS(T)のカラムおよび入力枠が自動的に表示されます。また、ユーザー定義コンテストでは、定義(CFG)ファイルに "usesentrst ON;" のキーワードを追記することで DXpedition モードと同様に表示されます。

## FAQ-12 かなや漢字の部分が文字化けすることがあるのですが？

### 質問

zLogからJARL E-log 型式や CSV型式のファイルを出力し、ほかのアプリで開いたら文字化けすることがあるのですが、どうしたらいいでしょうか？  

### 答え

zLogでは、2バイト文字コード(いわゆる漢字コード)に「シフトJIS」 (Shift_JIS, SJIS, ANSI などと呼ばれることもあります) を採用しています。そのため、最近よく使われている UTF-8 などを標準とするシステムのアプリでそのまま開くと、漢字コードの判定を誤ったりできなかったりして正しく表示されないことがあります。  
対処方法としては、アプリ側がシフトJISに対応している場合は漢字コードを指定してファイルを開くことです。たとえば Windows11 標準の「メモ帳」では、ファイルを開くダイアログの右下に「エンコード」という項目があり、"ANSI" を選択して開くことで正しく表示されます。(ただし、一度ダブルクリックで開いてしまうと、メモ帳を一旦閉じなければその選択が反映されません。）漢字コードを変換して保存したい場合は、"名前をつけて保存"から「エンコード」で他のコード(UTF-8など)を選択してから保存します。  

なお、zlogの各種設定ファイル(CFG/DATファイル, zlog.ini ファイルなど)もシフトJISを採用していますので、作製・編集する際は留意してください。

## FAQ-13 コールサインの文字表記のゼロ(0)に斜線を付けたいのですが？

### 質問

ログ画面上のコールサインの文字表記のゼロ(0)が一般的な文字だとオー(O)と区別し辛いので、"Φ"のような斜線を付けた表記にしたいのですがどうしたらいいですか？  

### 答え

コールサイン表記用のフォントを変更することで解決できます。マニュアルの「[各種フォント タブ](https://use.zlog.org/manual/%E8%A8%AD%E5%AE%9AV29_%E3%83%8F%E3%83%BC%E3%83%89%E3%82%A6%E3%82%A7%E3%82%A2#%E5%90%84%E7%A8%AE%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88-%E3%82%BF%E3%83%96)」を参考にして、フォントを "Consolas" に変更してみてください。(Windows10 以後のシステムで有効です。Windows7 では漢字フォントが正しく表示できなくなる場合があります。その場合、レジストリを修正することで対処できるようですが、使用者の責任で実施してください。)

## FAQ-14 E-Log機能機能でカレンダーのエラー

### 質問

「カレンダーに最大/最小値を設定できませんでした」のエラーが発生してE-Log機能が使用できません。どうしてですか？

![image](https://github.com/user-attachments/assets/4051fd97-d1a2-4bc9-8db5-784e882363f3)

### 答え

Windowsの地域設定でカレンダーを「和暦」にしていると発生します。  
![image](https://github.com/user-attachments/assets/c46e845a-c9d0-4180-aa32-e20c93d9283d)

今のところ回避できないので「西暦」でご利用下さい。  

## FAQ-15 CFGファイルから取り込んだ項目の一時的な変更

### 質問

ユーザー定義コンテストでCFGファイルを読み込みコンテストを開始しましたが、途中で送信ナンバーやファンクションキーの内容の設定を変えたくなりました。しかし、運用設定(Options)ではグレー表示になっていて、変更が不可能です。再起動やCFGファイルの再読み込みをせずに変更できませんか？

### 答え

マニュアルの[ユーザー定義コンテストのページ](https://use.zlog.org/manual/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E5%AE%9A%E7%BE%A9%E3%82%B3%E3%83%B3%E3%83%86%E3%82%B9%E3%83%88)の最後にある zlog.ini ファイルの設定(「取り込み項目を編集するには」)をすれば、一時的な変更が可能になります。そのような操作を行う可能性がある場合は、あらかじめ zlog.ini ファイルを編集しておくと良いでしょう。

## FAQ-16 紙ログを電子化して提出したいのですが、zLogは電子化に使えますか？

### 質問

コンテストに参加し、ログを紙に手書きしました。コンテストの後、ログを電子ファイルにして提出したり、それをほかのアプリに取り込んだりしたいのですが、zLogでそのような作業を行うことはできますか？

### 答え

はい、できます。zLogには「後入力 (Post-contest) モード」があり、これはまさにそのような用途のために用意されています。後入力モードにするには、起動時に表示される  [zLog Menu ウインドウ](https://use.zlog.org/manual/%E8%B5%B7%E5%8B%95%E3%81%A8%E7%B5%82%E4%BA%86)  の中でその項目にチェックを入れてからOKをクリックします。通常モードと後入力モードとの違いは、日付・時刻が自動で記録されるか、手動で入力するか、です。得点の自動計算や JARLの E-log 型式ファイルの作製など、基本機能はどちらも同じです。詳しくは[マニュアルのページ](https://use.zlog.org/manual/%E3%83%AD%E3%82%B0%E3%81%AE%E5%85%A5%E5%8A%9B)をお読みください。  
なお、後入力モードは入力済みログの修正にも使えますが、多くのコンテスト規約では、コンテスト後のログの修正に一定の制約を設けています。不正な修正とならないよう、ルールに則って修正を行ってください。  
（参考：JARLコンテスト共通規約 "(11) コンテスト終了後にログを修正することを禁止する。ただし、誤入力の修正、電子ログのフォーマット変更や手書きログを電子ログ化する作業はこれに含まれない。" )

## FAQ-17 以前あった zlistw は使えないのですか？

### 質問

コンテスト後のログの修正やフォーマット変更のため、以前のバージョンで使っていた zlistw は、令和版では使えませんか？

### 答え

(2022/7/18 現在) zlistwでZLOファイルの編集・更新を行うと、日時がUTCになってしまうなど、意図しない結果になるケースが報告されています。最新バージョンのzLog令和版では、ログの修正や分析など、zlistwでできるほとんどのことが本体内部で行えるようになっていますので、今後は zlistw は使用しないようお願いします。また、今後はファイル保存形式のデフォルトが *.zlox ファイルとなりますが、zlistwはこれに対応していませんのでご注意願います。
