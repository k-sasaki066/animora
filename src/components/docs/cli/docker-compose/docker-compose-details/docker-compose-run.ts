import dedent from "dedent";

export const detail = dedent(`
    ### docker compose run
    一時的なコンテナを起動して指定コマンドを実行する

    よく使う用途
    - npm install
    - artisan migrate
    - rails db:migrate
    - python script.py
    - bashで中に入る
    - テスト実行
    - バッチ処理

    \`\`\`bash
    docker compose run [オプション] [-v ボリューム...] [-p ポート...] [-e KEY=VAL...] [-l KEY=VALUE...] サービス [コマンド] [引数...]
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker compose run app npm install
        run	       一時コンテナ起動
        app	        サービス名
        npm install	実行コマンド

    docker compose run --rm app npm test               : 終了後コンテナ削除
    docker compose run --rm -it app bash               : 対話モード
    docker compose run -p 3000:3000 app npm run dev    : 個別ポート指定
    docker compose run --no-deps app bash              : 依存サービス起動しない
    docker compose run --service-ports app npm run dev : compose.yml の ports を有効化(通常runではポート公開されない)
    \`\`\`

    #### 実行後の表示例
    \`\`\`bash
    [+] Running 1/1
    ✔ Container project-db-1 Running

    added 120 packages in 3s
    \`\`\`

    ⚠️  docker compose up	 常駐アプリ起動
        docker compose run	 単発コマンド実行
`);