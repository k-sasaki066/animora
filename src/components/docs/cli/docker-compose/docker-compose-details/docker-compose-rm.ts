import dedent from "dedent";

export const detail = dedent(`
    ### docker compose rm
    停止中の compose コンテナを削除する

    #### 削除対象
    - 停止済みコンテナ
    - composeで作成されたサービスコンテナ

    #### 削除されないもの
    - image
    - volume（通常）
    - network（通常）
    - 起動中コンテナ

    \`\`\`bash
    docker compose rm rm [SERVICE...]
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker compose rm
        Going to remove project_app_1, project_db_1
        Are you sure? [yN]
        → yで実行すると削除される

    docker compose rm -f.        確認なしで削除
        Removing project_app_1 ... done
        Removing project_db_1 ... done

    docker compose rm -s         起動中なら停止してから削除
    docker compose rm -v         volume も削除(匿名volumeも消える)
    docker compose rm -fsv       f (確認なし), s (停止して削除), v (volume削除)

    実行後の確認方法
        docker compose ps
            NAME   IMAGE   COMMAND   SERVICE   STATUS   PORTS

    → 何も出なければ削除完了

    buildし直したい時
        docker compose rm -f
        docker compose up --build

    壊れたコンテナを作り直す
        docker compose stop
        docker compose rm -f
        docker compose up -d
    \`\`\`

    ⚠️ 起動中コンテナはそのままでは削除不可
    \`\`\`bash
    You cannot remove a running container
    \`\`\`
`);