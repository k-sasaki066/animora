import dedent from "dedent";

export const detail = dedent(`
    ### docker compose down
    Docker Composeで起動したコンテナ、ネットワークを停止・削除し、環境をクリーンにする<br />
    デフォルトでコンテナとネットワークが削除されるが、ボリュームは保持される

    \`\`\`bash
    docker compose down [オプション]
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker compose down -v                : 名前付きボリュームや匿名ボリュームも含めて削除
    docker compose down --rmi local       : サービスで定義されたイメージを削除
    docker compose down --remove-orphans  : ymlファイルから削除されたサービスのコンテナもまとめて削除
    \`\`\`

    ⚠️ 一時的にコンテナを止めたい場合は docker compose stop
`);