import dedent from "dedent";

export const detail = dedent(`
    ### isEmpty
    空チェック

    #### 使用場面
    - フォーム入力チェック
    - APIデータ確認(メール登録有無など)
    - 条件付き表示(タイトルがなければ『未タイトル』表示など)

    \`\`\`js
    function isEmpty(value) {
        if (value == null) return true;

        return String(value).trim() === "";
    }

    isEmpty(null);       // true
    isEmpty(undefined);  // true
    isEmpty("hello");    // false
    isEmpty("   ");      // true
    \`\`\`
`);