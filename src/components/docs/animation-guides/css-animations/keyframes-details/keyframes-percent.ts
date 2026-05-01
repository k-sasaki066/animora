import dedent from "dedent";

export const detail = dedent(`
    開始時 → 途中 → 終了時を \`%（パーセント）\` で指定して、要素をどう動かすか決める

    **% はアニメーション全体の進行率**
    \`\`\`css
    animation: move 4s;
    \`\`\`
    \`\`\`txt
    指定	    実際の時間
    0%	        0秒
    25%	        1秒
    50%	        2秒
    75%	        3秒
    100%	    4秒
    \`\`\`

    #### 基本構文
    \`\`\`css
    @keyframes アニメーション名 {
        0%   { ... }      // アニメーション開始
        50%  { ... }      // アニメーション中間
        100% { ... }      // アニメーション終了
    }
    \`\`\`

    ---

    #### 使用例① 左右に揺れる（エラー）
    \`\`\`css
    @keyframes shake {
        0%   { transform: translateX(0); }
        25%  { transform: translateX(-5px); }
        50%  { transform: translateX(5px); }
        75%  { transform: translateX(-5px); }
        100% { transform: translateX(0); }
    }
    \`\`\`
    使用場面
    - 入力ミス
    - エラー通知

    ---

    #### 使用例② 点滅
    \`\`\`css
    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
    \`\`\`
    使用場面
    - 通知バッジ
    - 注目表示

    ---

    #### 使用例③ 途中で止まる動き
    \`\`\`css
    @keyframes move {
        0% {
            transform: translateX(0);
        }

        50% {
            transform: translateX(200px);
        }

        100% {
            transform: translateX(200px);
    }
    \`\`\`

    ---

    #### 使用例④ 往復する
    \`\`\`css
    @keyframes move {
        0% {
            transform: translateX(0);
        }

        50% {
            transform: translateX(100px);
        }

        100% {
            transform: translateX(0);
        }
    }
    \`\`\`
`);