import dedent from "dedent";

export const detail = dedent(`
    ### shuffle
    配列をランダムに並び替え(実行するたびに順番が変わる)

    #### 使用場面
    - クイズの選択肢をシャッフル
    - ランダム表示、ガチャ演出
    - おすすめ商品の並び替え
    - カードゲーム

    \`\`\`js
    const shuffled = arr.sort(() => Math.random() - 0.5);

    const fruits = ["りんご", "バナナ", "みかん", "ぶどう"];

    *元の配列 fruits 自体も並び替わる
    const shuffled = fruits.sort(() => Math.random() - 0.5);
    console.log(fruits,shuffled);
    // ['バナナ', 'りんご', 'ぶどう', 'みかん'], ['バナナ', 'りんご', 'ぶどう', 'みかん']

    *元の配列を残したい場合はコピー
    const shuffled = [...fruits].sort(() => Math.random() - 0.5);
    console.log(fruits,shuffled);
    //['りんご', 'バナナ', 'みかん', 'ぶどう'],['みかん', 'りんご', 'バナナ', 'ぶどう']
    \`\`\`
`);