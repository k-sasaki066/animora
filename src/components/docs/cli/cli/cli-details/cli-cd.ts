import dedent from "dedent";

export const detail = dedent(`
    ### cd (change directory)
    フォルダを移動 (存在しないフォルダは移動できない)

    \`\`\`bash
    cd [ディレクトリー]
    \`\`\`

    #### 実行例
    \`\`\`bash
    cd ..              1つ上へ
    cd ~               ホームへ
    cd /               ルートへ
    cd -               直前の場所へ戻る
    cd /usr/include    任意のディレクトリへ移動
    \`\`\`
`);