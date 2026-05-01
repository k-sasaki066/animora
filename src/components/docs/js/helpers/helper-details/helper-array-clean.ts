import dedent from "dedent";

export const detail = dedent(`
    ### clean
    配列の中にある false として判定される値（falsy） を削除

    #### 使用場面
    - APIデータの整形
    - 空データ削除
    - className生成
    - フィルタリング処理

    \`\`\`js
    const clean = (arr) => arr.filter(Boolean);
    \`\`\`

    falsyになる値
    \`\`\`js
    false
    0
    ""
    null
    undefined
    NaN
    \`\`\`

    \`\`\`js
    空データ削除
        const data = ["HTML", "", null, "CSS", undefined, "JavaScript"];
        const result = clean(data);
        // ['HTML', 'CSS', 'JavaScript']

    条件付きclassName生成
        const classes = [
            "text-lg",
            isActive && "text-red-500",
            isDark && "bg-black",
        ].filter(Boolean).join(" ");
        // "text-lg text-red-500"

    APIデータ整形
        const tags = ["React", null, "Next.js", "", "TypeScript"];
        const result = clean(tags);
        // const tags = ["React", null, "Next.js", "", "TypeScript"];

    const result = clean(tags);

    ⚠️0 も削除される
    clean([1, 0, 2]);      // [1, 2]
    数値の0を残したい場合
    arr.filter(v => v !== null && v !== undefined && v !== "")
    \`\`\`
`);