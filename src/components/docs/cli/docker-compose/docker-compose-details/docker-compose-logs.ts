import dedent from "dedent";

export const detail = dedent(`
    ### docker compose logs
    Docker Compose で起動している各サービスのログ（出力内容）を見る<br />
    アプリのエラー確認、起動確認、API通信確認などでかなり使う

    できること
    - 全サービスのログ表示
    - エラー確認
    - 起動成功確認
    - console.log確認
    - serverログ確認

    \`\`\`bash
    docker compose logs [オプション] [サービス...]
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker compose logs -f          リアルタイム監視 follow
        例 : app-1 | ✓ Ready in 2.3s
            app-1 | GET / 200

    docker compose logs --tail=100  最新100行だけ見る
    docker compose logs app         特定サービスだけ見る
    docker compose logs app db      複数指定
    docker compose logs --no-color  ログ色なし

    docker compose logs -t          タイムスタンプ付き
        例 : 2026-04-21T10:15:22 app-1 | Server started
    \`\`\`

    ⚠️ logs終了方法 Ctrl + C
    コンテナ自体は止まらない
`);