import dedent from "dedent";

export const detail = dedent(`
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
`);