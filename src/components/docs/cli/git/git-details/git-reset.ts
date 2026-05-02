import dedent from "dedent";

export const detail = dedent(`
    ### git reset
    HEAD（現在位置）・index（ステージ）・working tree（作業フォルダ）を巻き戻すコマンド

    #### 使用場面
    - コミット取り消し
    - add取り消し
    - 変更を戻す

    \`\`\`bash
    git reset [オプション] [移動先]
    \`\`\`

    #### git reset は3段階を操作する
    \`\`\`txt
    ① HEAD         = 現在のコミット位置
    ② index        = git add 済み領域
    ③ working tree = 実ファイル
    \`\`\`
    オプションでどこまで戻すか変わる

    #### 表示項目の例
    \`\`\`bash
    HEAD~1                          1つ前へ戻る
    HEAD~2                          2コミット前へ戻る
    Changes to be committed         add済み変更
    Changes not staged for commit   未add変更
    nothing to commit               変更なし
    \`\`\`

    #### オプション
    \`\`\`bash
    git reset fc62fa6         コミットID指定
    git reset HEAD~1          コミット取り消し addも解除 変更ファイルは残る
    git reset --soft HEAD~1   コミットだけ取り消す(add状態とファイル変更は残る)

    \`\`\`

    #### 実行例
    \`\`\`bash
    git commit -m "mistake"
    git reset --soft HEAD~1
        git status
            Changes to be committed:
            modified: src/app.tsx

    git reset --mixed HEAD~1
        Changes not staged for commit:
        modified: src/app.tsx

    git add .
    git reset(add取り消し)

    git reset --soft HEAD~1
    git commit -m "正しいメッセージ"
        コミットメッセージ修正したい場合
    \`\`\`
    ⚠️ --hard は復元困難
`);