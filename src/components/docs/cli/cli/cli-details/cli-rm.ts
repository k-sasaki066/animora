import dedent from "dedent";

export const detail = dedent(`
    ### rm（remove）
    ファイル・フォルダを削除

    \`\`\`bash
    rm [オプション] ディレクトリ名orファイル名
    \`\`\`

    #### オプション
    \`\`\`bash
    rm file.txt.         ファイルを削除
    rm -r folder         ディレクトリと中身を全て削除
    rm -rf node_modules  ディレクトリと中身を強制削除（再帰的）
    rm -f file.txt       file.txtを強制的に削除(確認なし)
    rm -i file.txt.      削除前に確認
    \`\`\`

    #### 実行例
    \`\`\`bash
    rm -i css.php
        remove css.php? (y/nを選択)
    \`\`\`
    ⚠️ゴミ箱には入らない → 基本的にコマンドラインからの削除は即座に行われ、復元できない
`);