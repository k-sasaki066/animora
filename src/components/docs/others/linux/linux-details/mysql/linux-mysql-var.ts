import dedent from "dedent";

export const detail = dedent(`
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
`);