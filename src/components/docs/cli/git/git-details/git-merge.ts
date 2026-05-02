import dedent from "dedent";

export const detail = dedent(`
    ### git merge
    別ブランチの変更内容を現在のブランチへ統合する

    \`\`\`bash
    git merge ブランチ名
    \`\`\`

    #### 使用場面
    - 開発完了したブランチをmainに取り込みたい時

    #### 出力項目の例
    \`\`\`txt
    Updating a1b2c3d..f4e5g6h    main のコミット位置が進んだ
    Fast-forward                 分岐がなく、そのまま前進できた(履歴が一直線)
    file changed                 変更ファイル数.追加行数.削除行数
    \`\`\`

    #### オプション
    \`\`\`bash
    git merge --no-ff feature/top     Fast-forward可能でも 必ずマージコミット作成
    git merge --squash feature/top    featureブランチの複数コミットを 1コミットにまとめる
        → git commit -m "top機能追加"
    git merge --abort                 コンフリクト時に merge 中止して元へ戻す
    git merge feature/top --no-edit   自動生成される merge message を編集せず確定
    git merge --ff-only feature/top   Fast-forward可能な時だけ merge。Merge commitは禁止
    \`\`\`

    #### 実行例
    \`\`\`bash
    git merge feature/top
        Updating a1b2c3d..f4e5g6h
        Fast-forward
        src/app/page.tsx | 12 +++++++-----
        1 file changed, 7 insertions(+), 5 deletions(-)

    git merge feature/login マージコミットあり
        Merge made by the 'ort' strategy.
        src/components/Login.tsx | 20 ++++++++++++++++++
        1 file changed, 20 insertions(+)
        履歴が分岐していたため Merge Commit 作成
    \`\`\`

    #### コンフリクト例
    \`\`\`bash
    git merge feature/top
        Auto-merging src/app/page.tsx
        CONFLICT (content): Merge conflict in src/app/page.tsx
        Automatic merge failed; fix conflicts and then commit the result.

    * 解決手順 基本はターミナル上で修正する *
    git status 状態確認
        On branch main
            You have unmerged paths.
            (fix conflicts and run "git commit")

            Unmerged paths:
            both modified:   src/app/page.tsx
        例：page.tsx を直せば merge 完了できる状態

    ディレクトリ配下に移動しmainを最新の状態にする
        git switch main
        git pull main (ブランチ①をマージした状態)
        ↓
    マージしたいブランチ②に移動しmainをマージする
        git merge main

        <<<<<<< HEAD
        <h1>Main Title</h1>       現在ブランチ(main)
        =======
        <h1>Feature Title</h1>    取り込み側
        >>>>>>> feature/top
        ↓
    編集(両方を表示)
        <h1>Main Title</h1>
        <h1>Feature Title</h1>
        ↓
    再push
        git add .
        git commit -m "Resolve conflict"
        git push origin ***
    \`\`\`
`);