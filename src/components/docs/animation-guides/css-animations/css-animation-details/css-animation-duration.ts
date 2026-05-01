import dedent from "dedent";

export const detail = dedent(`
    アニメーションが 何秒かけて再生されるか を指定<br />
    時間が短いほど速く、長いほどゆっくり動く

    #### 基本構文
    \`\`\`css
    animation-duration: 時間;
    \`\`\`

    #### 使用できる単位
    \`\`\`css
    animation-duration: 500ms;
    animation-duration: 2s;
    \`\`\`

    - ms = ミリ秒（1000ms = 1秒）
    - s = 秒

    #### 速度の目安
    - 0.2s ～ 0.4s → 素早いUI操作向け
    - 0.5s ～ 0.8s → 自然で見やすい
    - 1s以上 → 演出向け
    - 2s以上 → ゆっくり強調演出

    ---

    1秒かけて再生される
    \`\`\`css
    animation-duration: 1s;
    \`\`\`

    ---

    #### ⚠️ 注意点
    - 長すぎると操作が遅く感じる
    - 短すぎると変化に気づきにくい
    - UI操作なら 0.3s 前後 がよく使われる

    \`\`\`css
    animation-duration: 0s;
    \`\`\`
    にするとアニメーションせず即時反映される
`);