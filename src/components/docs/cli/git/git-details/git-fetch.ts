import dedent from "dedent";

export const detail = dedent(`
    ### git fetch
    リモートリポジトリの最新履歴を取得する<br />
    作業中のファイルや現在のブランチには反映しない

    \`\`\`bash
    git fetch
    現在のブランチに紐づく remote branch から取得
    \`\`\`

    - GitHubの最新更新を確認したい
    - 他人のpush内容を取り込みたい
    - merge前に差分確認したい
    - 安全に最新状態だけ取得したい

    \`\`\`txt
    ① Working Directory
        ↓ git add
    ② Staging Area
        ↓ git commit.      ↑ pull(merge)
    ③ Local Repository
        ↓ git push.        ↑ pull(fetch)
    ④ Remote Repository(インターネット上のリポジトリ)
    \`\`\`

    #### 出力項目の例
    \`\`\`txt
    From https://github.com/user/app
    * [new branch]      feature/ui -> origin/feature/ui
        a1b2c3d..e4f5g6h  main       -> origin/main
    - [deleted]         (none)     -> origin/old-branch

    [new branch] 新しいリモートブランチ追加
    a1b2..e4f5 既存ブランチ更新
    [deleted] リモートで削除されたブランチ
    \`\`\`

    #### オプション
    \`\`\`bash
    git fetch origin 特定リモート取得
    git fetch --all 全リモート取得
    git fetch --prune 不要な追跡ブランチ削除
    git fetch --tags タグも取得
    git fetch --force 強制更新も反映
    \`\`\`

    #### 実行例
    \`\`\`bash
    git fetch
        remote: Enumerating objects: 5, done.
        remote: Counting objects: 100% (5/5), done.
        remote: Compressing objects: 100% (2/2), done.
        remote: Total 3 (delta 1), reused 3 (delta 1)
        From https://github.com/user/app
        a1b2c3d..e4f5g6h  main -> origin/main

    git fetch origin

    \`\`\`

    #### fetch後に反映する方法
    \`\`\`bash
    git merge origin/main
    git rebase origin/main
    git pull
    \`\`\`
    ⚠️ fetchしただけでは作業ファイルは変わらない<br />
    origin/main (取得したリモートmain)と main (自分のローカルmain)は別物
`);