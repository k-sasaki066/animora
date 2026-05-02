import dedent from "dedent";

export const detail = dedent(`
    文字にURLを設定して見やすく表示

    \`\`\`markdown
    [表示したい文字](移動先URL)
    \`\`\`

    [Google](https://google.com)

    [Google](https://google.com "検索サイト") タイトル付きリンク

    https://google.com URLを直接書いた場合

    \`\`\`markdown
    [OpenAI](https://openai.com)            外部サイトへのリンク

    [お問い合わせ](/contact)                  自分のサイト内ページ

    [Google](https://google.com "検索サイト") タイトル付きリンク（マウスを乗せるとタイトルが表示される環境がある）
    \`\`\`

    ---

    #### README.md
    \`\`\`markdown
    - [インストール方法](#インストール方法)
    - [使い方](#使い方)
    - [ライセンス](#ライセンス)
    \`\`\`

    ---

    #### 技術記事
    \`\`\`markdown
    詳しくは [公式ドキュメント](https://nextjs.org/docs) を参照してください。
    \`\`\`

    ---

    #### ポートフォリオ
    \`\`\`markdown
    [制作物を見る](https://example.com)
    \`\`\`

    ⚠️ 全角スペース禁止
    \`\`\`markdown
    ⭕️ [Google] （https://google.com）
    ❌ [Google]  （https://google.com）
    \`\`\`

    ⚠️ 新しいタブで開く(target="_blank")はMarkdown標準外
    \`\`\`html
    <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>
    \`\`\`
`);