import dedent from "dedent";

export const detail = dedent(`
    ### git stash
    現在の作業内容（未コミット変更）を一時退避する<br />
    作業途中の変更をいったん避難させて、ブランチ切替や pull をしたい時

    #### 使用場面
    \`\`\`txt
    feature作業中
        ↓
    急ぎでmainブランチ修正したい
        ↓
    変更途中なのでcheckoutできない
        ↓
    git stash で退避
    \`\`\`

    \`\`\`bash
    git stash
    \`\`\`

    #### 表示項目の例
    \`\`\`bash
    working directory        作業ツリー
    index                    ステージ内容
    WIP = Work In Progress   作業途中
    stash@{0}                0 = 最新 1 = 1つ前
    \`\`\`

    #### オプション
    \`\`\`bash
    git stash push -m "header作業途中"   メッセージ付き保存
    git stash -u                        untrackedファイルも保存(stashのデフォルトは新規ファイルを含まない)
    git stash -a                        ignoredファイルも含む

    git stash pop                       戻してstash削除
    git stash apply                     戻すだけ（stash残す）
    git stash apply stash@{1}           指定stashを戻す

    git stash drop stash@{0}            stash1件削除
    git stash clear                     stash全件削除
    \`\`\`

    #### 実行例
    \`\`\`bash
    git status
        modified: src/app/page.tsx
        modified: src/components/Header.tsx
    git stash
        Saved working directory and index state WIP on feature/top: fc62fa6 ******
    git status
        nothing to commit, working tree clean
        作業内容が消えたように見えますが stash に保存されている

    git stash list
        stash@{0}: WIP on feature/top: fc62fa6 ******
        stash@{1}: WIP on main: a12bc34 fix header

    git stash push -m "header作業途中"
        Saved working directory and index state On feature/top: header作業途中

    git stash pop
        On branch feature/top
        Changes not staged for commit:
        modified: src/app/page.tsx

        Dropped refs/stash@{0}
    \`\`\`
    ⚠️ 新規ファイルは通常保存されない<br />
    永久保存ではない
`);