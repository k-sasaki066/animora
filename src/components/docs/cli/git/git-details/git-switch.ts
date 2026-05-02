import dedent from "dedent";

export const detail = dedent(`
    ### git switch
    ブランチを切り替える専用コマンド

    \`\`\`bash
    git switch ブランチ名
    \`\`\`

    #### 使用場面
    - ブランチ切替
    - 新規ブランチ作成して切替

    #### 出力項目の例
    \`\`\`txt
        * 現在いるブランチ
    Switched to branch 'main'                    ブランチ切替成功
    Switched to a new branch 'feature/api'       新規ブランチ作成
    Your branch is up to date with 'origin/main' 追跡設定付き
    error: Your local changes would be overwritten by checkout
    変更が邪魔で切替不可
    \`\`\`

    #### オプション
    \`\`\`bash
    git switch main                ブランチ切替
    git switch -c feature/login    新規作成して切替
    git switch -                   1つ前のブランチへ戻る
    \`\`\`

    #### 実行例
    \`\`\`bash
    git switch main
        Switched to branch 'main'
        Your branch is up to date with 'origin/main'.

    git switch -c feature/header
        Switched to a new branch 'feature/header'

    git switch -
        Switched to branch 'feature/top'
    \`\`\`
    ⚠️ 未コミット変更があると切替できない場合あり
`);