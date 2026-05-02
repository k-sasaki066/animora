import dedent from "dedent";

export const detail = dedent(`
    ### docker compose stop
    Docker Compose で起動中のサービス（コンテナ）を停止する

    - コンテナ、イメージ、設定は残る
    - volume も残る
    - network も残る
    - 次回 start ですぐ再開可能

    docker compose stop	= 停止<br />
    docker compose down	= 停止 ＋ 削除

    \`\`\`bash
    docker compose stop [オプション] [サービス...]
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker compose stop 全サービス停止
        [+] Stopping 2/2 (2個のコンテナ停止処理)
        ✔ Container my-app   Stopped (成功 app停止完了)
        ✔ Container my-db    Stopped (成功 db停止完了)

    docker compose stop app 特定サービスのみ停止
    docker compose stop app db 複数サービス停止
    docker compose stop -t 30 タイムアウト指定
        Node.js サーバー終了処理
        DB保存処理
        ログ書き込み
        バックグラウンドジョブ終了

        → すぐ kill せず安全停止できる
    \`\`\`
`);