import dedent from "dedent";


export type CommandItem = {
    command: string;
    description: string;
    options: string;
    example: string;
    detail?: string;
};

export const dockerComposeColumns = [
    { key: "command", label: "コマンド", className: "font-mono" },
    { key: "description", label: "説明" },
    { key: "options", label: "主なオプション" },
    { key: "example", label: "使用例", className: "font-mono text-xs" },
];

export const dockerComposeData: CommandItem[] = [
    {
        command: "docker compose up",
        description: "compose.yml からコンテナ作成・起動",
        options: "-d（バックグラウンド）\n--build（再buildして起動）",
        example: "docker compose up -d",
        detail: dedent(`
            ### docker compose up
            docker-compose.ymlファイルに基づいて複数のコンテナを一括で作成・起動・ネットワーク接続<br />
            デフォルトでコンテナをフォアグラウンド（ログが表示される状態）で起動、Ctrl+Cで停止

            \`\`\`bash
            docker compose up [オプション] [--scale サービス=数...] [サービス...]
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker compose up -d               : コンテナをバックグラウンド（デタッチドモード）で実行
            docker compose up -d --build       : イメージの再ビルド(Dockerfileなどを変更した際、イメージを再ビルドしてから起動)
            docker compose up --force-recreate : 強制的な再作成(設定変更を強制的に反映させたい場合、既存のコンテナを破棄して再作成)
            \`\`\`

            ⚠️ docker-compose.ymlで定義したサービス（コンテナ）が存在しない場合は新規作成し、すでに存在していても設定が変更されていれば再作成
        `),
    },
    {
        command: "docker compose down",
        description: "compose環境停止・削除",
        options: "-v（volume削除）\n--rmi all（image削除）",
        example: "docker compose down -v",
        detail:dedent(`
            ### docker compose down
            Docker Composeで起動したコンテナ、ネットワークを停止・削除し、環境をクリーンにする<br />
            デフォルトでコンテナとネットワークが削除されるが、ボリュームは保持される

            \`\`\`bash
            docker compose down [オプション]
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker compose down -v                : 名前付きボリュームや匿名ボリュームも含めて削除
            docker compose down --rmi local       : サービスで定義されたイメージを削除
            docker compose down --remove-orphans  : ymlファイルから削除されたサービスのコンテナもまとめて削除
            \`\`\`

            ⚠️ 一時的にコンテナを止めたい場合は docker compose stop
        `)
    },
    {
        command: "docker compose ps",
        description: "compose管理コンテナ一覧表示",
        options: "-a（停止中も表示）",
        example: "docker compose ps",
        detail: dedent(`
            ### docker compose ps
            docker-compose.ymlファイルで定義されたサービス（コンテナ）の現在の状態、コマンド、ポートマッピングを一覧表示する<br />
            起動状態・名前・ポート・いつ作られたか などを確認できる

            \`\`\`bash
            docker compose ps [オプション] [サービス...]
            \`\`\`

            ---
            #### 表示項目
            - NAME	    コンテナ名<br />
            - IMAGE	    使用イメージ<br />
            - COMMAND 	起動コマンド<br />
            - SERVICE 	composeのサービス名<br />
            - CREATED	    作成時期<br />
            - STATUS	    起動してから7秒経過<br />
            - PORTS ポート公開<br />
                (例)0.0.0.0:8025->8025/tcp<br />
                - 0.0.0.0 = PC全体からアクセス可能<br />
                - 8025 左側 = ホストPC側ポート<br />
                - 8025 右側 = コンテナ側ポート<br />
                - tcp = 通信方式

            ---
            #### 実行例
            \`\`\`bash
            docker compose ps	              起動中一覧
                flea-market-mailhog   mailhog/MailHog   "MailHog"                mail    12 months ago   Up 7 seconds   1025/tcp, 0.0.0.0:8025->8025/tcp
                flea-market-mysql-1   mysql:8.0.26.     "docker-entrypoint.s…"   mysql   12 months ago   Up 7 seconds   3306/tcp, 33060/tcp

            docker compose ps -a	          停止中も含め全部表示
            docker compose ps --services	  サービス名だけ表示
            docker compose ps -q	          Container IDだけ表示
            docker compose ps app	          特定サービスのみ表示
            \`\`\`
        `)
    },
    {
        command: "docker compose logs",
        description: "全サービスのログ表示",
        options: "-f（リアルタイム）\n--tail=100（末尾100行）",
        example: "docker compose logs -f",
        detail: dedent(`
            ### docker compose logs
            Docker Compose で起動している各サービスのログ（出力内容）を見る<br />
            アプリのエラー確認、起動確認、API通信確認などでかなり使う

            できること
            - 全サービスのログ表示
            - エラー確認
            - 起動成功確認
            - console.log確認
            - serverログ確認

            \`\`\`bash
            docker compose logs [オプション] [サービス...]
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker compose logs -f          リアルタイム監視 follow
                例 : app-1 | ✓ Ready in 2.3s
                    app-1 | GET / 200

            docker compose logs --tail=100  最新100行だけ見る
            docker compose logs app         特定サービスだけ見る
            docker compose logs app db      複数指定
            docker compose logs --no-color  ログ色なし

            docker compose logs -t          タイムスタンプ付き
                例 : 2026-04-21T10:15:22 app-1 | Server started
            \`\`\`

            ⚠️ logs終了方法 Ctrl + C
            コンテナ自体は止まらない
        `)
    },
    {
        command: "docker compose exec",
        description: "起動中コンテナ内でコマンド実行",
        options: "-it（対話モード）",
        example: "docker compose exec app bash",
        detail: dedent(`
            ### docker compose exec
            起動中コンテナ内でコマンド実行

            \`\`\`bash
            docker compose exec [オプション] [-e KEY=VAL...] サービス コマンド [引数...]
            \`\`\`

            #### オプション
            \`\`\`bash
            -d (--detach)  : バックグラウンドでコマンドを実行
            -e (--env)     : 【API 1.25+】環境変数を指定
            --index        : サービスにインスタンスが複数ある場合の、コンテナのインデックス（デフォルト： 1 ）
            -u (--user)    : 特定のユーザーで実行する
            -w (--workdir) : 【API 1.35+】コンテナ内の作業ディレクトリ
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker compose exec -it php bash
                root@74f67a116b18:/var/www# コマンドを入力(php artisan ~)
            \`\`\`

            実行後exitで抜ける
        `)
    },
    {
        command: "docker compose run",
        description: "一時コンテナ起動してコマンド実行",
        options: "--rm（終了後削除）",
        example: "docker compose run --rm app npm install",
        detail: dedent(`
            ### docker compose run
            一時的なコンテナを起動して指定コマンドを実行する

            よく使う用途
            - npm install
            - artisan migrate
            - rails db:migrate
            - python script.py
            - bashで中に入る
            - テスト実行
            - バッチ処理

            \`\`\`bash
            docker compose run [オプション] [-v ボリューム...] [-p ポート...] [-e KEY=VAL...] [-l KEY=VALUE...] サービス [コマンド] [引数...]
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker compose run app npm install
                run	       一時コンテナ起動
                app	        サービス名
                npm install	実行コマンド

            docker compose run --rm app npm test               : 終了後コンテナ削除
            docker compose run --rm -it app bash               : 対話モード
            docker compose run -p 3000:3000 app npm run dev    : 個別ポート指定
            docker compose run --no-deps app bash              : 依存サービス起動しない
            docker compose run --service-ports app npm run dev : compose.yml の ports を有効化(通常runではポート公開されない)
            \`\`\`

            #### 実行後の表示例
            \`\`\`bash
            [+] Running 1/1
            ✔ Container project-db-1 Running

            added 120 packages in 3s
            \`\`\`

            ⚠️  docker compose up	 常駐アプリ起動
                docker compose run	 単発コマンド実行
        `)
    },
    {
        command: "docker compose start",
        description: "停止中サービス起動",
        options: "サービス名指定可能",
        example: "docker compose start app",
        detail: dedent(`
            ### docker compose start
            停止しているコンテナを再起動する

            up     =  作成して起動<br />
            stop   =  停止<br />
            start  =  停止済みを再開<br />
            down   =  削除<br />

            #### 使う場面
            - 一度停止した開発環境を再開したい
            - DBコンテナを再起動したい
            - compose環境を素早く戻したい
            - up より速く再開したい

            \`\`\`bash
            docker compose start [サービス名]
            \`\`\`

            #### 表示項目
            - Running 2/2 :  2個対象で2個成功
            - Started :  起動完了
            - Starting :  起動中
            - Error	:  エラー発生

            #### 実行例
            \`\`\`bash
            docker compose start   全サービス起動
                [+] Running 2/2
                ✔ Container my-app     Started
                ✔ Container my-db      Started

            docker compose start app   特定サービスのみ起動
                [+] Running 1/1
                ✔ Container my-app Started

            docker compose start app db   複数サービス指定

            docker compose start --help   ヘルプ表示
            docker compose start -q     quiet mode（出力を減らす）

            一時停止して再開
                docker compose stop
                docker compose start

            作り直したい
                docker compose down
                docker compose up -d
            \`\`\`

            ⚠️ コンテナ削除済み(docker compose down)なら使えない
            作り直しが必要
        `)
    },
    {
        command: "docker compose stop",
        description: "サービス停止",
        options: "サービス名指定可能",
        example: "docker compose stop app",
        detail: dedent(`
            ### docker compose stop
            Docker Compose で起動中のサービス（コンテナ）を停止する

            - コンテナ、イメージ、設定は残る
            - volume も残る
            - network も残る
            - 次回 start ですぐ再開可能

            docker compose stop	= 停止<br />
            docker compose down	= 停止 ＋ 削除

            \`\`\`bash
            docker compose stop [オプション] [サービス...]
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker compose stop 全サービス停止
                [+] Stopping 2/2 (2個のコンテナ停止処理)
                ✔ Container my-app   Stopped (成功 app停止完了)
                ✔ Container my-db    Stopped (成功 db停止完了)

            docker compose stop app 特定サービスのみ停止
            docker compose stop app db 複数サービス停止
            docker compose stop -t 30 タイムアウト指定
                Node.js サーバー終了処理
                DB保存処理
                ログ書き込み
                バックグラウンドジョブ終了

                → すぐ kill せず安全停止できる
            \`\`\`
        `)
    },
    {
        command: "docker compose restart",
        description: "サービス再起動",
        options: "サービス名指定可能",
        example: "docker compose restart app",
        detail: dedent(`
            ### docker compose restart
            Docker Compose で管理しているサービス（コンテナ）を再起動する<br />
            stop (停止) → start（起動）を自動で行う

            - 設定変更後に反映したい
            - 一時的に不調なので再起動したい
            - 接続エラーをリセットしたい
            - 開発中にアプリだけ再起動したい

            \`\`\`bash
            docker compose restart [オプション] [サービス...]
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker compose restart           全サービス再起動
                [+] Restarting 3/3
                ✔ Container myapp-db       Started
                ✔ Container myapp-app      Started
                ✔ Container myapp-nginx    Started

            docker compose restart app app   サービスだけ再起動
            docker compose restart app db    複数サービス再起動
            docker compose restart -t 5     停止時の待機秒数を指定
                [+] Restarting 1/1
                ✔ Container animora-app  Started
                    Restarting	再起動処理中
                    Started	起動完了
            \`\`\`

            ⚠️ コード変更だけなら restart してもbuild内容は更新されない<br />
            Dockerfile変更時は ： docker compose up -d --build

        `)
    },
    {
        command: "docker compose build",
        description: "Dockerfile から image 作成",
        options: "--no-cache（キャッシュ無効）",
        example: "docker compose build",
        detail: dedent(`
            ### docker compose build
            Dockerfile をもとに image（イメージ）を作成する<br />
            compose.yml に定義された全サービスを build

            - Dockerfile を変更した
            - package.json を変更した
            - npm install 内容を更新した
            - 初回セットアップ
            - キャッシュなしで作り直したい

            \`\`\`bash
            docker compose build [オプション] [--build-arg key=val...] [サービス...]
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker compose build app.                特定サービスだけ build
            docker compose build --no-cache          キャッシュ使わず完全再build
            docker compose build --pull              最新base image取得

            docker compose build --progress=plain    詳細ログ表示
                [+] Building 12.3s (10/10) FINISHED
                    => [app internal] load build definition from Dockerfile (Dockerfile読み込み)
                    => [app internal] load .dockerignore (除外設定読み込み)
                    => [app 1/6] FROM node:20-alpine     (ベースimage取得)
                    => [app 2/6] WORKDIR /app            (作業フォルダ設定)
                    => [app 3/6] COPY package.json .
                    => [app 4/6] RUN npm install         (コマンド実行)
                    => [app 5/6] COPY . .                (ファイルコピー)
                    => [app 6/6] RUN npm run build
                    => exporting to image                (image化)
                    => naming to animora-app             (image名付与)

            build後に起動する流れ
                docker compose build
                docker compose up -d
            一発でやるなら
                docker compose up -d --build

            package追加後
                npm install axios
                docker compose build app
            \`\`\`

            #### ⚠️ よくあるエラー表示
            \`\`\`bash
            RUN npm install
            npm ERR!
            → npm install失敗(package.json / lockfile確認)

            COPY failed: file not found
            → Copy失敗(パス間違い)

            no space left on device
            → Docker容量不足(docker system prune -a)
            \`\`\`
        `)
    },
    {
        command: "docker compose pull",
        description: "image 最新取得",
        options: "サービス名指定可能",
        example: "docker compose pull",
        detail: dedent(`
            ### docker compose pull
            compose.ymlに書かれている 各サービスのDocker imageを取得・更新する<br />
            コンテナは起動しないがimageだけ最新取得する

            - チーム開発で最新image取得
            - 本番デプロイ前更新
            - docker compose up 前準備
            - imageキャッシュ更新

            \`\`\`bash
            docker compose pull [オプション] [サービス...]
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker compose pull
                [+] Pulling 3/3
                ✔ db Pulled
                ✔ redis Pulled
                ✔ app Pulled

                Pull complete           (image取得完了)
                Already exists          (すでに同じlayerあり（再DL不要）)
                Downloading [=======> ] (ダウンロード中)
                Extracting              (展開中)
                app Pulled              (サービス単位で完了)

            docker compose pull app                      特定サービスだけpull
            docker compose pull --parallel               複数imageを同時取得（高速化）
            docker compose pull --ignore-pull-failures   一部失敗しても他を続行
            docker compose pull --policy always          毎回確認して取得

            最新image取得して再起動
                docker compose pull
                docker compose up -d
            \`\`\`

            ⚠️ pullしてもコンテナは変わらない<br />
            取得しただけで、今動いてるコンテナは古いまま
        `)
    },
    {
        command: "docker compose config",
        description: "compose設定確認（展開済み表示）",
        options: "構文確認にも便利",
        example: "docker compose config",
        detail: dedent(`
            ### docker compose config
            Docker Compose が実際に読み込んだ完成形として表示する

            - 設定確認
            - 変数展開確認
            - 構文チェック
            - 最終的なcompose内容確認

            = docker compose.yml の答え合わせ

            \`\`\`bash
            docker compose config [オプション]
            \`\`\`

            ---
            #### 表示される主な項目
            - name : プロジェクト名
            - services : コンテナ設定
            - build : Dockerfile build設定
            - image : 使用image
            - ports : ポート公開
            - volumes : データ保存設定
            - environment : 環境変数
            - depends_on : 起動順依存
            - networks : 通信設定

            ---
            #### 実行例
            \`\`\`bash
            docker compose config
                name: myapp

                services:
                    app:
                        build:
                        context: /Users/me/project
                        ports:
                        - mode: ingress
                            target: 3000
                            published: "3000"

                    db:
                        image: postgres:16
                        environment:
                        POSTGRES_DB: sample

                networks:
                    default:
                        name: myapp_default

            docker compose config --services     サービス名だけ表示
                app
                db
                nginx

            docker compose config --volumes      volume名一覧
                postgres_data

            docker compose config --images       使うimage一覧
                node:20
                postgres:16
                nginx:latest

            docker compose config --profiles     profile確認
            docker compose config -q             構文チェックのみ（エラー時だけ表示）

            起動前の確認
                docker compose config
                docker compose up -d

            サービス名確認(app 名確認に便利)
                docker compose config --services

            .env確認
                docker compose config
            \`\`\`

            ---
            #### エラー例
            \`\`\`bash
            compose.ymlミス
                services.app must be a mapping

            .env不足
                variable is not set
            \`\`\`
        `)
    },
    {
        command: "docker compose top",
        description: "コンテナ内プロセス表示",
        options: "サービス名指定可能",
        example: "docker compose top",
        detail: dedent(`
            ### docker compose top
            Composeで起動しているコンテナ内のプロセス一覧を見る<br />
            そのコンテナの中で今なにが動いているか確認する

            \`\`\`bash
            docker compose top [SERVICE...]
            \`\`\`

            #### 表示される項目
            - SERVICE : composeのサービス名
            - "#" : コンテナ番号
            - UID : 実行ユーザー
            - PID : プロセスID
            - PPID : 親プロセスID
            - C : CPU使用率目安
            - STIME	: 起動時刻
            - TTY : ターミナル有無(?はDockerバックグラウンド起動)
            - TIME : 累積CPU時間
            - CMD : 実行コマンド

            #### 実行例
            \`\`\`bash
            docker compose top app 特定サービスだけ見る
                SERVICE   #   UID   PID   PPID  C   STIME  TTY  TIME      CMD
                frontend  1   root  1664  1642  0   11:37  ?    00:00:00  npm run dev
                frontend  1   root  1707  1664  0   11:37  ?    00:00:00  node /app/node_modules/.bin/next dev
                frontend  1   root  1718  1707  50  11:37  ?    00:35:05  next-server (v14.2.35)
            \`\`\`

            ⚠️ 停止中コンテナは表示されない
        `)
    },
    {
        command: "docker compose rm",
        description: "停止中サービス削除",
        options: "-f（確認なし）",
        example: "docker compose rm -f",
        detail: dedent(`
            ### docker compose rm
            停止中の compose コンテナを削除する

            #### 削除対象
            - 停止済みコンテナ
            - composeで作成されたサービスコンテナ

            #### 削除されないもの
            - image
            - volume（通常）
            - network（通常）
            - 起動中コンテナ

            \`\`\`bash
            docker compose rm rm [SERVICE...]
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker compose rm
                Going to remove project_app_1, project_db_1
                Are you sure? [yN]
                → yで実行すると削除される

            docker compose rm -f.        確認なしで削除
                Removing project_app_1 ... done
                Removing project_db_1 ... done

            docker compose rm -s         起動中なら停止してから削除
            docker compose rm -v         volume も削除(匿名volumeも消える)
            docker compose rm -fsv       f (確認なし), s (停止して削除), v (volume削除)

            実行後の確認方法
                docker compose ps
                    NAME   IMAGE   COMMAND   SERVICE   STATUS   PORTS

            → 何も出なければ削除完了

            buildし直したい時
                docker compose rm -f
                docker compose up --build

            壊れたコンテナを作り直す
                docker compose stop
                docker compose rm -f
                docker compose up -d
            \`\`\`

            ⚠️ 起動中コンテナはそのままでは削除不可
            \`\`\`bash
            You cannot remove a running container
            \`\`\`
        `)
    },
    {
        command: "docker compose version",
        description: "Docker Compose バージョン情報を表示",
        options: "-f（出力フォーマット）\n--short（Compose のバージョン番号のみ表示）",
        example: "docker compose version -v",
        detail: dedent(`
            ### docker compose version
            Docker Compose バージョン情報を表示<br />
            現在インストールされている Compose の種類・バージョンを確認できる

            \`\`\`bash
            docker compose version
            \`\`\`

            #### よく使う場面
            - Compose が使えるか確認したい
            - v1 / v2 の違い確認
            - エラー時に環境確認
            - チーム開発でバージョン差異確認
            - ドキュメント通りの機能が使えるか確認

            #### 実行例
            \`\`\`bash
            docker compose version
                Docker Compose version v2.27.0
            \`\`\`

            #### v1 と v2 の違い
            \`\`\`bash
            docker-compose version   # 旧形式(v1)
                docker-compose.ymlファイルにバージョン記載(例 : version: "3.9")
                docker-composeコマンド

            docker compose version   # 新形式(v2 推奨)
                docker-compose.ymlファイルにバージョン不要
                docker composeコマンド
            \`\`\`
        `)
    },
];