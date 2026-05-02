import dedent from "dedent";

export const detail = dedent(`
    ### docker run
    新しいコンテナ作成して起動<br />
    docker create → docker startを実行

    \`\`\`bash
    docker run [オプション] IMAGE [COMMAND] [ARG...]
    \`\`\`

    #### オプション
    \`\`\`bash
    -d       : バックグラウンドで起動
    -p       : ポートマッピング
    --name   : コンテナに名前を付ける
    --rm     : 終了時にコンテナを自動削除
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker run -d -p 8080:80 nginx （ホストの8080をコンテナの80に接続）
    docker run --name my-web -d nginx
    docker run --rm nginx
    \`\`\`
`);