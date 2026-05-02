import dedent from "dedent";

export const detail = dedent(`
    ### git rebase
    コミット履歴を付け替えて、一直線に整理しながら統合する<br />
    merge = 分岐した履歴をそのまま合流<br />
    rebase = 自分の変更を最新履歴の上に積み直す

    \`\`\`txt
    rebase 前
        main:    A---B---C
                      \\
        feature:       D---E

    git rebase main 後
        main:    A---B---C
                          \\
        feature:           D'---E'

    D,E を Cの上に載せ直した新コミット に変換
    \`\`\`

    #### 使用場面
    - feature ブランチを main 最新状態へ追従
    - PR前に履歴を綺麗にする
    - merge commit を増やしたくない
    - チームで直線的な履歴にしたい

    \`\`\`bash
    git rebase 対象ブランチ
    \`\`\`

    #### オプション
    \`\`\`bash
    git rebase --continue   競合解決後に続行
    git rebase --abort      途中中止して元に戻す
    git rebase --skip       問題コミットを飛ばす
    \`\`\`

    #### 実行例
    \`\`\`bash
    git fetch origin
    git rebase origin/main
        Successfully rebased and updated refs/heads/feature/top.
    \`\`\`

    #### mergeとの違い
    \`\`\`bash
    git merge main (Merge commit ができる)
        A---B---C------M
             \\        /
                D---E---

    rebase
        A---B---C---D'---E'
    \`\`\`
    ⚠️ コミットID変わる
`);