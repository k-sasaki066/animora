import dedent from "dedent";

export const detail = dedent(`
    ### docker compose start
    停止しているコンテナを再起動する

    up     =  作成して起動<br />
    stop   =  停止<br />
    start  =  停止済みを再開<br />
    down   =  削除<br />

    #### 使う場面
    - 一度停止した開発環境を再開したい
    - DBコンテナを再起動したい
    - compose環境を素早く戻したい
    - up より速く再開したい

    \`\`\`bash
    docker compose start [サービス名]
    \`\`\`

    #### 表示項目
    - Running 2/2 :  2個対象で2個成功
    - Started :  起動完了
    - Starting :  起動中
    - Error	:  エラー発生

    #### 実行例
    \`\`\`bash
    docker compose start   全サービス起動
        [+] Running 2/2
        ✔ Container my-app     Started
        ✔ Container my-db      Started

    docker compose start app   特定サービスのみ起動
        [+] Running 1/1
        ✔ Container my-app Started

    docker compose start app db   複数サービス指定

    docker compose start --help   ヘルプ表示
    docker compose start -q     quiet mode（出力を減らす）

    一時停止して再開
        docker compose stop
        docker compose start

    作り直したい
        docker compose down
        docker compose up -d
    \`\`\`

    ⚠️ コンテナ削除済み(docker compose down)なら使えない
    作り直しが必要
`);