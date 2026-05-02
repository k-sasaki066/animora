import dedent from "dedent";

export const detail = dedent(`
    ### mv（move）
    ファイルやディレクトリの移動と名前の変更(リネーム)

    \`\`\`bash
    mv [オプション] 移動元 移動先
    \`\`\`

    - 空ファイル作成
    - .env や index.js など初期ファイル作成
    - 更新日時変更
    - ビルドトリガー用のタイムスタンプ更新

    #### オプション
    \`\`\`bash
    mv -i main.js src/                移動前に確認メッセージを表示
    mv -f main.js src/                確認なしで強制的に上書き
    mv -n main.js src/                同名ファイルがあれば移動しない
    mv -v app.js src/                 移動の詳細を表示
    \`\`\`

    #### 実行例
    \`\`\`bash
    mv old.txt new.txt                ファイル名をnew.txtに修正
    mv file.txt /path/to/dir/         file.txt を指定ディレクトリへ移動
    mv f1.txt f2.txt dir/             複数のファイルを指定ディレクトリへまとめて移動
    mv images public/                 images フォルダを public 配下へ移動
    mv logo.png public/site-logo.png  public に移動しつつ site-logo.png に変更

    mv -i main.js src/
        overwrite 'src/main.js'?

    mv -v app.js src/
        app.js -> src/app.js
    \`\`\`


    ⚠️ ファイル名の先頭を小文字 → 大文字へ変更する場合
    \`\`\`bash
    例 : mv new.txt New.txt
    \`\`\`
    → Mac / Windows は大小文字を区別しないため 同じ名前 として扱ってしまう
    - Finderでは変わったがGitが反応しない
    - 大文字変更だけ認識しない

    \`\`\`bash
    mv old.txt temp.txt
    mv temp.txt Old.txt

    一度別名にしてから変更する
    \`\`\`
`);