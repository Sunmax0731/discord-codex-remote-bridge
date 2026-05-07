import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, renderMarkdownReport } from '../src/core.mjs';

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "discord-codex-remote-bridge-1",
  "title": "Discord Codexリモートブリッジ サンプル1",
  "status": "ready",
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
  "id": "discord-codex-remote-bridge-missing-required",
  "title": "必須項目不足サンプル",
  "status": "ready",
  "command": "codex run --dry-run",
  "authMode": "local-token",
  "dryRun": true
}] });
  assert.equal(report.summary.result, 'failed');
  assert.equal(report.summary.errors, 1);
  assert.match(renderMarkdownReport(report), /未設定/);
});
