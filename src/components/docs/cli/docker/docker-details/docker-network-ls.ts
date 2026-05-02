import dedent from "dedent";

export const detail = dedent(`
    ### docker network ls
    Dockerデーモンが管理するネットワークを一覧表示

    \`\`\`bash
    docker network ls [オプション]
    \`\`\`

    #### 表示項目
    \`\`\`txt
    NETWORK ID   : ネットワーク固有ID

    NAME         : ネットワーク名
        bridge        (Docker標準ネットワーク)
        host          (ホストPCと共有)
        none          (通信なし)
        myapp_default (docker compose自動生成)

    DRIVER       : 通信方式
        bridge      (コンテナ同士を同じLANのようにつなぐ)
        host        (コンテナがPC本体のネットワークを直接使う)
        null / none	(ネットワーク接続なし)
        overlay	    (複数サーバー間通信)

    SCOPE (local, swarm) : 適用範囲
        local  (このPC内だけで有効)
        swarm  (複数サーバー共有ネットワーク)
    \`\`\`

    #### オプション
    \`\`\`bash
    -q (--quiet)     : IDのみを表示
    --no-trunc       : IDを省略せずに表示
    -f (--filter)    : フィルター機能
    --format         : フォーマット指定
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker network ls -f driver=bridge       ドライバーがbridgeのネットワークのみ表示
    docker network ls -f type=custom         customで作成したネットワークのみ表示
    docker network ls --format "{{.Name}}"   名前だけを表示
    docker network inspect network_name      詳細なネットワーク情報を表示
    \`\`\`
`);