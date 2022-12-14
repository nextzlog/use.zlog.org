---
title: マニュアル
---

<table border>
<tr>
<td>(2022/10/18)<br>
Windows11 22H2をお使いの方へ<br>
新しいMicrosoft IME によって発生する障害が報告されています。発生する場合は下記のページを参考に回避策を取ってください。<br>
    <a href="https://docwiki.embarcadero.com/Support/ja/Windows_11_22H2_%E3%81%AE%E6%96%B0%E3%81%97%E3%81%84Microsoft_IME_%E3%81%AB%E3%82%88%E3%81%A3%E3%81%A6%E6%97%A2%E5%AD%98%E3%81%AEVCL_%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%8C%E3%82%AF%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%81%99%E3%82%8B">Windows 11 22H2 の新しいMicrosoft IME によって既存のVCL アプリケーションがクラッシュする</a>
    </td>
</tr>
</table>
    
<table border>
<tr>
<td>(2022/7/18)<br>
zlistwでZLOファイルの編集・更新を行うと日時がUTCになってしまうなど意図しない結果になるケースが報告されています。大体の事はzLogのみで行えるようになっていますので今後はzlistwは使用しないようお願いします。また今後はZLOXファイルとなりますが、zlistwはZLOXには対応していませんのでご注意願います。</td>
</tr>
</table>



目次
1. zLogとは
1992年頃に横林OMを中心に東京大学アマチュア無線クラブで開発されたコンテスト用ロギングソフトウェアです。最初はMS-DOS版でしたがWindows版が開発され現在に至っています。（横林OMのコールサインは再割り当てで他の方に割りあたったとのことですので表示しません　2020/12現在）

