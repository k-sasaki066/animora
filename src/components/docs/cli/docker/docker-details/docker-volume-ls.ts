import dedent from "dedent";

export const detail = dedent(`
    ### docker volume ls
    Dockerホスト上で作成・管理されているすべてのボリュームを一覧表示

    \`\`\`bash
    docker volume ls [オプション]
    \`\`\`

    #### 表示項目
    \`\`\`txt
    - DRIVER        : ボリュームドライバー（通常は local）
    - VOLUME NAME   : ボリューム名（コンテナで使用しているデータ名）
    \`\`\`

    #### オプション
    \`\`\`bash
    -q        : 名前のみ表示
    -f        : フィルター(例：-f dangling=true 未使用ボリューム（dangling）の抽出)
    --volumes : ボリュームも削除
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker volume ls -q
    docker volume ls -f dangling=true
    docker volume ls -f label=label_name (ラベルで絞り込み)
    docker volume inspect <ボリューム名> (ボリューム詳細)
    docker volume rm <ボリューム名> (削除)
    \`\`\`
    ⚠️ 削除されたボリュームは復元できない
`);