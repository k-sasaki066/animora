import dedent from "dedent";

export const detail = dedent(`
    ### docker logs
    コンテナログ表示

    \`\`\`bash
    docker logs [オプション] CONTAINER
    \`\`\`

    #### オプション
    \`\`\`bash
    -f      : リアルタイム追跡
    --tail  : 行を指定して表示 docker logs --tail 100(最新の100行)
    -t      : タイムスタンプを付加
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker logs --since 30m <コンテナ名またはID>  # 30分前からのログ
    docker compose logs -f <サービス名> サービス名を省略すると全コンテナ表示
    \`\`\`
    ⚠️ コンテナを削除すると、そのログも消滅する
`);