import dedent from "dedent";

export const detail = dedent(`
    ### git status
    現在のGit管理状態を確認する最重要コマンド<br />
    作業前・commit前・push前によく使う

    \`\`\`bash
    git status [オプション]
    \`\`\`

    #### 何が確認できるのか
    - 今どのブランチにいるか
    - 変更ファイルは何か
    - add済みか未addか
    - 追跡されていない新規ファイル
    - commit可能か
    - push/pull差分

    #### 出力項目
    \`\`\`txt
    On branch                                         現在いるブランチ名
    Changes not staged for commit                     変更したが add 未実行
    Changes to be committed                           add 済みで commit待ち
    Untracked files                                   新規作成ファイル（Git未管理）
    Your branch is ahead of origin/main by 1 commit   pushしていないコミットが1件ある
    Your branch is behind origin/main by 2 commits    pullが必要
    \`\`\`

    #### オプション
    \`\`\`bash
    git status -s    短縮表示
        M src/app/page.tsx           // modified
        A  src/components/Card.tsx   // added
        D public/images/sample.webp  // deleted
        ?? test.ts                   // 未追跡

    git status -sb    branch情報付き短縮
        ## feature/top...origin/feature/top
        M page.tsx

    git status --ignored 無視ファイルも表示(.gitignore対象も確認可能)
    \`\`\`

    #### 実行例① 変更なし
    \`\`\`bash
    On branch ブランチ名
    Your branch is up to date with 'origin/ブランチ名'.(リモートと同期済み)

    nothing to commit, working tree clean (変更なし)

    \`\`\`

    #### 実行例② 編集したが git add していない
    \`\`\`bash
    On branch ブランチ名

    Changes not staged for commit:
    modified:   src/app/page.tsx

    no changes added to commit

    \`\`\`

    #### 実行例③ add 済みで commit待ち
    \`\`\`bash
    Changes to be committed:
    modified:   src/app/page.tsx
    \`\`\`

    #### 実行例④ Git未管理ファイル (git add すると管理開始)
    \`\`\`bash
    Untracked files:
    src/components/Card.tsx

    \`\`\`
    ⚠️ commit前に必ず見る(不要ファイル混入防止)<br />
    add後も確認(意図しない追加を防ぐ)
`);