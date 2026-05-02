import dedent from "dedent";

export const detail = dedent(`
    ### docker stop
    コンテナ停止

    \`\`\`bash
    docker stop [オプション] CONTAINER [CONTAINER...]
    \`\`\`

    #### オプション
    \`\`\`bash
    -t (--time) : 強制的に停止するまで、待機する秒数 (デフォルト10秒)
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker stop $(docker ps -q)                    稼働中のコンテナをすべて停止
    docker stop a1b2c3d4e5f6                       コンテナIDで停止
    docker stop container1 container2 container3   複数コンテナをまとめて停止
    docker stop -t 10 my-container                 停止まで10秒待機して終了

    * docker kill <コンテナID/名前>                  コンテナを強制停止(SIGKILLシグナルを直接送信し、直ちに強制終了)
    * docker compose down                          Docker Compose で起動したコンテナを停止
    \`\`\`
`);