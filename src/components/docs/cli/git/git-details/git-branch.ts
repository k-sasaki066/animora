import dedent from "dedent";

export const detail = dedent(`
    ### git branch
    Gitのブランチ管理コマンド

    \`\`\`bash
    git branch
    \`\`\`

    #### 使用場面
    - ブランチ一覧を見る
    - 新しいブランチを作る
    - ブランチ削除
    - リモート追跡確認

    #### 出力項目の例
    \`\`\`txt
        * 現在いるブランチ
    \`\`\`

    #### オプション
    \`\`\`bash
    git branch feature/about       新規ブランチ作成(作成のみで切替しない)
    git branch -d feature/about    ローカルブランチ削除(リモート側は消えない)
        Deleted branch feature/about
    git branch -D feature/about    強制削除（未マージでも削除）
    git branch -v                  詳細表示(最新コミットIDと最新コミットメッセージが表示される)
    git branch --merged            マージ済みブランチ確認
    git branch --no-merged         未マージブランチ確認
    git branch -a                  リモート含め一覧
    git branch -vv                 リモート追跡情報付き
    \`\`\`

    #### 実行例
    \`\`\`bash
    git branch    一覧表示
        * feature/top
        main
        develop

    git branch -v
        * feature/top           66643bb Merge pull request #260 from ****/ブランチ名
        main                    1c80a42 環境構築

    git branch -a
        * feature/top
        main
        remotes/origin/main
        remotes/origin/feature/top
    \`\`\`
    ⚠️ GitHub側のブランチも消したい場合
    \`\`\`bash
    git push origin --delete ブランチ名
    \`\`\`
`);