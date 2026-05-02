import dedent from "dedent";

export const detail = dedent(`
    ### docker compose exec
    起動中コンテナ内でコマンド実行

    \`\`\`bash
    docker compose exec [オプション] [-e KEY=VAL...] サービス コマンド [引数...]
    \`\`\`

    #### オプション
    \`\`\`bash
    -d (--detach)  : バックグラウンドでコマンドを実行
    -e (--env)     : 【API 1.25+】環境変数を指定
    --index        : サービスにインスタンスが複数ある場合の、コンテナのインデックス（デフォルト： 1 ）
    -u (--user)    : 特定のユーザーで実行する
    -w (--workdir) : 【API 1.35+】コンテナ内の作業ディレクトリ
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker compose exec -it php bash
        root@74f67a116b18:/var/www# コマンドを入力(php artisan ~)
    \`\`\`

    実行後exitで抜ける
`);