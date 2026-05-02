import dedent from "dedent";

export const detail = dedent(`
    ### git rm
    Git管理下のファイルを削除し、その削除をステージングする<br />
    ファイル削除 + git add 削除状態を同時に行う

    #### 使用後何が起こる？
    1. 作業ディレクトリからファイル削除<br />
    2. Gitの追跡対象から削除<br />
    3. 削除状態がステージされる<br />
    4. コミットする git commit -m "不要ファイル削除"

    \`\`\`bash
    git rm ファイル名
    \`\`\`

    #### オプション
    \`\`\`bash
    git rm README_old.md           単一ファイル削除
    git rm a.txt b.txt c.txt       複数ファイル削除
    git rm -r src/old-components   フォルダ削除（再帰）
    git rm --cached ファイル名       ファイルは残してGit管理だけ外す

    \`\`\`

    #### 実行例
    \`\`\`bash
    git rm README_old.md
        rm 'README_old.md'
    git status(確認)
        Changes to be committed:
        deleted: README_old.md

    git rm -r src/old-components
        rm 'src/old-components/Button.tsx'
        rm 'src/old-components/Card.tsx'
    \`\`\`
    ⚠️ rm file.txtはファイル削除だけ <br />
    git rm file.txtは Git履歴上も削除対象
`);