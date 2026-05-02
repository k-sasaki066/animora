import dedent from "dedent";

export const detail = dedent(`
    ### open（Mac専用）
    ターミナルからファイル、フォルダ、URL、アプリケーションを関連付けられたデフォルトアプリで開く

    \`\`\`bash
    open [オプション] ファイル名 or URL
    \`\`\`

    - 空ファイル作成
    - .env や index.js など初期ファイル作成
    - 更新日時変更
    - ビルドトリガー用のタイムスタンプ更新

    #### オプションと実行例
    \`\`\`bash
    open <ファイル名>                ファイル/フォルダを開く
    open .                         現在のフォルダをFinderで開く
    open -a "Safari" <ファイル名>    アプリを指定して開く
    open http://example.com        URLを開く
    open -R <ファイル名>             Finderで場所を表示
    \`\`\`
`);