import dedent from "dedent";

export const detail = dedent(`
    \`\`\`txt
    /etc/mysql           MySQL設定ディレクトリ（my.cnf など）
    /etc/mysql/my.cnf    MySQL全体設定（port, charset, max_connections, innodb設定など）
    /etc/mysql/conf.d    追加設定ファイル置き場（Dockerでよく使う）

    /etc/passwd          mysql実行ユーザー情報確認用Linuxユーザー定義
    \`\`\`
`);