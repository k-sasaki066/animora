import dedent from "dedent";

export const detail = dedent(`
    ### docker images
    イメージ一覧表示

    \`\`\`bash
    docker images [オプション] [REPOSITORY[:TAG]]
    \`\`\`

    #### 出力項目
    \`\`\`txt
    - IMAGE	        : イメージ名、タグ
    - ID	            : イメージ固有ID
    - DISK USAGE	    : ディスク使用量
    - CONTENT SIZE	: 中身レイヤーサイズ
    - EXTRA	        : 状態情報(U = In Use, 現在コンテナで使用中のイメージ)
    \`\`\`

    #### オプション
    \`\`\`bash
    -all (--all)   : 全てのイメージを表示（デフォルトは、中間イメージを非表示）
    --digests      : 値を表示 digest
    -f (--filter)  : 指定した状況に基づき、出力をフィルタ
    --format       : Go テンプレートを使い、イメージを整えて表示
    --no-trunc     : 出力を省略しない truncate
    -q (--quiet)   : イメージ ID のみ表示
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker image pull [イメージ名]        : Docker Hubなどのレジストリからイメージをダウンロード
    docker image rm [イメージID/名前]     : 指定したイメージを削除
    docker image prune : タグ付けされていない未使用のイメージを削除
    docker image inspect [イメージ名]     : イメージのJSON詳細情報を表示
    docker image build -t [名前] [場所]   : Dockerfileからイメージを作成

    docker images : イメージ一覧表示
        IMAGE           : animora-frontend:latest
        ID              : faa20043c4d3
        DISK USAGE      : 500MB
        CONTENT SIZE    : 0B
        EXTRA           : U

    docker images --no-trunc
        REPOSITORY      : animora-frontend
        TAG             : latest
        IMAGE ID        : sha256:faa20043c4d375df87bc8d94259417c1e1b5bfdfe77eab54f847519aa9a1e73f 4 days ago
        CREATED         : 4 days ago
        SIZE            : 500MB

    docker images --format "{{.ID}}: {{.Repository}}"
        faa20043c4d3: animora-frontend
        ea1f701cabab: daily-calendar-web
        c6bf9d786067: flea-market-php
    \`\`\`
`);