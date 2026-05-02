import dedent from "dedent";

export const detail = dedent(`
    \`\`\`txt
    /var/www/html                公開Webファイル（HTML, CSS, JS, 画像など）
    /var/log/nginx               アクセスログ・エラーログ保存先
    /var/log/nginx/access.log    アクセス履歴（IP、URL、ステータスコードなど）
    /var/log/nginx/error.log     起動失敗・404・502・設定エラーなどの障害ログ
    /var/cache/nginx             リバースプロキシ・FastCGIキャッシュ保存先
    \`\`\`
`);