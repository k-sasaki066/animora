import dedent from "dedent";

export const detail = dedent(`
    ### docker compose up
    docker-compose.ymlファイルに基づいて複数のコンテナを一括で作成・起動・ネットワーク接続<br />
    デフォルトでコンテナをフォアグラウンド（ログが表示される状態）で起動、Ctrl+Cで停止

    \`\`\`bash
    docker compose up [オプション] [--scale サービス=数...] [サービス...]
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker compose up -d               : コンテナをバックグラウンド（デタッチドモード）で実行
    docker compose up -d --build       : イメージの再ビルド(Dockerfileなどを変更した際、イメージを再ビルドしてから起動)
    docker compose up --force-recreate : 強制的な再作成(設定変更を強制的に反映させたい場合、既存のコンテナを破棄して再作成)
    \`\`\`

    ⚠️ docker-compose.ymlで定義したサービス（コンテナ）が存在しない場合は新規作成し、すでに存在していても設定が変更されていれば再作成
`);