import dedent from "dedent";

export const detail = dedent(`
    ### docker start
    停止中コンテナ起動

    \`\`\`bash
    docker start [オプション] CONTAINER [CONTAINER...]
    \`\`\`

    #### オプション
    \`\`\`bash
    -a : コンテナを起動し、ログをアタッチして操作する(コンテナの標準出力(stdout)・標準エラー出力(stderr)を接続し、ログを表示する)
    -i : インタラクティブモードで起動する (コンテナ内の標準入力を開いたまま起動)
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker start my_container        停止中のコンテナを起動
    docker start web db redis        複数コンテナをまとめて起動
    docker start a1b2c3d4e5f6        コンテナIDで起動
    docker start -a my-container     起動してログをアタッチ表示
    docker start -ai my-container    起動して標準入力も接続
    docker start $(docker ps -aq)    停止中の全コンテナを一括起動
    \`\`\`
`);