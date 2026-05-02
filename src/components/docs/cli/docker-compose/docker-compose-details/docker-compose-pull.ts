import dedent from "dedent";

export const detail = dedent(`
    ### docker compose pull
    compose.ymlに書かれている 各サービスのDocker imageを取得・更新する<br />
    コンテナは起動しないがimageだけ最新取得する

    - チーム開発で最新image取得
    - 本番デプロイ前更新
    - docker compose up 前準備
    - imageキャッシュ更新

    \`\`\`bash
    docker compose pull [オプション] [サービス...]
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker compose pull
        [+] Pulling 3/3
        ✔ db Pulled
        ✔ redis Pulled
        ✔ app Pulled

        Pull complete           (image取得完了)
        Already exists          (すでに同じlayerあり（再DL不要）)
        Downloading [=======> ] (ダウンロード中)
        Extracting              (展開中)
        app Pulled              (サービス単位で完了)

    docker compose pull app                      特定サービスだけpull
    docker compose pull --parallel               複数imageを同時取得（高速化）
    docker compose pull --ignore-pull-failures   一部失敗しても他を続行
    docker compose pull --policy always          毎回確認して取得

    最新image取得して再起動
        docker compose pull
        docker compose up -d
    \`\`\`

    ⚠️ pullしてもコンテナは変わらない<br />
    取得しただけで、今動いてるコンテナは古いまま
`);