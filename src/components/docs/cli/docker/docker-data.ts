import dedent from "dedent";

export type CommandItem = {
    command: string;
    description: string;
    detail?: string;
};

export const dockerCommandColumns = [
    { key: "command", label: "コマンド", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const dockerCommandData: CommandItem[] = [
    {
        command: "docker ps",
        description: "起動中コンテナ一覧表示",
        detail: dedent(`
            ### docker ps
            現在実行中のDockerコンテナ一覧を表示する

            \`\`\`bash
            docker ps [オプション]
            \`\`\`

            #### 出力項目
            - CONTAINER ID   : コンテナの固有ID
            - IMAGE          : 使用しているイメージ
            - COMMAND        : コンテナ起動時に実行されたコマンド
            - CREATED        : 作成してからの経過時間
            - STATUS         : コンテナの状態（Up: 稼働中, Exited: 停止中）
            - PORTS          : 公開されているポート
            - NAMES          : コンテナ名

            #### オプション
            \`\`\`bash
            -a (--all)     : 停止中を含むすべてのコンテナを表示。
            -q (--quiet)   : コンテナIDのみを表示（スクリプト処理用）。
            -f (--filter)  : 条件でフィルタリング（例: status=exited 停止したコンテナのみ表示）
            -s (--size)    : 各コンテナのディスク使用量（サイズ）を表示。
            -n (--last)    : 直近に作成されたn個のコンテナを表示
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker ps -s
                CONTAINER ID                        : fe548bb2b169
                IMAGE                               : animora-frontend
                COMMAND                             : "docker-entrypoint.s…"
                CREATED                             : 4 days ago
                STATUS                              : Up 12 minutes
                PORTS:0.0.0.0:3000->3000/tcp, [::]  : 3000->3000/tcp
                NAMES                               : animora-app
                SIZE                                : 7.66kB (virtual 1.16GB)
            \`\`\`
        `),
    },
    {
        command: "docker images",
        description: "イメージ一覧表示",
        detail: dedent(`
            ### docker images
            イメージ一覧表示

            \`\`\`bash
            docker images [オプション] [REPOSITORY[:TAG]]
            \`\`\`

            #### 出力項目
            - IMAGE	        : イメージ名、タグ
            - ID	            : イメージ固有ID
            - DISK USAGE	    : ディスク使用量
            - CONTENT SIZE	: 中身レイヤーサイズ
            - EXTRA	        : 状態情報(U = In Use, 現在コンテナで使用中のイメージ)

            #### オプション
            \`\`\`bash
            -all (--all)   : 全てのイメージを表示（デフォルトは、中間イメージを非表示）
            --digests      : 値を表示 digest
            -f (--filter)  : 指定した状況に基づき、出力をフィルタ
            --format       : Go テンプレートを使い、イメージを整えて表示
            --no-trunc     : 出力を省略しない truncate
            -q (--quiet)   : イメージ ID のみ表示
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker image pull [イメージ名]        : Docker Hubなどのレジストリからイメージをダウンロード
            docker image rm [イメージID/名前]     : 指定したイメージを削除
            docker image prune : タグ付けされていない未使用のイメージを削除
            docker image inspect [イメージ名]     : イメージのJSON詳細情報を表示
            docker image build -t [名前] [場所]   : Dockerfileからイメージを作成

            docker images : イメージ一覧表示
                IMAGE           : animora-frontend:latest
                ID              : faa20043c4d3
                DISK USAGE      : 500MB
                CONTENT SIZE    : 0B
                EXTRA           : U

            docker images --no-trunc
                REPOSITORY      : animora-frontend
                TAG             : latest
                IMAGE ID        : sha256:faa20043c4d375df87bc8d94259417c1e1b5bfdfe77eab54f847519aa9a1e73f 4 days ago
                CREATED         : 4 days ago
                SIZE            : 500MB

            docker images --format "{{.ID}}: {{.Repository}}"
                faa20043c4d3: animora-frontend
                ea1f701cabab: daily-calendar-web
                c6bf9d786067: flea-market-php
            \`\`\`
        `),
    },
    {
        command: "docker exec",
        description: "起動中コンテナ内でコマンド実行",
        detail: dedent(`
            ### docker exec
            実行中のコンテナ内で新しいコマンドを実行する<br />
            コンテナの停止や再起動なしに、内部のシェル（bash/sh）に入ってデバッグしたり、ファイルを操作したりする

            \`\`\`bash
            docker exec [オプション] CONTAINER COMMAND [ARG...]
            \`\`\`

            #### オプション
            \`\`\`bash
            -it	  :  インタラクティブモード（標準入力を開く + TTYを有効化）
            -d	  :  デタッチモード（バックグラウンド実行）
            -u    :  ユーザー名	特定のユーザーで実行する
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker exec -it container-name /bin/sh
                → /app # 実行したいコマンドを入力

            docker exec -it コンテナ名 sh -c 'du -sh /app/* | sort -hr'
            Dockerコンテナ内の /appフォルダ配下の容量を、大きい順に確認
                892M /app/node_modules
                4.7M /app/public
                3.8M /app/src

            docker exec -it コンテナ名 sh -c "find /app/src -name '*.tsx' -type f -exec du -ch {} + | tail -1"
            Dockerコンテナ内の /app フォルダ配下の.tsxファイルの容量を確認
                2.8M    total
            \`\`\`
            ⚠️ コンテナが起動している必要がある<br />
            対話型シェルを開く場合は -it を忘れずに
        `),
    },
    {
        command: "docker logs",
        description: "コンテナログ表示",
        detail: dedent(`
            ### docker logs
            コンテナログ表示

            \`\`\`bash
            docker logs [オプション] CONTAINER
            \`\`\`

            #### オプション
            \`\`\`bash
            -f      : リアルタイム追跡
            --tail  : 行を指定して表示 docker logs --tail 100(最新の100行)
            -t      : タイムスタンプを付加
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker logs --since 30m <コンテナ名またはID>  # 30分前からのログ
            docker compose logs -f <サービス名> サービス名を省略すると全コンテナ表示
            \`\`\`
            ⚠️ コンテナを削除すると、そのログも消滅する
        `),
    },
    {
        command: "docker stop",
        description: "コンテナ停止",
        detail: dedent(`
            ### docker stop
            コンテナ停止

            \`\`\`bash
            docker stop [オプション] CONTAINER [CONTAINER...]
            \`\`\`

            #### オプション
            \`\`\`bash
            -t (--time) : 強制的に停止するまで、待機する秒数 (デフォルト10秒)
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker stop $(docker ps -q)                    稼働中のコンテナをすべて停止
            docker stop a1b2c3d4e5f6                       コンテナIDで停止
            docker stop container1 container2 container3   複数コンテナをまとめて停止
            docker stop -t 10 my-container                 停止まで10秒待機して終了

            * docker kill <コンテナID/名前>                  コンテナを強制停止(SIGKILLシグナルを直接送信し、直ちに強制終了)
            * docker compose down                          Docker Compose で起動したコンテナを停止
            \`\`\`
        `),
    },
    {
        command: "docker start",
        description: "停止中コンテナ起動",
        detail: dedent(`
            ### docker start
            停止中コンテナ起動

            \`\`\`bash
            docker start [オプション] CONTAINER [CONTAINER...]
            \`\`\`

            #### オプション
            \`\`\`bash
            -a : コンテナを起動し、ログをアタッチして操作する(コンテナの標準出力(stdout)・標準エラー出力(stderr)を接続し、ログを表示する)
            -i : インタラクティブモードで起動する (コンテナ内の標準入力を開いたまま起動)
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker start my_container        停止中のコンテナを起動
            docker start web db redis        複数コンテナをまとめて起動
            docker start a1b2c3d4e5f6        コンテナIDで起動
            docker start -a my-container     起動してログをアタッチ表示
            docker start -ai my-container    起動して標準入力も接続
            docker start $(docker ps -aq)    停止中の全コンテナを一括起動
            \`\`\`
        `),
    },
    {
        command: "docker run",
        description: "新しいコンテナ作成して起動",
        detail: dedent(`
            ### docker run
            新しいコンテナ作成して起動<br />
            docker create → docker startを実行

            \`\`\`bash
            docker run [オプション] IMAGE [COMMAND] [ARG...]
            \`\`\`

            #### オプション
            \`\`\`bash
            -d       : バックグラウンドで起動
            -p       : ポートマッピング
            --name   : コンテナに名前を付ける
            --rm     : 終了時にコンテナを自動削除
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker run -d -p 8080:80 nginx （ホストの8080をコンテナの80に接続）
            docker run --name my-web -d nginx
            docker run --rm nginx
            \`\`\`
        `),
    },
    {
        command: "docker restart",
        description: "コンテナ再起動",
        detail: dedent(`
            ### docker restart
            コンテナを再起動 (停止→起動を自動実行)

            \`\`\`bash
            docker restart [オプション] CONTAINER [CONTAINER...]
            \`\`\`

            #### オプション
            \`\`\`bash
            -t (timeout): 再起動までの待ち時間を秒単位で指定 (デフォルトは10秒)
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker restart a1b2c3d4e5f6          コンテナIDで再起動
            docker restart web db redis          複数コンテナをまとめて再起動
            docker restart -t 10 my-container    停止猶予10秒を与えて再起動
            docker restart nginx-container       実行中・停止中に関係なく再起動要求

            * docker compose restart             Dockerコンテナ全体を再起動する
            \`\`\`
            ⚠️ docker restartは、コンテナが実行中であればそのコンテナを再起動。停止中の場合は起動
        `),
    },
    {
        command: "docker rm",
        description: "コンテナ削除",
        detail: dedent(`
            ### docker rm
            停止中のDockerコンテナを削除

            \`\`\`bash
            docker rm [オプション] CONTAINER [CONTAINER...]
            \`\`\`

            #### オプション
            \`\`\`bash
            -f (--force)   : 実行中のコンテナを強制削除
            -v (--volumes) : コンテナに関連するボリュームも削除
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker rm my-nginx                 停止中コンテナを1つ削除
            docker rm web db redis             複数コンテナをまとめて削除
            docker rm -f my-app                強制削除（起動中コンテナも停止して削除）
            docker rm -v [コンテナIDまたは名前]   コンテナに関連するボリュームも削除
            docker rm $(docker ps -a -q)       停止中のコンテナを一括削除
            \`\`\`

            存在しないコンテナを削除しようとした場合
            \`\`\`bash
            Error response from daemon: No such container: test-container
            \`\`\`
            ⚠️ 実行中のコンテナはそのままでは削除できない。<br />
            docker stop するか、-f オプションを使用<br />
        `),
    },
    {
        command: "docker rmi",
        description: "イメージ削除",
        detail: dedent(`
            ### docker rmi
            ローカルのDockerホストから1つまたは複数のイメージを削除

            \`\`\`bash
            docker rmi [オプション] IMAGE [IMAGE...]
            \`\`\`

            #### オプション
            \`\`\`bash
            -f (--force)   : コンテナで使用中のイメージでも強制的に削除
            -v (--volumes) : コンテナに関連するボリュームも削除
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker rmi nginx
                Untagged: nginx:latest
                Deleted: sha256:605c77e624dd...

            docker rmi a1b2c3d4e5f6 IMAGE ID 指定で削除
                Untagged: myapp:v1
                Deleted: sha256:a1b2c3d4e5f6...

            docker rmi -f [イメージIDまたは名前]
            docker rmi <image1> <image2>   複数削除
            docker image prune             一括削除（使われていないイメージ）
            \`\`\`

            使用中コンテナがある場合
            \`\`\`bash
            Error response from daemon:
            conflict: unable to remove repository reference "コンテナ名"
            (container コンテナID is using its referenced image)
            \`\`\`

            ⚠️ 実行中のコンテナで使用されているイメージは、-f (force) オプションを付けないと削除できない。<br />
            削除されたか確認するには docker images コマンドを使用
        `),
    },
    {
        command: "docker system df",
        description: "Docker使用容量確認",
        detail: dedent(`
            ### docker system df
            Dockerデーモンが使用しているディスク容量（イメージ、コンテナ、ボリューム、ビルドキャッシュ）の総計を表示する

            \`\`\`bash
            docker system df [オプション]
            \`\`\`

            #### 表示項目
            - Images          : イメージが使用している容量
            - Containers      : 実行中・停止中コンテナの容量
            - Local Volumes   : コンテナにマウントされたボリュームの容量
            - Build Cache     : ビルドキャッシュが使用している容量

            #### オプション
            \`\`\`bash
            -v              : 各イメージやボリュームごとの容量を確認
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker system df
                TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
                Images          11        11        7.068GB   0B (0%)
                Containers      18        1         19.4MB    19.4MB (99%)
                Local Volumes   6         5         2.529GB   900.5MB (35%)
                Build Cache     11        0         1.027GB   5.928MB
            \`\`\`
        `),
    },
    {
        command: "docker system prune",
        description: "不要データ削除",
        detail: dedent(`
            ### docker system prune
            不要データ(停止中のコンテナ、未使用のネットワーク、タグ無し（dangling）のイメージ、およびビルドキャッシュ)を安全に一括削除<br />
            「未使用」のものだけを消すため、使用中のコンテナやイメージは残る

            \`\`\`bash
            docker system prune [オプション]
            \`\`\`

            #### オプション
            \`\`\`bash
            -a        : 使われていないイメージすべてを削除
            -f        : 確認プロンプトを非表示
            --volumes : ボリュームも削除
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker image prune -a -f   未使用のイメージ削除
                Deleted Images:
                deleted: sha256:4f2c8d1e7b3a...
                deleted: sha256:8a71d2b9c6ef...

                Total reclaimed space: 542.3MB (解放できたディスク容量)

            docker image prune -a --filter "until=24h"   24時間以上前の未使用イメージだけ削除
            docker volume prune -f                       未使用のボリューム削除
            docker builder prune -a -f                   dockerのキャッシュを削除
            docker network prune -f                      未使用のネットワークを削除
            docker builder prune -a -f                   dockerのキャッシュを削除
            \`\`\`
            ⚠️ 削除されたデータは復元できない。必要なイメージや、停止中だけど後で使いたいコンテナが削除されないよう、使用前にdocker ps -aやdocker imagesで状況を確認
        `),
    },
    {
        command: "docker volume ls",
        description: "Volume一覧表示",
        detail: dedent(`
            ### docker volume ls
            Dockerホスト上で作成・管理されているすべてのボリュームを一覧表示

            \`\`\`bash
            docker volume ls [オプション]
            \`\`\`

            #### 表示項目
            - DRIVER        : ボリュームドライバー（通常は local）
            - VOLUME NAME   : ボリューム名（コンテナで使用しているデータ名）

            #### オプション
            \`\`\`bash
            -q        : 名前のみ表示
            -f        : フィルター(例：-f dangling=true 未使用ボリューム（dangling）の抽出)
            --volumes : ボリュームも削除
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker volume ls -q
            docker volume ls -f dangling=true
            docker volume ls -f label=label_name (ラベルで絞り込み)
            docker volume inspect <ボリューム名> (ボリューム詳細)
            docker volume rm <ボリューム名> (削除)
            \`\`\`
            ⚠️ 削除されたボリュームは復元できない
        `),
    },
    {
        command: "docker network ls",
        description: "Network一覧表示",
        detail: dedent(`
            ### docker network ls
            Dockerデーモンが管理するネットワークを一覧表示

            \`\`\`bash
            docker network ls [オプション]
            \`\`\`

            #### 表示項目
            \`\`\`txt
            NETWORK ID   : ネットワーク固有ID

            NAME         : ネットワーク名
                bridge        (Docker標準ネットワーク)
                host          (ホストPCと共有)
                none          (通信なし)
                myapp_default (docker compose自動生成)

            DRIVER       : 通信方式
                bridge      (コンテナ同士を同じLANのようにつなぐ)
                host        (コンテナがPC本体のネットワークを直接使う)
                null / none	(ネットワーク接続なし)
                overlay	    (複数サーバー間通信)

            SCOPE (local, swarm) : 適用範囲
                local  (このPC内だけで有効)
                swarm  (複数サーバー共有ネットワーク)
            \`\`\`

            #### オプション
            \`\`\`bash
            -q (--quiet)     : IDのみを表示
            --no-trunc       : IDを省略せずに表示
            -f (--filter)    : フィルター機能
            --format         : フォーマット指定
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker network ls -f driver=bridge       ドライバーがbridgeのネットワークのみ表示
            docker network ls -f type=custom         customで作成したネットワークのみ表示
            docker network ls --format "{{.Name}}"   名前だけを表示
            docker network inspect network_name      詳細なネットワーク情報を表示
            \`\`\`
        `),
    },
    {
        command: "docker stats",
        description: "Dockerコンテナのリアルタイム監視",
        detail: dedent(`
            ### docker stats
            DockerコンテナのCPU・メモリ・通信量などをリアルタイムに確認できる

            \`\`\`bash
            docker stats [OPTIONS] [CONTAINER...]
            \`\`\`

            #### 使用場面
            - メモリ食っているコンテナ
            - CPU暴走しているコンテナ
            - 通信中のコンテナ
            - プロセス数が多いコンテナ

            #### 表示項目
            \`\`\`txt
            CONTAINER ID          コンテナ識別ID
            NAME                  コンテナ名
            CPU %                 CPU使用率（ホスト上の CPU とメモリを、コンテナがどれだけ使っているか）
            MEM USAGE / LIMIT     使用中メモリ / 上限
            MEM %                 メモリ使用率
            NET I/O               ネット送受信量(送信 / 受信)
            BLOCK I/O             ディスク読み書き量(ログ・ビルド・キャッシュなど)
            PIDS                  プロセス数(Node / worker / shellなど)
            \`\`\`

            #### オプション
            \`\`\`bash
            docker stats --no-stream      1回だけ表示して終了
            docker stats -a               全てのコンテナを表示（デフォルトは実行中のみ表示）
            docker stats --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}"
            表示形式カスタム
            \`\`\`

            #### 実行例
            \`\`\`bash
            docker stats animora-app     特定コンテナだけ監視
            docker stats --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}"
                NAME         CPU %   MEM USAGE
                animora-app  5.2%    2.7GiB / 4GiB

            docker stats
                CONTAINER ID   NAME          CPU %   MEM USAGE / LIMIT   MEM %   NET I/O         BLOCK I/O       PIDS
                fb6bd7cb1896   animora-app   5.12%   2.7GiB / 4.0GiB     67.5%   12MB / 5MB      80MB / 30MB     58
            \`\`\`
        `),
    },
];