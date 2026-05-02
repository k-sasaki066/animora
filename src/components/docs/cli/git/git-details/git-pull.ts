import dedent from "dedent";

export const detail = dedent(`
    ### git pull
    リモートリポジトリの最新変更を取得し、現在のブランチへ反映する<br />
    git fetch + git mergeをまとめて実行

    \`\`\`bash
    git pull [リモート名] [ブランチ名]
    現在のブランチに紐づく remote branch から取得
    \`\`\`

    - GitHubの最新状態を取り込む
    - 他メンバーの変更を自分へ反映
    - push前に差分を最新化
    - 作業開始前の同期

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
    From github.com...         取得元リモートURL
    123..b456                  更新前コミット → 更新後コミット
    Fast-forward               枝分かれなく直進更新
    insertions / deletions     追加行数 / 削除行数
    \`\`\`

    #### オプション
    \`\`\`bash
    git pull --rebase         merge commit作らず履歴を綺麗にする
    git pull origin main      特定branch指定
    git pull --tags           タグも取得
    \`\`\`

    #### 実行例① 更新あり(履歴分岐なしでそのまま前進更新)
    \`\`\`bash
    git pull
        From github.com:user/project
            a123456..b789012  main -> origin/main
        Updating a123456..b789012
        Fast-forward
            src/app.tsx | 10 +++++-----
            1 file changed, 5 insertions(+), 5 deletions(-)

    \`\`\`

    #### 実行例② マージ発生
    自分が変更した間に他の人も変更した状態でpullすると履歴が枝分かれしているのでマージ発生する
    \`\`\`bash
    git pull
        Merge made by the 'ort' strategy 自分の変更と他人の変更を自動で統合成功しました
    \`\`\`

    #### 実行例③ 既に最新
    \`\`\`bash
    git pull
        Already up to date.
    \`\`\`

    #### 実行例④ コンフリクト発生(同じ箇所を双方編集して衝突)
    \`\`\`bash
    git pull
        CONFLICT (content): Merge conflict in src/page.tsx
        Automatic merge failed
        →手動修正が必要
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
    ⚠️ pull前に未コミット変更あると危険
`);