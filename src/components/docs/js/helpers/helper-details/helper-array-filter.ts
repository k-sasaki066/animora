import dedent from "dedent";

export const detail = dedent(`
    ### filterList
    検索フィルタ

    #### 使用場面
    - 検索フォームのフィルタリング
    - 商品一覧検索
    - ユーザー検索
    - ジェスト機能

    \`\`\`js
    function filterList(list, keyword) {
        return list.filter(item =>
            item.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    const fruits = [
        "Apple",
        "Banana",
        "Orange",
        "Grape",
        "Pineapple"
    ];
    const result = filterList(fruits, "ap");
    // ["Apple", "Grape", "Pineapple"]
    *toLowerCase() により 大文字・小文字を区別しない

    const users = ["Taro", "Hanako", "Jiro"];
    filterList(users, "ta");
    // ["Taro"]
    \`\`\`
`);