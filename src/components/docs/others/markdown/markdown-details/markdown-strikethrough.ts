import dedent from "dedent";

export const detail = dedent(`
    文章の修正、非推奨表現、比較などで使う

    \`\`\`markdown
    ~~この文字は打ち消し線~~
    \`\`\`

    ~~この文字は打ち消し線~~

    料金は ~~¥9,800~~ ¥4,980 です

    - 旧コマンド: ~~docker-compose up~~
    - 新コマンド: docker compose up

    ⚠️ 前後のスペース不要
`);