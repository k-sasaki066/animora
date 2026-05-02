import dedent from "dedent";

export const detail = dedent(`
    ### git checkout
    Git の ブランチ切替・特定コミットへ移動

    \`\`\`bash
    git checkout ブランチ名
    \`\`\`

    #### 使用場面
    - ブランチ切替
    - 新規ブランチ作成して切替

    #### 出力項目の例
    \`\`\`txt
        * 現在いるブランチ
    Switched to branch 'main'               ブランチ切替成功
    Switched to a new branch 'feature/api'  新規ブランチ作成
    \`\`\`

    #### オプション
    \`\`\`bash
    git checkout -b 新ブランチ名                新規作成＋切替
    git checkout --track origin/feature/top   リモート追跡ブランチ作成
    git checkout --detach コミットID            特定コミットへ一時移動
    \`\`\`

    #### 実行例
    \`\`\`bash
    git checkout feature/***
        Switched to branch 'feature/***' (feature/*** へ移動)
        Your branch is up to date with 'origin/feature/***'.(リモートと同期済み)

    git checkout -b feature/***
        Switched to a new branch 'feature/***'

    git checkout main   mainへ戻る
    \`\`\`
    ⚠️ 未コミット変更があると切替できない場合あり
`);