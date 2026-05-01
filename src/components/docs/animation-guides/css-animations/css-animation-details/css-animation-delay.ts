import dedent from "dedent";

export const detail = dedent(`
    要素が表示されてから、すぐに動かさず<br />
    **指定した時間だけ待ってから開始** できる

    #### 基本構文
    \`\`\`css
    animation-delay: 時間;
    \`\`\`

    #### 指定できる単位
    \`\`\`css
    animation-delay: 1s;      /* 1秒 */
    animation-delay: 300ms;   /* 0.3秒 */
    \`\`\`

    ---

    0.5秒後にアニメーション開始
    \`\`\`css
    animation-delay: 0.5s;
    \`\`\`

    ---

    負の値も使える
    \`\`\`css
    animation-delay: -1s;
    \`\`\`
    アニメーション開始時点で<br />
    **1秒進んだ状態から再生** される

    ローディング無限ループなどで使う

    ---

    #### ⚠️ 注意点
    delay中は通常状態のまま表示されるため、<br />
    初期状態を指定しないと不自然になることがある
    \`\`\`css
    opacity: 0;
    animation-fill-mode: forwards;
    \`\`\`

    と組み合わせるのがおすすめ
`);