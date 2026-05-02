import dedent from "dedent";

export const detail = dedent(`
    ### ls (list)
    現在のフォルダ内にあるファイル・フォルダを一覧表示

    \`\`\`bash
    ls [オプション]
    \`\`\`

    - プロジェクト構成確認
    - .env や .gitignore 確認
    - 作成したファイル確認

    #### オプション
    \`\`\`bash
    ls -a                隠しファイルを含むすべてのファイルを表示
    ls -la               詳細 + 隠しファイル
    ls -lh               ファイルサイズを読みやすい形式（KB, MB, GB）で表示
    ls -t                更新日時順（新しい順）に並べ替えて表示
    ls -S                ファイルサイズ順（大きい順）に並べ替えて表示
    ls -l                ファイルの詳細表示(権限ルールや所有者、編集日時が表示される)

    ls *.txt             txtファイルのみ表示
    ls -l | grep "test"  testを含むファイルを詳細表示
    \`\`\`

    #### 実行例
    \`\`\`bash
    ls -l
        total 16
        -rw-r--r--  1 sasakisan  staff  1990  4 17 11:57 cli-data.ts
        -rw-r--r--  1 sasakisan  staff   666  4 17 12:13 cli.mdx

    ls -lh
        -rw-r--r-- 1 user user 1.2K Apr 21 18:00 package.json
        drwxr-xr-x 5 user user 4.0K Apr 22 10:30 app
    \`\`\`
`);