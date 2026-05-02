import dedent from "dedent";

export const detail = dedent(`
    ### git add
    変更したファイルをコミット対象（ステージングエリア）へ登録

    \`\`\`bash
    git add [ファイル名] [オプション]
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

    *Staging Areaは、プロジェクトフォルダ内の .git フォルダの中にある 『index』 という特殊なファイルで管理されている<br />
    このファイルを直接編集することはなく、Gitのコマンドを通じて操作する

    #### 出力項目
    \`\`\`txt
    modified      既存ファイル変更
    new file      新規追加ファイル
    deleted       削除予定
    renamed       名前変更
    \`\`\`

    #### オプション
    \`\`\`bash
    git add -A      現在フォルダ以下すべて追加
    git add -u      既存ファイル変更・削除のみ追加。新規ファイル除外。
    git add -p      変更箇所を対話的に選択
        Stage this hunk [y,n,q,a,d,e,?]?
    \`\`\`

    #### 実行例
    \`\`\`bash
    git add src/app/page.tsx    特定ファイルだけ追加

    git add .                   全変更追加
        → 実行後は何も表示されない

        git status
            Changes to be committed:
            modified:   src/app/page.tsx
            new file:   src/components/Card.tsx
            (add 済み状態)

    \`\`\`

    #### addしないファイル例 (React)
    \`\`\`bash
    # dependencies
    node_modules/    依存ライブラリ本体

    # build / cache
    .next/           Next.jsビルドキャッシュ(開発ごとに再生成されるためadd不要)
    dist/
    build/
    out/
    coverage/
    .turbo/

    # logs
    *.log
    npm-debug.log*
    yarn-debug.log*
    pnpm-debug.log*

    # env files
    .env
    .env.local
    .env.development.local
    .env.production.local
    .env.test.local

    # OS files
    .DS_Store       Mac Finder が自動生成する管理ファイル
    Thumbs.db

    # editor / IDE
    .vscode/       個人のエディタ設定
    .idea/

    # package manager local cache
    .pnpm-store/
    .npm/

    # uploaded / generated assets
    public/uploads/
    tmp/
    temp/

    # test artifacts
    playwright-report/
    test-results/

    # misc
    *.tmp
    *.swp
    \`\`\`

    #### addしないファイル例 (Laravel)
    \`\`\`bash
    # dependencies
    /vendor         Composer依存パッケージ composer install で再生成可能
    /node_modules   Vite / npm依存

    # environment
    .env
    .env.backup
    .phpunit.result.cache

    # framework cache
    /bootstrap/cache/*.php       設定キャッシュ
        以下コマンドで再生成される
        php artisan config:cache
        php artisan route:cache
    /storage/*.key

    # logs
    /storage/logs/*             Laravelログ
    *.log

    # sessions / cache / compiled views
    /storage/framework/cache/*
    /storage/framework/sessions/*
    /storage/framework/views/*
    /storage/framework/testing/*

    # uploaded files
    /public/uploads
    /public/storage            storage:link のシンボリックリンク

    # test coverage
    /coverage

    # IDE / editor
    .idea/
    .vscode/

    # OS files
    .DS_Store
    Thumbs.db
    \`\`\`

    ⚠️ addした時点ではコミットされていない<br />
    add後にさらに編集したら再add必要
`);