import dedent from "dedent";

export const detail = dedent(`
    ### docker rm
    停止中のDockerコンテナを削除

    \`\`\`bash
    docker rm [オプション] CONTAINER [CONTAINER...]
    \`\`\`

    #### オプション
    \`\`\`bash
    -f (--force)   : 実行中のコンテナを強制削除
    -v (--volumes) : コンテナに関連するボリュームも削除
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker rm my-nginx                 停止中コンテナを1つ削除
    docker rm web db redis             複数コンテナをまとめて削除
    docker rm -f my-app                強制削除（起動中コンテナも停止して削除）
    docker rm -v [コンテナIDまたは名前]   コンテナに関連するボリュームも削除
    docker rm $(docker ps -a -q)       停止中のコンテナを一括削除
    \`\`\`

    存在しないコンテナを削除しようとした場合
    \`\`\`bash
    Error response from daemon: No such container: test-container
    \`\`\`
    ⚠️ 実行中のコンテナはそのままでは削除できない。<br />
    docker stop するか、-f オプションを使用
`);