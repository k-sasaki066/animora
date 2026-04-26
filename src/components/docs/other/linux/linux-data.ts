import dedent from "dedent";

export type CommandItem = {
    command: string;
    description: string;
    detail?: string;
};

export const linuxColumns = [
    { key: "command", label: "ファイル名", className: "font-mono" },
    { key: "description", label: "保存される情報 / 用途" },
];

export const linuxData: CommandItem[] = [
    {
        command: "/bin",
        description:
            "基本コマンド実行ファイル",
        detail: dedent(`
            Linuxを操作する最低限コマンド群

            \`\`\`bash
            ls
            cp
            mv
            rm
            cat
            sh
            bash
            \`\`\`
        `),
    },
    {
        command: "/boot",
        description:
            "OS起動用ファイル",
        detail: dedent(`
            - カーネル
            - bootloader関連

            Dockerコンテナではほぼ使わない
        `),
    },
    {
        command: "/dev",
        description:
            "デバイスファイル(仮想デバイス情報)",
        detail: dedent(`
            Linuxではデバイスもファイルとして扱う
            \`\`\`txt
            /dev/null
            /dev/tty
            /dev/random
            \`\`\`
        `),
    },
    {
        command: "/etc",
        description:
            "各種サービス設定ファイル",
        detail: dedent(`
            Linuxではデバイスもファイルとして扱う
            nginx.conf, php.ini, mysql設定, hosts, timezone など
            \`\`\`txt
            /etc/hosts
            /etc/resolv.conf
            /etc/passwd
            /etc/nginx/nginx.conf
            \`\`\`

            - DNS設定
            - ユーザー情報
            - アプリ設定
        `),
    },
    {
        command: "/home",
        description:
            "一般ユーザーのホームディレクトリ",
        detail: dedent(`
            Ubuntuなら通常ユーザーがここに入る
            \`\`\`txt
            /home/node
            /home/appuser
            \`\`\`
        `),
    },
    {
        command: "/root",
        description:
            "rootユーザー専用ホームディレクトリ",
        detail: dedent(`
            管理者ログイン時の作業場所
            \`\`\`txt
            /root
            \`\`\`
        `),
    },
    {
        command: "/lib /lib64",
        description:
            "共有ライブラリ",
        detail: dedent(`
            プログラム実行に必要な部品<br />
            lib64は64bit環境向け共有ライブラリ
            \`\`\`txt
            Cライブラリ
            glibc
            .so ファイル
            \`\`\`
        `),
    },
    {
        command: "/media",
        description:
            "外部メディア自動マウント先",
        detail: dedent(`
            USBやCDなど
            Dockerではほぼ未使用
        `),
    },
    {
        command: "/mnt",
        description:
            "一時的な手動マウント先",
        detail: dedent(`
            一時的に別ディスクを接続する場所<br />
            Dockerでは volume確認などで使う場合あり
        `),
    },
    {
        command: "/opt",
        description:
            "追加アプリ置き場",
        detail: dedent(`
            手動インストールソフト
            \`\`\`txt
            /opt/google
            /opt/custom-app
            \`\`\`
        `),
    },
    {
        command: "/proc",
        description:
            "システム情報（仮想ファイル）",
        detail: dedent(`
            CPU・メモリ・PID情報<br />
            docker stats や top の元情報
            \`\`\`txt
            /proc/cpuinfo
            /proc/meminfo
            /proc/1/cmdline
            \`\`\`

            メモリ確認
            \`\`\`bash
            cat /proc/meminfo
            top
            \`\`\`
        `),
    },
    {
        command: "/run",
        description:
            "起動中プロセスの一時情報",
        detail: dedent(`
            PID・socketなど<br />
            再起動で消えることが多い
            \`\`\`txt
            /run/nginx.pid
            /run/secrets
            \`\`\`
        `),
    },
    {
        command: "/srv",
        description:
            "サービス提供データ",
        detail: dedent(`
            Web公開ファイルなど
            \`\`\`txt
            /srv/www
            \`\`\`
        `),
    },
    {
        command: "/sys",
        description:
            "Linuxカーネル・デバイス制御情報",
        detail: dedent(`
            Linux内部制御<br />
            Docker制限値確認にも使われる
            \`\`\`txt
            /sys/class
            /sys/fs/cgroup
            \`\`\`
        `),
    },
    {
        command: "/tmp",
        description:
            "一時ファイル保存先",
        detail: dedent(`
            誰でも使えるテンポラリ領域
            ビルドキャッシュ、アップロード一時保存、セッション一時生成など
            \`\`\`txt
            /tmp/cache
            /tmp/upload.tmp
            \`\`\`
        `),
    },
    {
        command: "/usr",
        description:
            "ユーザー向けアプリ本体",
        detail: dedent(`
            Node.js, npm, PHP, Composer, bash など実行プログラム本体<br />
            Dockerイメージ側に含まれる
            \`\`\`txt
            /usr/bin
            /usr/lib
            /usr/share
            /usr/local/bin
            \`\`\`
        `),
    },
    {
        command: "/var",
        description:
            "運用中に内容が変わるファイル",
        detail: dedent(`
            ログ・キャッシュ・DBデータ保存先<br />
            nginxログ, Laravel cache, MySQL data など
            \`\`\`txt
            /var/log
            /var/cache
            /var/tmp
            /var/lib
            \`\`\`

            - ログ
            - キャッシュ
            - DBデータ
            - パッケージ管理情報

            ログ確認
            \`\`\`bash
            /var/log
            tail -f /var/log/xxx.log
            \`\`\`
        `),
    },
    {
        command: "/app",
        description:
            "開発プロジェクト配置場所（Docker volume mount先）",
        detail: dedent(`
            volume mount している作業ディレクトリ
            src, public, package.json, artisan, composer.json など
            \`\`\`txt
            /app/src
            /app/public
            /app/package.json
            \`\`\`

            docker-compose.yml
            \`\`\`txt
            volumes:
                - .:/app
            \`\`\`
        `),
    },
];

