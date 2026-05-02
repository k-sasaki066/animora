import dedent from "dedent";

export const detail = dedent(`
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
`);