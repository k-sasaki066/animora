import dedent from "dedent";

export const detail = dedent(`
    ### git diff
    編集前と編集後の変更差分を見るコマンド

    #### 使用場面
    - 何行変更したか確認
    - commit前の最終確認
    - addした差分確認
    - branch同士の比較

    \`\`\`bash
    git diff
    \`\`\`

    #### 表示項目の例
    \`\`\`bash
    diff --git a/... b/...           比較しているファイル a = 変更前 b = 変更後
    index e12abc1..fa91bc2 100644    Git内部ハッシュ
    --- a/app.js                     旧ファイル
    +++ b/app.js                     新ファイル
    @@ -1 +1 @@                      何行目が変わったか
    +const name = "Hanako";          追加された行
    -const name = "Taro";            削除された行
    \`\`\`

    #### オプション
    \`\`\`bash
    git diff --staged            add済み差分を見る(commit前確認に重要)
    git diff src/app/page.tsx    特定ファイルだけ確認
    git diff --stat              変更統計だけ見る
    git diff --word-diff         単語単位で見る
    git diff main feature/top    branch比較
    git diff HEAD~1 HEAD         commit比較
    \`\`\`

    #### 実行例
    \`\`\`bash
    git diff
        diff --git a/app.js b/app.js
        index e12abc1..fa91bc2 100644
        --- a/app.js
        +++ b/app.js
        @@ -1 +1 @@
        -const name = "Taro";
        +const name = "Hanako";

    git diff --stat
        src/app/page.tsx | 12 +++++++---
        src/ui/Card.tsx |  5 ++--
        2 files changed, 10 insertions(+), 7 deletions(-)
    \`\`\`
    ⚠️ diffは確認するだけで保存はしない<br />
    改行だけでも差分出る
`);