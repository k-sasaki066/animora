import dedent from "dedent";

export const detail = dedent(`
    ### docker exec
    実行中のコンテナ内で新しいコマンドを実行する<br />
    コンテナの停止や再起動なしに、内部のシェル（bash/sh）に入ってデバッグしたり、ファイルを操作したりする

    \`\`\`bash
    docker exec [オプション] CONTAINER COMMAND [ARG...]
    \`\`\`

    #### オプション
    \`\`\`bash
    -it	  :  インタラクティブモード（標準入力を開く + TTYを有効化）
    -d	  :  デタッチモード（バックグラウンド実行）
    -u    :  ユーザー名	特定のユーザーで実行する
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker exec -it container-name /bin/sh
        → /app # 実行したいコマンドを入力

    docker exec -it コンテナ名 sh -c 'du -sh /app/* | sort -hr'
    Dockerコンテナ内の /appフォルダ配下の容量を、大きい順に確認
        892M /app/node_modules
        4.7M /app/public
        3.8M /app/src

    docker exec -it コンテナ名 sh -c "find /app/src -name '*.tsx' -type f -exec du -ch {} + | tail -1"
    Dockerコンテナ内の /app フォルダ配下の.tsxファイルの容量を確認
        2.8M    total
    \`\`\`
    ⚠️ コンテナが起動している必要がある<br />
    対話型シェルを開く場合は -it を忘れずに
`);