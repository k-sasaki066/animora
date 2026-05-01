import dedent from "dedent";

export const detail = dedent(`
    ### isOverLimit
    文字数カウント（制限チェック）

    #### 使用場面
    - コメント投稿の最大文字数チェック
    - お問い合わせフォームの入力制限
    - タイトル文字数制限（例: 30文字以内）
    - SNS投稿文字数カウント
    - プロフィール自己紹介欄の制限

    \`\`\`js
    function isOverLimit(text = "", limit = 100) {
        return text.length > limit;
    }

    isOverLimit("こんにちは", 10);             //false
    isOverLimit("これはとても長い文章です", 5);  //true
    \`\`\`
`);