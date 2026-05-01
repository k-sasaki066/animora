import dedent from "dedent";

export const detail = dedent(`
    ### randomItem
    配列からランダムに1件取得

    #### 使用場面
    - 今日のおすすめ商品
    - ランダム背景色
    - 名言をランダム表示
    - ガチャ・抽選

    \`\`\`js
    const randomItem = (arr) => {
        if (!arr.length) return null;

        return arr[Math.floor(Math.random() * arr.length)];
    };

    const fruits = ["りんご", "バナナ", "みかん", "ぶどう"];
    const result = randomItem(fruits);
    // みかん(実行するたびに結果は変わる)
    \`\`\`
`);