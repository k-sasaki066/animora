import dedent from "dedent";

export const detail = dedent(`
    ### docker ps
    現在実行中のDockerコンテナ一覧を表示する

    \`\`\`bash
    docker ps [オプション]
    \`\`\`

    #### 出力項目
    - CONTAINER ID   : コンテナの固有ID
    - IMAGE          : 使用しているイメージ
    - COMMAND        : コンテナ起動時に実行されたコマンド
    - CREATED        : 作成してからの経過時間
    - STATUS         : コンテナの状態（Up: 稼働中, Exited: 停止中）
    - PORTS          : 公開されているポート
    - NAMES          : コンテナ名

    #### オプション
    \`\`\`bash
    -a (--all)     : 停止中を含むすべてのコンテナを表示。
    -q (--quiet)   : コンテナIDのみを表示（スクリプト処理用）。
    -f (--filter)  : 条件でフィルタリング（例: status=exited 停止したコンテナのみ表示）
    -s (--size)    : 各コンテナのディスク使用量（サイズ）を表示。
    -n (--last)    : 直近に作成されたn個のコンテナを表示
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker ps -s
        CONTAINER ID                        : fe548bb2b169
        IMAGE                               : animora-frontend
        COMMAND                             : "docker-entrypoint.s…"
        CREATED                             : 4 days ago
        STATUS                              : Up 12 minutes
        PORTS:0.0.0.0:3000->3000/tcp, [::]  : 3000->3000/tcp
        NAMES                               : animora-app
        SIZE                                : 7.66kB (virtual 1.16GB)
    \`\`\`
`);