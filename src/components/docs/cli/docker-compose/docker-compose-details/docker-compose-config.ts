import dedent from "dedent";

export const detail = dedent(`
    ### docker compose config
    Docker Compose が実際に読み込んだ完成形として表示する

    - 設定確認
    - 変数展開確認
    - 構文チェック
    - 最終的なcompose内容確認

    = docker compose.yml の答え合わせ

    \`\`\`bash
    docker compose config [オプション]
    \`\`\`

    ---
    #### 表示される主な項目
    \`\`\`txt
    name          : プロジェクト名
    services      : コンテナ設定
    build         : Dockerfile build設定
    image         : 使用image
    ports         : ポート公開
    volumes       : データ保存設定
    environment   : 環境変数
    depends_on    : 起動順依存
    networks      : 通信設定
    \`\`\`

    ---

    #### 実行例
    \`\`\`bash
    docker compose config
        name: myapp

        services:
            app:
                build:
                context: /Users/me/project
                ports:
                - mode: ingress
                    target: 3000
                    published: "3000"

            db:
                image: postgres:16
                environment:
                POSTGRES_DB: sample

        networks:
            default:
                name: myapp_default

    docker compose config --services     サービス名だけ表示
        app
        db
        nginx

    docker compose config --volumes      volume名一覧
        postgres_data

    docker compose config --images       使うimage一覧
        node:20
        postgres:16
        nginx:latest

    docker compose config --profiles     profile確認
    docker compose config -q             構文チェックのみ（エラー時だけ表示）

    起動前の確認
        docker compose config
        docker compose up -d

    サービス名確認(app 名確認に便利)
        docker compose config --services

    .env確認
        docker compose config
    \`\`\`

    ---
    #### エラー例
    \`\`\`bash
    compose.ymlミス
        services.app must be a mapping

    .env不足
        variable is not set
    \`\`\`
`);