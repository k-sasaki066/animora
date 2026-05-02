import dedent from "dedent";

export const detail = dedent(`
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
`);