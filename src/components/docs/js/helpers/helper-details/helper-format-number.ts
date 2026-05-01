import dedent from "dedent";

export const detail = dedent(`
    ### formatNumber
    数値をカンマ区切りに変換

    #### 使用場面
    - ECサイトの商品価格表示
    - 売上・利益・PV数の表示
    - ダッシュボードの統計数値
    - フォロワー数・閲覧数表示
    - 管理画面の金額表示

    \`\`\`js
    formatNumber(1000);       // "1,000"
    formatNumber(123456789);  // "123,456,789"
    formatNumber(12345.67);   // "12,345.67

    const price = 980000;
    formatNumber(price);      // "¥980,000"

    ⚠️文字列には使用できない
    formatNumber("1000").    // "1000"
    \`\`\`
`);