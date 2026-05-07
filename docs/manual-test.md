# 手動テスト

## 準備

- Node.js と npm を使用する。
- リポジトリパス: `D:\AI\WindowsApp\discord-codex-remote-bridge`
- サンプル入力: `D:\AI\WindowsApp\discord-codex-remote-bridge\samples\sample-input.json`
- ローカルサーバーは不要。

## 手順

1. PowerShellで `cd D:\AI\WindowsApp\discord-codex-remote-bridge` を実行する。
2. `npm test` が成功することを確認する。
3. `node src/cli.mjs samples/sample-input.json manual-output` を実行する。
4. `D:\AI\WindowsApp\discord-codex-remote-bridge\manual-output\report.md` を開く。
5. 正常サンプルと必須項目不足サンプルが区別されていることを確認する。

## 期待結果

- CLIが終了し、`manual-output/report.json` と `manual-output/report.md` が作成される。
- 必須項目不足の finding が日本語で確認できる。
