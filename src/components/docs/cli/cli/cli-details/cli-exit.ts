import dedent from "dedent";

export const detail = dedent(`
    ### exit（終了）
    現在開いているシェル（ターミナルセッション）を終了する<br />
    ターミナルそのものを閉じたり、SSH接続・Dockerコンテナ・Node実行環境などから抜ける時に使う

    \`\`\`bash
    exit
    \`\`\`

    - サーバー停止
    - コマンド中断
    - 実行中プロセス終了

    #### 実行例
    \`\`\`bash
    Dockerコンテナに入る
        docker exec -it animora-app sh
            /app #
            exit (コンテナ内シェルが終了し、ホストに戻る)
            user@host:~$

    SSH接続
        ssh user@server
        exit (接続終了（ローカルに戻る）)
    \`\`\`

    ⚠️Ctrl + C = 実行中の処理を止める
    \`\`\`bash
    npm run dev
    ↓
    Ctrl + C (今動いている処理を止める)
    \`\`\`
`);