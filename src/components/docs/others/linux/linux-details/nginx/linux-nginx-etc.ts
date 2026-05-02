import dedent from "dedent";

export const detail = dedent(`
    \`\`\`txt
    /etc/nginx                     Nginx設定本体ディレクトリ
    /etc/nginx/nginx.conf          Nginx全体設定（worker数、gzip、http設定、include先など）
    /etc/nginx/conf.d              仮想ホスト設定・追加serverブロック設定ファイル
    /etc/nginx/sites-available     サイト設定ファイル保存場所（Debian/Ubuntu系）
    /etc/nginx/sites-enabled       有効化されたサイト設定へのシンボリックリンク

    /etc/ssl                       SSL証明書・秘密鍵保存先（HTTPS利用時）
    /etc/passwd                   nginx実行ユーザー情報確認に使うLinuxユーザー定義
    \`\`\`
`);