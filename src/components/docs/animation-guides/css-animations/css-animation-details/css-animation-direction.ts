import dedent from "dedent";

export const detail = dedent(`
    アニメーションを **どの向きで再生するか** を決める
    \`\`\`css
    animation-direction: alternate;
    \`\`\`

    #### 基本構文
    \`\`\`css
    animation-direction: 値;
    \`\`\`

    #### 指定できる値と意味
    \`\`\`txt
    normal              通常方向で再生する（初期値）
    reverse             逆方向で再生する
    alternate           通常方向 → 逆方向 を交互に繰り返す
    alternate-reverse   逆方向 → 通常方向 を交互に繰り返す
    \`\`\`

    ---

    #### 使用例
    \`\`\`css
    .box {
        animation: move 2s infinite;
        animation-direction: alternate;
    }

    @keyframes move {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(200px);
        }
    }
    \`\`\`

    結果
    \`\`\`text
    左 → 右 → 左 → 右 ...
    \`\`\`
`);