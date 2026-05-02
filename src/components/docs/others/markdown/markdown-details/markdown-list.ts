import dedent from "dedent";

export const detail = dedent(`
    文章を見やすく整理するためのリスト表示

    \`\`\`markdown
    - 箇条書きリスト
    * 箇条書きリスト
    + 箇条書きリスト
    どれでもリストになるが、統一する

    1. 番号付きリスト
    2. 番号付きリスト
    3. 番号付きリスト

    - [x] 完了
    - [ ] 未完了
    \`\`\`

    ---

    #### 箇条書きリスト (順番が不要な一覧）
    - Apple
    - Banana
    - Orange

    ---

    #### 番号付きリスト（手順・順番あり）
    1. インストール
    2. 設定
    3. 実行

    ---

    #### ネスト（入れ子リスト）
    ネストはスペース2〜4個でインデント
    - フルーツ
        - Apple
        - Banana
    - 野菜
        - Tomato

    ---

    #### 番号付き + 箇条書き
    1. セットアップ
        - Node.jsインストール
        - npm install
    2. 起動
        - npm run dev

    ---

    #### チェックリスト
    - [x] 完了
    - [ ] 未完了

    ---

    ⚠️ 記号の後に半角スペースが必要
    \`\`\`js
    ⭕️
    - Apple
    - Banana
    - Orange

    ❌
    -Apple
    -Banana
    -Orange
    \`\`\`
`);