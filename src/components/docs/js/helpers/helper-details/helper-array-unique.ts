import dedent from "dedent";

export const detail = dedent(`
    ### unique
    配列の重複削除

    #### 使用場面
    - タグ一覧
    - カテゴリ一覧
    - 検索候補の整理
    - APIデータの重複除去

    \`\`\`js
    const unique = (arr) => [...new Set(arr)];

    const fruits = ["apple", "banana", "apple", "orange", "banana"];
    const result = unique(fruits);
    // ["apple", "banana", "orange"]

    const numbers = [1, 2, 2, 3, 4, 4, 5];
    const result = unique(numbers);
    // [1, 2, 3, 4, 5]

    const tags = ["React", "Next.js", "React", "TypeScript"];
    const result = unique(tags);
    // ["React", "Next.js", "TypeScript"]
    \`\`\`
`);