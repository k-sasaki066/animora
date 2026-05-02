import dedent from "dedent";

export const detail = dedent(`
    ### cp（copy）
    ファイルやディレクトリをコピーする

    \`\`\`bash
    cp [オプション] コピー元 コピー先
    \`\`\`

    - バックアップ
    - テンプレート複製
    - フォルダ丸ごと保存

    #### オプション
    \`\`\`bash
    cp -r src backup               srcの内容をbackupに再帰的にコピー
    cp -i file1.txt file2.txt      上書きする前に確認メッセージを表示
    cp -v file.txt backup.txt      コピー時の実行内容(何がどこへコピーされたか)を表示
    cp -f new.txt old.txt          既に同じ名前のファイルがある場合でも確認なしで強制的に上書きコピー
    cp -rp source_dir dest_dir     元ファイルの属性（所有者、タイムスタンプなど）を保持しつつ、フォルダごとバックアップ
    \`\`\`

    #### 実行例
    \`\`\`bash
    cp config.sample .env.local    sampleをlocalとしてコピー
    cp file1.txt /path/to/dir/     file1をdir内にコピー

    cp -i file1.txt file2.txt
        cp: overwrite file2.txt? →y/nを選択

    cp -v file.txt backup.txt
        file.txt -> backup.txt
    \`\`\`
`);