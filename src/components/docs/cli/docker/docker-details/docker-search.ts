import dedent from "dedent";

export const detail = dedent(`
    ### docker search
    インターネット上のDockerイメージ一覧を検索(ダウンロードではない)

    \`\`\`bash
    docker search キーワード
    \`\`\`

    #### 使用場面
    - nginx を使いたい
    - mysql の公式イメージを探したい
    - redis の人気イメージを探したい
    - Node.js の公式イメージ名を確認したい

    #### 表示項目
    \`\`\`txt
    NAME               イメージ名
    DESCRIPTION        イメージの説明
    STARS              Docker Hub上の人気度(数が多いほど利用者が多い)
    OFFICIAL           [OK]が付いていれば Docker公式認定イメージ
    \`\`\`

    #### オプション
    \`\`\`bash
    docker search nginx --limit 5                  上位5件だけ表示
    docker search nginx --filter is-official=true  公式イメージのみ
    docker search mysql --filter stars=100         Starsで絞る
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker search nginx
        NAME                              DESCRIPTION                                     STARS     OFFICIAL
        nginx                             Official build of Nginx.                        20000     [OK]
        bitnami/nginx                     Bitnami container image for NGINX               180
        linuxserver/nginx                An Nginx container                              95
        jc21/nginx-proxy-manager         Docker container for managing nginx proxy        420

    docker search node --filter is-official=true
        NAME      DESCRIPTION                                      STARS     OFFICIAL
        node      Node.js is a JavaScript-based platform for s…   14155     [OK]
    \`\`\`
`);