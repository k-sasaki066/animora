import dedent from "dedent";

export const detail = dedent(`
    ### docker compose ps
    docker-compose.ymlファイルで定義されたサービス（コンテナ）の現在の状態、コマンド、ポートマッピングを一覧表示する<br />
    起動状態・名前・ポート・いつ作られたか などを確認できる

    \`\`\`bash
    docker compose ps [オプション] [サービス...]
    \`\`\`

    ---
    #### 表示項目
    - NAME	    コンテナ名<br />
    - IMAGE	    使用イメージ<br />
    - COMMAND 	起動コマンド<br />
    - SERVICE 	composeのサービス名<br />
    - CREATED	    作成時期<br />
    - STATUS	    起動してから7秒経過<br />
    - PORTS ポート公開<br />
        (例)0.0.0.0:8025->8025/tcp<br />
        - 0.0.0.0 = PC全体からアクセス可能<br />
        - 8025 左側 = ホストPC側ポート<br />
        - 8025 右側 = コンテナ側ポート<br />
        - tcp = 通信方式

    ---
    #### 実行例
    \`\`\`bash
    docker compose ps	              起動中一覧
        flea-market-mailhog   mailhog/MailHog   "MailHog"                mail    12 months ago   Up 7 seconds   1025/tcp, 0.0.0.0:8025->8025/tcp
        flea-market-mysql-1   mysql:8.0.26.     "docker-entrypoint.s…"   mysql   12 months ago   Up 7 seconds   3306/tcp, 33060/tcp

    docker compose ps -a	          停止中も含め全部表示
    docker compose ps --services	  サービス名だけ表示
    docker compose ps -q	          Container IDだけ表示
    docker compose ps app	          特定サービスのみ表示
    \`\`\`
`);