export const linuxReactData: CommandItem[] = [
    {
        command: "/app",
        description: "Reactプロジェクト本体（src, public, package.json など）",
        detail: dedent(`
            \`\`\`txt
            /app/src                  コンポーネント・画面・hooks・ロジックなど開発コード本体
            /app/src/components       再利用UIコンポーネント（Button, Modal, Card など）
            /app/src/pages            ルーティングページ（CRA / 一部構成）
            /app/src/app              App Router構成（Next.js系React環境で使用）
            /app/src/hooks            custom hooks（useFetch, useModal など）
            /app/src/context          Context API状態管理ファイル
            /app/public               画像・動画・favicon・robots.txtなど静的公開ファイル
            /app/package.json         依存ライブラリ・scripts・プロジェクト情報
            /app/package-lock.json    npm依存関係の固定バージョン情報
            /app/node_modules         React本体・npmライブラリ一式保存先
            /app/.env                 API URL・公開環境変数・秘密設定値
            /app/.next                Next.jsビルド成果物・キャッシュ（Next.js利用時）
            /app/build                React本番ビルド成果物（create-react-app系）
            /app/dist                 Viteなどの本番ビルド成果物
            \`\`\`
        `),
    },
    {
        command: "/usr/bin/node",
        description: "Node.js実行ファイル",
        detail: dedent(`
            \`\`\`txt
            /usr/bin/npm npmコマンド本体
            \`\`\`
        `),
    },
    {
        command: "/tmp",
        description: "ビルド一時ファイル・キャッシュ・テンポラリ",
    },
    {
        command: "/proc",
        description: "NodeプロセスのCPU・メモリ・PID確認用仮想ファイル",
    },
    {
        command: "/etc",
        description: "Linux / Node / コンテナ環境設定ファイル",
    },
];

export const linuxLaravelData: CommandItem[] = [
    {
        command: "/etc",
        description: "PHP / Apache / Nginx / Linux 設定ファイル",
        detail: dedent(`
            \`\`\`txt
            etc/php-fpm.d    PHP-FPMの設定ファイル
            \`\`\`
        `),
    },
    {
        command: "/var",
        description: "プロジェクト本体（volume bind先）",
        detail: dedent(`
            \`\`\`txt
            /var/www                       Laravelプロジェクト本体（volume bind先）
            /var/www/app                   コントローラー・モデル・サービスクラスなどアプリ本体コード
            /var/www/routes                Web/APIルーティング定義（web.php, api.php）
            /var/www/resources/views       Bladeテンプレート（画面HTML）
            /var/www/resources/js          Vue / React / JavaScript フロントコード
            /var/www/resources/css         CSS / Sass / Tailwind スタイル
            /var/www/config                Laravel各種設定（app.php, database.php, mail.php など）
            /var/www/database/migrations   DBテーブル作成・変更履歴ファイル
            /var/www/database/seeders      初期データ投入Seeder
            /var/www/storage               ログ・キャッシュ・アップロードファイル・セッション保存先
            /var/www/storage/logs          Laravelエラーログ（laravel.log）
            /var/www/bootstrap/cache       config / route / service のキャッシュファイル
            /var/www/public                公開ディレクトリ（index.php, css, js, 画像）
            /var/www/vendor                Composerライブラリ一式（Laravel本体含む）
            /var/www/.env                  DB接続情報・APP_KEY・MAIL設定など環境変数

            /var/log                       Apache / Nginx / PHP-FPM ログ
            /var/log.php-fpm.log           PHP-FPMのログ
            \`\`\`
        `),
    },
    {
        command: "/tmp",
        description: "一時ファイル・セッション一時保存・テンポラリ",
    },
    {
        command: "/usr",
        description: "php, composer, nginx, mysql-client など実行プログラム",
        detail: dedent(`
            \`\`\`txt
            /usr/local/etc/php      php.ini, conf.dなど
            \`\`\`
        `),
    },
];

