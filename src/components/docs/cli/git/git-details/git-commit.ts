import dedent from "dedent";

export const detail = dedent(`
    ### git commit
    ステージングされた変更内容を履歴として保存する<br />
    git add 済みの変更だけ保存される

    \`\`\`bash
    git commit -m [メッセージ]
    \`\`\`

    \`\`\`txt
    ① Working Directory（編集場所,プロジェクトフォルダ)
        ↓ git add
    ② Staging Area（コミット準備）
        ↓ git commit
    ③ Local Repository（リモートリポジトリに送信するための場所、コミット済み履歴）
        ↓ git push
    ④ Remote Repository(インターネット上のリポジトリ)
    \`\`\`

    #### 出力項目の例
    \`\`\`txt
    [feature/ブランチ名 8a4e21c]     現在ブランチ名 + コミットID
    3 files changed                変更されたファイル数
    42 insertions(+)               追加された行数
    10 deletions(-)                削除された行数
    \`\`\`

    #### オプション
    \`\`\`bash
    git commit -m          "検索機能追加" コミットメッセージをその場で指定
    git commit --amend     直前コミットを修正
        - メッセージ修正
        - addし忘れ追加
        - 1つ前のコミットをまとめ直す

    git commit --amend --no-edit   メッセージを変更せずamend

    git commit -am "微修正"         追跡済みファイルを自動addしてcommit(*新規ファイルには効かない)

    git commit --allow-empty -m "deploy trigger"
    空コミット(CI/CD用で使われる)
    \`\`\`

    #### 実行例
    \`\`\`bash
    git add .
    git commit -m "ヘッダーのレスポンシブ対応"
        [feature/header 8a4e21c] ヘッダーのレスポンシブ対応
        3 files changed, 42 insertions(+), 10 deletions(-)

    \`\`\`
    ⚠️ git addしていない変更は含まれない

    #### --amendの実行例
    \`\`\`bash
    git commit --amend --no-edit
        [ブランチ名 fc62fa6] Merge pull request #259 from ****** (GitHub上でPRマージされた履歴をローカルでamendした 状態)
        Author: ****** <******@gmail.com>
        Date: Thu Apr 23 21:33:16 2026 +0900

    git log
        commit fc62fa675740135219b0b0dd00b3c64789986f97 (HEAD -> ブランチ名)
        Merge: 5ca8120 2d2e0a2
        Author: ****** <******@gmail.com>
        Date:   Thu Apr 23 21:33:16 2026 +0900

        前回のコミットメッセージ

        commit 2d2e0a2491fa7e90d707e0169a79b07a641a5dbc
        Author: ****** <******@gmail.com>
        Date:   Thu Apr 23 21:32:20 2026 +0900

        前回のコミットメッセージ

    ⚠️ git push origin HEAD → 拒否される
        ローカル履歴を書き換えた（amend）
        ↓
        リモート履歴と一致しなくなった
        ↓
        通常 push 拒否
        --amendは最新コミットを書き換えるコマンドなのでコミットIDが変わる
        GitHub側には古い履歴があるため普通の push では危険と判断した

    git push --force-with-lease origin HEAD (自分以外の更新が無い時だけ強制上書き)
        Enumerating objects: 7, done.
        Counting objects: 100% (7/7), done.
        Delta compression using up to 8 threads
        Compressing objects: 100% (3/3), done.
        Writing objects: 100% (3/3), 442 bytes | 442.00 KiB/s, done.
        Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
        remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
        To https://******.git
        + d23eb28...fc62fa6 HEAD -> ブランチ名 (forced update)

    git pull origin main
        remote: Enumerating objects: 1, done.
        remote: Counting objects: 100% (1/1), done.
        remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
        Unpacking objects: 100% (1/1), 893 bytes | 297.00 KiB/s, done.
        From https://github.com/******
        * branch            main       -> FETCH_HEAD
        d23eb28..66643bb  main       -> origin/main
        Updating fc62fa6..66643bb
        Fast-forward
    \`\`\`
`);