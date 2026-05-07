import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, renderMarkdownReport } from '../src/core.mjs';

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "discord-bridge-1",
  "title": "Discord・Codexリモート開発ブリッジ サンプル 1",
  "channelId": "discord-channel-id",
  "command": "codex run --dry-run",
  "authMode": "local-token",
  "dryRun": true
}] });
  assert.equal(report.summary.result, 'passed');
  assert.equal(report.summary.errors, 0);
});

test('missing required field is reported', () => {
  const report = analyzeItems({ items: [{
  "id": "discord-bridge-missing-required",
  "title": "必須項目不足サンプル",
  "command": "codex run --dry-run",
  "authMode": "local-token",
  "dryRun": true
}] });
  assert.equal(report.summary.result, 'failed');
  assert.equal(report.summary.errors, 1);
  assert.match(renderMarkdownReport(report), /未設定/);
});
