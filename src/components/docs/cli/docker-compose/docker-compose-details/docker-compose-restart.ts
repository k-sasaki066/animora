import dedent from "dedent";

export const detail = dedent(`
    ### docker compose restart
    Docker Compose で管理しているサービス（コンテナ）を再起動する<br />
    stop (停止) → start（起動）を自動で行う

    - 設定変更後に反映したい
    - 一時的に不調なので再起動したい
    - 接続エラーをリセットしたい
    - 開発中にアプリだけ再起動したい

    \`\`\`bash
    docker compose restart [オプション] [サービス...]
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker compose restart           全サービス再起動
        [+] Restarting 3/3
        ✔ Container myapp-db       Started
        ✔ Container myapp-app      Started
        ✔ Container myapp-nginx    Started

    docker compose restart app app   サービスだけ再起動
    docker compose restart app db    複数サービス再起動
    docker compose restart -t 5     停止時の待機秒数を指定
        [+] Restarting 1/1
        ✔ Container animora-app  Started
            Restarting	再起動処理中
            Started	起動完了
    \`\`\`

    ⚠️ コード変更だけなら restart してもbuild内容は更新されない<br />
    Dockerfile変更時は ： docker compose up -d --build
`);