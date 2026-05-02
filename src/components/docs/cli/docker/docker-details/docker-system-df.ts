import dedent from "dedent";

export const detail = dedent(`
    ### docker system df (Docker system disk free)
    Dockerデーモンが使用しているディスク容量（イメージ、コンテナ、ボリューム、ビルドキャッシュ）の総計を表示する

    \`\`\`bash
    docker system df [オプション]
    \`\`\`

    #### 表示項目
    \`\`\`txt
    - Images          : イメージが使用している容量
    - Containers      : 実行中・停止中コンテナの容量
    - Local Volumes   : コンテナにマウントされたボリュームの容量
    - Build Cache     : ビルドキャッシュが使用している容量
    \`\`\`

    #### オプション
    \`\`\`bash
    -v              : 各イメージやボリュームごとの容量を確認
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker system df
        TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
        Images          11        11        7.068GB   0B (0%)
        Containers      18        1         19.4MB    19.4MB (99%)
        Local Volumes   6         5         2.529GB   900.5MB (35%)
        Build Cache     11        0         1.027GB   5.928MB
    \`\`\`
`);