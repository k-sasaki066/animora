import dedent from "dedent";

export const detail = dedent(`
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
`);