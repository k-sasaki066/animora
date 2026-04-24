import dedent from "dedent";

export type CommandItem = {
    command: string;
    description: string;
    detail?: string;
};

export const gitCommandColumns = [
    { key: "command", label: "コマンド", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const gitCommandData: CommandItem[] = [
    {
        command: "git status",
        description: "現在のGit管理状態を確認",
        detail: dedent(`
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
        `),
    },
    {
        command: "git add",
        description: "変更ファイルをステージング",
        detail: dedent(`
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
        `),
    },
    {
        command: "git commit",
        description: "コミット作成",
        detail: dedent(`
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
        `),
    },
    {
        command: "git push",
        description: "リモートへコミット履歴を送信",
        detail: dedent(`
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
        `),
    },
    {
        command: "git pull",
        description: "取得＋マージ",
        detail: dedent(`
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
        `),
    },
    {
        command: "git fetch",
        description: "最新履歴取得のみ",
        detail: dedent(`
            ### git fetch
            リモートリポジトリの最新履歴を取得する<br />
            作業中のファイルや現在のブランチには反映しない

            \`\`\`bash
            git fetch
            現在のブランチに紐づく remote branch から取得
            \`\`\`

            - GitHubの最新更新を確認したい
            - 他人のpush内容を取り込みたい
            - merge前に差分確認したい
            - 安全に最新状態だけ取得したい

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
            From https://github.com/user/app
            * [new branch]      feature/ui -> origin/feature/ui
                a1b2c3d..e4f5g6h  main       -> origin/main
            - [deleted]         (none)     -> origin/old-branch

            [new branch] 新しいリモートブランチ追加
            a1b2..e4f5 既存ブランチ更新
            [deleted] リモートで削除されたブランチ
            \`\`\`

            #### オプション
            \`\`\`bash
            git fetch origin 特定リモート取得
            git fetch --all 全リモート取得
            git fetch --prune 不要な追跡ブランチ削除
            git fetch --tags タグも取得
            git fetch --force 強制更新も反映
            \`\`\`

            #### 実行例
            \`\`\`bash
            git fetch
                remote: Enumerating objects: 5, done.
                remote: Counting objects: 100% (5/5), done.
                remote: Compressing objects: 100% (2/2), done.
                remote: Total 3 (delta 1), reused 3 (delta 1)
                From https://github.com/user/app
                a1b2c3d..e4f5g6h  main -> origin/main

            git fetch origin

            \`\`\`

            #### fetch後に反映する方法
            \`\`\`bash
            git merge origin/main
            git rebase origin/main
            git pull
            \`\`\`
            ⚠️ fetchしただけでは作業ファイルは変わらない<br />
            origin/main (取得したリモートmain)と main (自分のローカルmain)は別物
        `),
    },
    {
        command: "git clone URL",
        description: "リポジトリ複製",
        detail: dedent(`
            ### git clone URL
            リモートリポジトリをローカルPCへ丸ごとコピーする<br />
            GitHub / GitLab / Bitbucket などのプロジェクトを自分のPCで編集できるようにする

            \`\`\`bash
            git clone リポジトリURL (https://github.com/******.git)
            \`\`\`

            #### 実行後取得されるもの

            \`\`\`txt
            sample/
            ├── .git    Git履歴
            ├── src     ソースコード
            ├── package.json
            └── ...
            ブランチ情報
            remote(origin)設定
            \`\`\`

            #### 出力項目の例
            \`\`\`txt
            Cloning into 'xxx'      その名前のフォルダを作成中
            Enumerating objects     取得対象ファイル・履歴数を数えている
            Counting objects        必要データ件数計算
            Compressing objects     サーバー側で圧縮送信準備
            Receiving objects       ローカルへダウンロード中
            Resolving deltas        差分履歴を復元中
            \`\`\`

            #### オプション
            \`\`\`bash
            git clone URL 任意フォルダ名      フォルダ名指定
                git clone https://github.com/user/app.git myapp
                → myapp/ に保存される

            git clone -b develop URL        特定ブランチだけ取得
                git clone -b feature/top https://github.com/user/app.git

            git clone --depth 1 URL shallow clone（最新履歴のみ取得）
            \`\`\`

            #### HTTPSで clone
            \`\`\`bash
            git clone https://github.com/vercel/next.js.git
                Cloning into 'next.js'...
                remote: Enumerating objects: 500000, done.
                remote: Counting objects: 100% (500000/500000), done.
                remote: Compressing objects: 100% (...), done.
                Receiving objects: 100% (...), done.
                Resolving deltas: 100% (...), done.

            \`\`\`

            #### SSHで clone
            \`\`\`bash
            git clone git@github.com:user/project.git
            \`\`\`
            ⚠️ 同名フォルダがあると失敗 (fatal: destination path 'フォルダ名' already exists)<br />
            origin/main (取得したリモートmain)と main (自分のローカルmain)は別物

            #### clone後の流れ(リモートリポジトリを変更する場合)
            \`\`\`bash
            ① 保存したいディレクトリに移動
            ② git clone URL
            ③ リモートリポジトリを作成
                New → リポジトリ名、public、初期設定(全て空白にする)
            ④ 紐付け先を変更
                git remote -v 現在の紐付け先を確認
                    origin  https://github.com/コピー元.git (fetch) データを取得するためのURL
                    origin  https://github.com/コピー元.git (push) データを送信するためのURL

                git remote set-url origin 新しく作成したリポジトリのURL

                git remote -v 変更されたか確認
                    origin  https://github.com/新URL.git (fetch)
                    origin  https://github.com/新URL.git (push)

            ⑤ ローカルリポジトリの変更を新しいリポジトリに反映させる
                git status
                git add .
                git status
                git commit -m ""
                git push origin ブランチ名

            \`\`\`
        `),
    },
    {
        command: "git branch",
        description: "ローカルブランチ一覧",
        detail: dedent(`
            ### git branch
            Gitのブランチ管理コマンド

            \`\`\`bash
            git branch
            \`\`\`

            #### 使用場面
            - ブランチ一覧を見る
            - 新しいブランチを作る
            - ブランチ削除
            - リモート追跡確認

            #### 出力項目の例
            \`\`\`txt
             * 現在いるブランチ
            \`\`\`

            #### オプション
            \`\`\`bash
            git branch feature/about       新規ブランチ作成(作成のみで切替しない)
            git branch -d feature/about    ローカルブランチ削除(リモート側は消えない)
                Deleted branch feature/about
            git branch -D feature/about    強制削除（未マージでも削除）
            git branch -v                  詳細表示(最新コミットIDと最新コミットメッセージが表示される)
            git branch --merged            マージ済みブランチ確認
            git branch --no-merged         未マージブランチ確認
            git branch -a                  リモート含め一覧
            git branch -vv                 リモート追跡情報付き
            \`\`\`

            #### 実行例
            \`\`\`bash
            git branch    一覧表示
                * feature/top
                main
                develop

            git branch -v
                * feature/top           66643bb Merge pull request #260 from ****/ブランチ名
                main                    1c80a42 環境構築

            git branch -a
                * feature/top
                main
                remotes/origin/main
                remotes/origin/feature/top
            \`\`\`
            ⚠️ GitHub側のブランチも消したい場合
            \`\`\`bash
            git push origin --delete ブランチ名
            \`\`\`
        `),
    },
    {
        command: "git checkout",
        description: "ブランチ切替",
        detail: dedent(`
            ### git checkout
            Git の ブランチ切替・特定コミットへ移動

            \`\`\`bash
            git checkout ブランチ名
            \`\`\`

            #### 使用場面
            - ブランチ切替
            - 新規ブランチ作成して切替

            #### 出力項目の例
            \`\`\`txt
             * 現在いるブランチ
            Switched to branch 'main'               ブランチ切替成功
            Switched to a new branch 'feature/api'  新規ブランチ作成
            \`\`\`

            #### オプション
            \`\`\`bash
            git checkout -b 新ブランチ名                新規作成＋切替
            git checkout --track origin/feature/top   リモート追跡ブランチ作成
            git checkout --detach コミットID            特定コミットへ一時移動
            \`\`\`

            #### 実行例
            \`\`\`bash
            git checkout feature/***
                Switched to branch 'feature/***' (feature/*** へ移動)
                Your branch is up to date with 'origin/feature/***'.(リモートと同期済み)

            git checkout -b feature/***
                Switched to a new branch 'feature/***'

            git checkout main   mainへ戻る
            \`\`\`
            ⚠️ 未コミット変更があると切替できない場合あり
        `),
    },
    {
        command: "git switch",
        description: "ブランチ切替（新構文）",
        detail: dedent(`
            ### git switch
            ブランチを切り替える専用コマンド

            \`\`\`bash
            git switch ブランチ名
            \`\`\`

            #### 使用場面
            - ブランチ切替
            - 新規ブランチ作成して切替

            #### 出力項目の例
            \`\`\`txt
             * 現在いるブランチ
            Switched to branch 'main'                    ブランチ切替成功
            Switched to a new branch 'feature/api'       新規ブランチ作成
            Your branch is up to date with 'origin/main' 追跡設定付き
            error: Your local changes would be overwritten by checkout
            変更が邪魔で切替不可
            \`\`\`

            #### オプション
            \`\`\`bash
            git switch main                ブランチ切替
            git switch -c feature/login    新規作成して切替
            git switch -                   1つ前のブランチへ戻る
            \`\`\`

            #### 実行例
            \`\`\`bash
            git switch main
                Switched to branch 'main'
                Your branch is up to date with 'origin/main'.

            git switch -c feature/header
                Switched to a new branch 'feature/header'

            git switch -
                Switched to branch 'feature/top'
            \`\`\`
            ⚠️ 未コミット変更があると切替できない場合あり
        `),
    },
    {
        command: "git merge",
        description: "現在ブランチへ統合",
        detail: dedent(`
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
        `),
    },
    {
        command: "git rebase",
        description: "履歴を付け替えて統合",
        detail: dedent(`
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
        `),
    },
    {
        command: "git log",
        description: "コミット履歴表示",
        detail: dedent(`
            ### git log
            コミット履歴を確認するコマンド<br />
            Gitで「いつ・誰が・何を変更したか」を見る

            #### 使用場面
            - 過去の変更履歴確認
            - どのコミットで不具合が入ったか調査
            - 作業者確認
            - コミットID取得（reset / cherry-pick / revert 用）
            - ブランチの流れ確認

            \`\`\`bash
            git log
            実行後[q]で終了
            \`\`\`

            #### 表示項目
            \`\`\`bash
            commit fc62fa  コミットID（SHA-1ハッシュ）
            Author         コミット作成者
            Date           コミット日時
            メッセージ       変更内容の説明
            \`\`\`

            #### オプション
            \`\`\`bash
            git log --oneline                1行で見やすく表示
            git log --max-count=5            最新5件だけ
            git log --oneline --graph --all  ブランチ図付き
            git log --stat                   変更ファイル付き
            git log -p                       差分付き
            git log --author="name"          特定ユーザーのみ
            git log --since="2026-04-01"     日付指定
            git log src/app/page.tsx         特定ファイルの履歴
            \`\`\`

            #### 実行例
            \`\`\`bash
            git log
                commit fc62fa675740135219b0b0dd00b3c64789986f97
                Author: k-sasaki <k.sasaki@example.com>
                Date:   Thu Apr 23 21:33:16 2026 +0900

                    保存時の再ビルドピーク対策

                commit 2d2e0a2491fa7e90d707e0169a79b07a641a5dbc
                Author: k-sasaki <k.sasaki@example.com>
                Date:   Thu Apr 23 21:32:20 2026 +0900

                    Docker設定修正

            git log --oneline
                fc62fa6 保存時の再ビルドピーク対策
                2d2e0a2 Docker設定修正
                5ca8120 README更新
            \`\`\`
        `),
    },
    {
        command: "git diff",
        description: "未ステージ変更確認",
        detail: dedent(`
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
        `),
    },
    {
        command: "git stash",
        description: "変更を一時退避",
        detail: dedent(`
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
        `),
    },
    {
        command: "git reset",
        description: "コミット取消",
        detail: dedent(`
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
        `),
    },
    {
        command: "git rm",
        description: "Git管理下から削除",
        detail: dedent(`
            ### git rm
            Git管理下のファイルを削除し、その削除をステージングする<br />
            ファイル削除 + git add 削除状態を同時に行う

            #### 使用後何が起こる？
            1. 作業ディレクトリからファイル削除<br />
            2. Gitの追跡対象から削除<br />
            3. 削除状態がステージされる<br />
            4. コミットする git commit -m "不要ファイル削除"

            \`\`\`bash
            git rm ファイル名
            \`\`\`

            #### オプション
            \`\`\`bash
            git rm README_old.md           単一ファイル削除
            git rm a.txt b.txt c.txt       複数ファイル削除
            git rm -r src/old-components   フォルダ削除（再帰）
            git rm --cached ファイル名       ファイルは残してGit管理だけ外す

            \`\`\`

            #### 実行例
            \`\`\`bash
            git rm README_old.md
                rm 'README_old.md'
            git status(確認)
                Changes to be committed:
                deleted: README_old.md

            git rm -r src/old-components
                rm 'src/old-components/Button.tsx'
                rm 'src/old-components/Card.tsx'
            \`\`\`
            ⚠️ rm file.txtはファイル削除だけ <br />
            git rm file.txtは Git履歴上も削除対象
        `),
    },
    {
        command: "git mv",
        description: "ファイル名変更・移動",
        detail: dedent(`
            ### git mv
            Git管理下のファイルを「移動・名前変更」する<br />
            通常のmvと違い、ファイル移動 + Gitの変更追跡を自動でやる<br />
            履歴追跡を保ったままリネームできる

            \`\`\`bash
            git mv 旧パス 新パス
            \`\`\`

            #### 表示項目
            \`\`\`bash
            renamed: old.ts -> new.ts     Gitが「移動」と認識している状態
            \`\`\`

            #### オプション
            \`\`\`bash
            git mv index.ts app.ts                 ファイル名変更
            git mv src/utils.ts src/lib/utils.ts   フォルダ移動
            git mv -f old.ts new.ts                強制移動(既存ファイルがあっても上書き)
            \`\`\`

            #### 実行例
            \`\`\`bash
            git mv index.ts app.ts
            git status
                renamed: index.ts -> app.ts

            git mv src/utils.ts src/lib/utils.ts
                renamed: src/utils.ts -> src/lib/utils.ts
            \`\`\`
            ⚠️ rm file.txtはファイル削除だけ <br />
            git rm file.txtは Git履歴上も削除対象
        `),
    },
    {
        command: "git remote",
        description: "接続先情報確認",
        detail: dedent(`
            ### git remote
            リモートリポジトリ（GitHubなど外部サーバー）との接続情報を管理・確認する

            \`\`\`txt
            ローカルPC ←→ GitHub（リモート）
            GitHub側の情報を確認する
            \`\`\`

            \`\`\`bash
            git remote
            \`\`\`

            #### 表示項目
            \`\`\`bash
            origin      リモートの名前(デフォルトネーム)
            URL         接続先リポジトリ
            (fetch)     取得用（git pull / fetch）
            (push)      送信用（git push）
            \`\`\`

            #### オプション
            \`\`\`bash
            git remote -v                       詳細表示
            git remote add origin URL           リモート追加
            git remote remove origin            リモート削除
            git remote rename origin upstream   名前変更
            git remote set-url origin 新URL     URL変更
            git remote show origin              詳細情報表示
            \`\`\`

            #### 実行例
            \`\`\`bash
            git remote -v
                origin  https://github.com/user/repo.git (fetch)
                origin  https://github.com/user/repo.git (push)

            git remote show origin
                * remote origin
                Fetch URL: https://github.com/user/repo.git
                Push URL:  https://github.com/user/repo.git
                HEAD branch: main
                Remote branches:
                    main tracked
                Local branch configured for 'git pull': main merges with origin/main
            \`\`\`
        `),
    },
];