export const linuxNginxData: CommandItem[] = [
    {
        command: "/etc",
        description: "各種設定ファイルを保存",
        detail: dedent(`
            \`\`\`txt
            /etc/nginx                     Nginx設定本体ディレクトリ
            /etc/nginx/nginx.conf          Nginx全体設定（worker数、gzip、http設定、include先など）
            /etc/nginx/conf.d              仮想ホスト設定・追加serverブロック設定ファイル
            /etc/nginx/sites-available     サイト設定ファイル保存場所（Debian/Ubuntu系）
            /etc/nginx/sites-enabled       有効化されたサイト設定へのシンボリックリンク

            /etc/ssl                       SSL証明書・秘密鍵保存先（HTTPS利用時）
            /etc/passwd                   nginx実行ユーザー情報確認に使うLinuxユーザー定義
            \`\`\`
        `),
    },
    {
        command: "/usr",
        description: "nginx実行ファイル・関連コマンド・静的HTML初期ファイル",
        detail: dedent(`
            \`\`\`txt
            /usr/bin                   補助コマンド類(bash, shなど)
            /usr/sbin/nginx            Nginx本体実行ファイル
            /usr/share/nginx/html      公式Dockerイメージ既定の公開ディレクトリ
            \`\`\`
        `),
    },
    {
        command: "/var",
        description: "運用中に内容が変わるファイル",
        detail: dedent(`
            \`\`\`txt
            /var/www/html                公開Webファイル（HTML, CSS, JS, 画像など）
            /var/log/nginx               アクセスログ・エラーログ保存先
            /var/log/nginx/access.log    アクセス履歴（IP、URL、ステータスコードなど）
            /var/log/nginx/error.log     起動失敗・404・502・設定エラーなどの障害ログ
            /var/cache/nginx             リバースプロキシ・FastCGIキャッシュ保存先
            \`\`\`
        `),
    },
    {
        command: "/run/nginx.pid",
        description: "起動中NginxプロセスID",
    },
    {
        command: "/tmp",
        description: "一時アップロードファイル・テンポラリデータ",
    },
    {
        command: "/proc",
        description: "CPU・メモリ・PIDなど実行中Nginx状態確認用仮想ファイル",
    },
    {
        command: "/sys",
        description: "Linuxカーネル・ネットワーク・cgroup制御情報",
    },
];

export const linuxMysqlData: CommandItem[] = [
    {
        command: "/var",
        description: "運用中に内容が変わるファイル",
        detail: dedent(`
            \`\`\`txt
            /var/lib/mysql                MySQLデータ本体保存先（DB・テーブル・インデックス・実データ, volume設定することで再起動後も保持される
            /var/lib/mysql/mysql          ユーザー情報・権限・内部管理テーブル
            /var/lib/mysql/データベース名   各データベースごとのテーブルデータ保存フォルダ

            /var/log/mysql                MySQLログ保存先（環境により異なる）
            /var/log/mysql/error.log      起動失敗・接続エラー・クラッシュなど障害ログ

            /var/run/mysqld               PID・socketファイル保存先
            /var/run/mysqld/mysqld.sock   ローカル接続用Unixソケットファイル
            /var/run/mysqld/mysqld.pid    起動中MySQLプロセスID
            \`\`\`
        `),
    },
    {
        command: "/etc",
        description: "MySQLサーバーの動作設定を管理",
        detail: dedent(`
            \`\`\`txt
            /etc/mysql           MySQL設定ディレクトリ（my.cnf など）
            /etc/mysql/my.cnf    MySQL全体設定（port, charset, max_connections, innodb設定など）
            /etc/mysql/conf.d    追加設定ファイル置き場（Dockerでよく使う）

            /etc/passwd          mysql実行ユーザー情報確認用Linuxユーザー定義
            \`\`\`
        `),
    },
    {
        command: "/usr",
        description: "MySQLの実行ファイル・CLIツール・ライブラリ置き場",
        detail: dedent(`
            \`\`\`txt
            /usr/sbin/mysqld    MySQLサーバー本体実行ファイル
            /usr/bin/mysql      mysqlコマンドクライアント
            \`\`\`
        `),
    },
    {
        command: "/tmp",
        description: "一時テーブル・ソート・テンポラリファイル",
    },
    {
        command: "/docker-entrypoint-initdb.d",
        description: "初回起動時に実行されるSQL / shell初期化スクリプト置き場",
    },
    {
        command: "/proc",
        description: "CPU・メモリ・PIDなどMySQL稼働状態確認用仮想ファイル",
    },
    {
        command: "/sys",
        description: "Linuxカーネル・I/O・cgroup制御情報",
    },
];