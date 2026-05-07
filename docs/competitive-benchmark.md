# 競合・公式基準ベンチマーク

## 比較方針

Discord Codexリモートブリッジ は、競合の全機能を再実装するのではなく、実行より先にdry-runと証跡化を置き、誤操作を防ぐ設計にする。

| 参照先 | URL | 競合・公式標準の強み | 採用する評価基準 | 差別化 |
| --- | --- | --- | --- | --- |
| Discord Application Commands | https://docs.discord.com/developers/interactions/application-commands | スラッシュコマンドと権限をアプリケーション単位で設計できる。 | 認証、コマンド、実行前確認が明確であること。 | 実行より先にdry-runと証跡化を置き、誤操作を防ぐ設計にする。 |
| Discord Interactions | https://docs.discord.com/developers/interactions | 外部アプリとDiscordのやり取りを署名検証つきで受けられる。 | 認証、コマンド、実行前確認が明確であること。 | 実行より先にdry-runと証跡化を置き、誤操作を防ぐ設計にする。 |
| GitHub Actions | https://docs.github.com/en/actions/using-workflows/about-workflows | 自動検証の実行条件、ログ、失敗履歴をワークフローとして残せる。 | リリース、差分、検証ログ、ブランチ状態を追跡できること。 | 実行より先にdry-runと証跡化を置き、誤操作を防ぐ設計にする。 |

## 改善へ反映した点

- QCDS評価に競合比較と公式標準の確認を追加した。
- 実装だけでなく、README、導入手順、ユーザーガイド、手動テスト、リリース前資料を評価対象にした。
- 文字化けをQCDSのQuality/Satisfactionリスクとして検出する。
