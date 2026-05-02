import dedent from "dedent";

export const detail = dedent(`
    ### docker restart
    コンテナを再起動 (停止→起動を自動実行)

    \`\`\`bash
    docker restart [オプション] CONTAINER [CONTAINER...]
    \`\`\`

    #### オプション
    \`\`\`bash
    -t (timeout): 再起動までの待ち時間を秒単位で指定 (デフォルトは10秒)
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker restart a1b2c3d4e5f6          コンテナIDで再起動
    docker restart web db redis          複数コンテナをまとめて再起動
    docker restart -t 10 my-container    停止猶予10秒を与えて再起動
    docker restart nginx-container       実行中・停止中に関係なく再起動要求

    * docker compose restart             Dockerコンテナ全体を再起動する
    \`\`\`
    ⚠️ docker restartは、コンテナが実行中であればそのコンテナを再起動。停止中の場合は起動
`);