1. [インストール](%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
    1. [日本語表示について](%E6%97%A5%E6%9C%AC%E8%AA%9E%E8%A1%A8%E7%A4%BA%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
1. [起動と終了](%E8%B5%B7%E5%8B%95%E3%81%A8%E7%B5%82%E4%BA%86)
1. 準備
    1. [リグコントロールの設定](%E3%83%AA%E3%82%B0%E3%82%B3%E3%83%B3%E3%83%88%E3%83%AD%E3%83%BC%E3%83%AB)
        1. [IC-7300をリグコントロール/CWキーイング/CQマシーンをUSB一本でする場合](ic7300.md)
        1. [IC-9700をリグコントロール/CWキーイング/CQマシーンをUSB一本でする場合](ic9700.md)
    1. [CWキーイングの設定](CW%E3%82%AD%E3%83%BC%E3%82%A4%E3%83%B3%E3%82%B0)
1. コンテストの選択
    1. [定義済みのコンテスト](%E5%AE%9A%E7%BE%A9%E6%B8%88%E3%81%BF%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%86%E3%82%B9%E3%83%88)
    1. [ユーザー定義コンテスト](%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E5%AE%9A%E7%BE%A9%E3%82%B3%E3%83%B3%E3%83%86%E3%82%B9%E3%83%88)
        1. [KCJコンテスト](KCJ%E3%82%B3%E3%83%B3%E3%83%86%E3%82%B9%E3%83%88)
    1. [Sentについて](Sent%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
4. ロギング
    1. 交信方法（SSB)
        1. [CQマシーンの利用](CQ%E3%83%9E%E3%82%B7%E3%83%BC%E3%83%B3%E3%81%AE%E5%88%A9%E7%94%A8)
    1. [交信方法（CW）](%E4%BA%A4%E4%BF%A1%E6%96%B9%E6%B3%95%EF%BC%88%EF%BC%A3%EF%BC%B7%EF%BC%89)
    1. [Quick Memo](Quick-Memo)
5. コンテスト後
    1. [送信NRの訂正](%E9%80%81%E4%BF%A1%EF%BC%AE%EF%BC%B2%E3%81%AE%E8%A8%82%E6%AD%A3)
    1. [JARL E-LOG 1.0の作成と提出](JARL-E-LOG-1.0%E3%81%AE%E4%BD%9C%E6%88%90%E3%81%A8%E6%8F%90%E5%87%BA)
    1. [JARL E-LOG 2.xの作成と提出](JARL-E-LOG-2.x%E3%81%AE%E4%BD%9C%E6%88%90%E3%81%A8%E6%8F%90%E5%87%BA)
        1. [フィールドデイコンテストの場合](%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%E3%83%87%E3%82%A4%E3%82%B3%E3%83%B3%E3%83%86%E3%82%B9%E3%83%88%E3%81%AE%E5%A0%B4%E5%90%88)
    1. [分析](%E5%88%86%E6%9E%90)
    1. [エクスポート](%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%88)（ADIF,Cabrillo,TurboHAMLOGはこちら）
6. 様々な運用形態
    1. [マルチオペ(M/S)での利用](%E3%83%9E%E3%83%AB%E3%83%81%E3%82%AA%E3%83%9A%EF%BC%88%EF%BC%AD%EF%BC%8F%EF%BC%B3%EF%BC%89%E3%81%A7%E3%81%AE%E5%88%A9%E7%94%A8)
    1. [マルチオペ(M/M)での利用](%E3%83%9E%E3%83%AB%E3%83%81%E3%82%AA%E3%83%9A%EF%BC%88%EF%BC%AD%EF%BC%8F%EF%BC%AD%EF%BC%89%E3%81%A7%E3%81%AE%E5%88%A9%E7%94%A8)
    1. [マルチオペ(M/2)での利用](%E3%83%9E%E3%83%AB%E3%83%81%E3%82%AA%E3%83%9A%EF%BC%88%EF%BC%AD%EF%BC%8F%EF%BC%92%EF%BC%89%E3%81%A7%E3%81%AE%E5%88%A9%E7%94%A8)
    1. [シングルオペ2Radio(SO2R)での利用](%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%82%AA%E3%83%9A2Radio(SO2R)%E3%81%A7%E3%81%AE%E5%88%A9%E7%94%A8)
7. 便利な機能
    1. [Super CheckとN+1](Super-Check-(N%EF%BC%8B1))
    1. [キーボードのカスタマイズ](%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%81%AE%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA)  
    1. [QuickQSY](QuickQSY)
    1. [Packet Cluster連携](Packet-Cluster%E9%80%A3%E6%90%BA)
    1. [バンドスコープ](%E3%83%90%E3%83%B3%E3%83%89%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%97)
    1. [Magical Calling機能](Magical-Calling%E6%A9%9F%E8%83%BD)
    1. [コンソールコマンド](%E3%82%B3%E3%83%B3%E3%82%BD%E3%83%BC%E3%83%AB%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89)
    1. [バンドプラン](%E3%83%90%E3%83%B3%E3%83%89%E3%83%97%E3%83%A9%E3%83%B3)
    1. [QSO Rate](QSO-Rate)
    1. [ファンクションキーパネル](%E3%83%95%E3%82%A1%E3%83%B3%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%AD%E3%83%BC%E3%83%91%E3%83%8D%E3%83%AB)
    1. [目標設定機能(TARGET機能)](TARGET%E6%A9%9F%E8%83%BD)
    1. [QSYアシスト機能](QSY%E3%82%A2%E3%82%B7%E3%82%B9%E3%83%88%E6%A9%9F%E8%83%BD)
    1. [ZyLO拡張機能(Plugin Manager)](ZyLO%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD)
    1. [ユーザー補助](%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E8%A3%9C%E5%8A%A9)
8. Z-Server
    1. [Z-Serverの設定方法, Z-Server使用時のzLogの設定方法](server_setup.md)
    1. [Zlink(Z-Serverに接続したzLog)の機能](zlink_howto.md)
9. [設定](%E8%A8%AD%E5%AE%9A)
10. [リソース](%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9)
11. [メイリングリスト](%E3%83%A1%E3%82%A4%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%AA%E3%82%B9%E3%83%88)
