import dedent from "dedent";

export const detail = dedent(`
    ### git push
    ローカル(自分のPC)のコミット履歴をリモートリポジトリへ送信し反映させる

    \`\`\`bash
    git push [リモート名] [ブランチ名]
    \`\`\`

    \`\`\`txt
    ① Working Directory（編集場所,プロジェクトフォルダ)
        ↓ git add
    ② Staging Area（コミット準備）
        ↓ git commit
    ③ Local Repository（リモートリポジトリに送信するための場所、コミット済み履歴）
        ↓ git push
        プロジェクトフォルダ内の .git フォルダそのもの。このフォルダの中に、プロジェクトの全ての変更履歴（コミット）が保存されている
    ④ Remote Repository(インターネット上のリポジトリ)
    \`\`\`

    #### 出力項目の例
    \`\`\`txt
    Enumerating objects       送信対象ファイルや履歴を数えている
    Counting objects          圧縮対象を確認
    Compressing objects       送信データ圧縮中
    Writing objects           GitHubへ送信中
    a1b2c3d..e4f5g6h          旧コミット → 新コミット
    ブランチ名 -> ブランチ名     ローカルbranch → リモートbranch
    \`\`\`

    #### オプション
    \`\`\`bash
    git push -u origin main       追跡設定する。次回以降git push, git pullだけでOK
    git push --force-with-lease   他人更新が無ければ安全に上書き
    git push --tags               タグも送信
    \`\`\`

    #### 実行例
    \`\`\`bash
    git push origin HEAD          現在ブランチをそのままpush
        Enumerating objects: 8, done.
        Counting objects: 100% (8/8), done.
        Delta compression using up to 8 threads
        Compressing objects: 100% (4/4), done.
        Writing objects: 100% (5/5), 512 bytes | 512.00 KiB/s, done.
        Total 5 (delta 2), reused 0 (delta 0)
        To https://github.com/user/repo.git
        a1b2c3d..e4f5g6h  feature/top -> feature/top

    \`\`\`

    #### エラーと対処
    \`\`\`bash
    rejected (non-fast-forward)  リモートの方が進んでいる
        git pull --rebase
        git push

    authentication failed        認証失敗
        GitHub Token / SSH鍵確認

    upstream branch not set      追跡設定されていない
        git push -u origin ブランチ名

    \`\`\`
    ⚠️ push前にstatus確認(不要ファイル混入防止)<br />
    force pushは慎重に(共有ブランチでやると他人履歴が消える場合あり)
`);