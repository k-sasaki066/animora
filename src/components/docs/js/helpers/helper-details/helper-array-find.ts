import dedent from "dedent";

export const detail = dedent(`
    ### find
    配列から特定の要素を検索<br />
    find は、条件に一致した最初の1件を返す(見つからない場合は undefined)

    #### 使用場面
    - id一致のユーザー取得
    - 商品一覧から1件取得
    - select選択値に対応するデータ取得
    - URLパラメータから対象データ検索

    \`\`\`js
    const found = arr.find(item => 条件);

    const users = [
        { id: 1, name: "田中" },
        { id: 2, name: "佐藤" },
        { id: 3, name: "鈴木" },
    ];
    const found = users.find(item => item.id === 2);
    // { id: 2, name: "佐藤" }
    \`\`\`
`);