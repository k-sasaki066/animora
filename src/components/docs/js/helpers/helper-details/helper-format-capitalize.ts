import dedent from "dedent";

export const detail = dedent(`
    ### capitalize
    先頭を大文字にする

    #### 使用場面
    - ユーザー名の表示
    - カテゴリ名の見た目調整
    - APIデータの表示整形(Successなど)
    - APIデータの表示整形

    \`\`\`js
    function capitalize(str = "") {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    capitalize("hello");  //"Hello"
    \`\`\`
`);