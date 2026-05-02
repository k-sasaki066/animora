import dedent from "dedent";

export const detail = dedent(`
    ### git remote
    リモートリポジトリ（GitHubなど外部サーバー）との接続情報を管理・確認する

    \`\`\`txt
    ローカルPC ←→ GitHub（リモート）
    GitHub側の情報を確認する
    \`\`\`

    \`\`\`bash
    git remote
    \`\`\`

    #### 表示項目
    \`\`\`bash
    origin      リモートの名前(デフォルトネーム)
    URL         接続先リポジトリ
    (fetch)     取得用（git pull / fetch）
    (push)      送信用（git push）
    \`\`\`

    #### オプション
    \`\`\`bash
    git remote -v                       詳細表示
    git remote add origin URL           リモート追加
    git remote remove origin            リモート削除
    git remote rename origin upstream   名前変更
    git remote set-url origin 新URL     URL変更
    git remote show origin              詳細情報表示
    \`\`\`

    #### 実行例
    \`\`\`bash
    git remote -v
        origin  https://github.com/user/repo.git (fetch)
        origin  https://github.com/user/repo.git (push)

    git remote show origin
        * remote origin
        Fetch URL: https://github.com/user/repo.git
        Push URL:  https://github.com/user/repo.git
        HEAD branch: main
        Remote branches:
            main tracked
        Local branch configured for 'git pull': main merges with origin/main
    \`\`\`
`);