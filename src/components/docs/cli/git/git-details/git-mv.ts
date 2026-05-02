import dedent from "dedent";

export const detail = dedent(`
    ### git mv
    Git管理下のファイルを「移動・名前変更」する<br />
    通常のmvと違い、ファイル移動 + Gitの変更追跡を自動でやる<br />
    履歴追跡を保ったままリネームできる

    \`\`\`bash
    git mv 旧パス 新パス
    \`\`\`

    #### 表示項目
    \`\`\`bash
    renamed: old.ts -> new.ts     Gitが「移動」と認識している状態
    \`\`\`

    #### オプション
    \`\`\`bash
    git mv index.ts app.ts                 ファイル名変更
    git mv src/utils.ts src/lib/utils.ts   フォルダ移動
    git mv -f old.ts new.ts                強制移動(既存ファイルがあっても上書き)
    \`\`\`

    #### 実行例
    \`\`\`bash
    git mv index.ts app.ts
    git status
        renamed: index.ts -> app.ts

    git mv src/utils.ts src/lib/utils.ts
        renamed: src/utils.ts -> src/lib/utils.ts
    \`\`\`
    ⚠️ rm file.txtはファイル削除だけ <br />
    git rm file.txtは Git履歴上も削除対象
`);