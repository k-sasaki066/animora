import dedent from "dedent";

export const detail = dedent(`
    ### docker compose version
    Docker Compose バージョン情報を表示<br />
    現在インストールされている Compose の種類・バージョンを確認できる

    \`\`\`bash
    docker compose version
    \`\`\`

    #### よく使う場面
    - Compose が使えるか確認したい
    - v1 / v2 の違い確認
    - エラー時に環境確認
    - チーム開発でバージョン差異確認
    - ドキュメント通りの機能が使えるか確認

    #### 実行例
    \`\`\`bash
    docker compose version
        Docker Compose version v2.27.0
    \`\`\`

    #### v1 と v2 の違い
    \`\`\`bash
    docker-compose version   # 旧形式(v1)
        docker-compose.ymlファイルにバージョン記載(例 : version: "3.9")
        docker-composeコマンド

    docker compose version   # 新形式(v2 推奨)
        docker-compose.ymlファイルにバージョン不要
        docker composeコマンド
    \`\`\`
`);