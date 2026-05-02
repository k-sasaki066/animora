import dedent from "dedent";

export const detail = dedent(`
    ### docker compose top
    Composeで起動しているコンテナ内のプロセス一覧を見る<br />
    そのコンテナの中で今なにが動いているか確認する

    \`\`\`bash
    docker compose top [SERVICE...]
    \`\`\`

    #### 表示される項目
    - SERVICE : composeのサービス名
    - "#" : コンテナ番号
    - UID : 実行ユーザー
    - PID : プロセスID
    - PPID : 親プロセスID
    - C : CPU使用率目安
    - STIME	: 起動時刻
    - TTY : ターミナル有無(?はDockerバックグラウンド起動)
    - TIME : 累積CPU時間
    - CMD : 実行コマンド

    #### 実行例
    \`\`\`bash
    docker compose top app 特定サービスだけ見る
        SERVICE   #   UID   PID   PPID  C   STIME  TTY  TIME      CMD
        frontend  1   root  1664  1642  0   11:37  ?    00:00:00  npm run dev
        frontend  1   root  1707  1664  0   11:37  ?    00:00:00  node /app/node_modules/.bin/next dev
        frontend  1   root  1718  1707  50  11:37  ?    00:35:05  next-server (v14.2.35)
    \`\`\`

    ⚠️ 停止中コンテナは表示されない
`);