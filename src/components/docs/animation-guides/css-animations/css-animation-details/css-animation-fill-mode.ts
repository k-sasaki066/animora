import dedent from "dedent";

export const detail = dedent(`
    アニメーションが始まる前や終わった後に、
    **keyframes のスタイルを保持するかどうか** を決める

    #### 基本構文
    \`\`\`css
    animation-fill-mode: 指定値;
    \`\`\`

    #### 指定できる値
    \`\`\`txt
    none         アニメーション前後で状態を保持しない(初期値)
    forwards     終了時の状態を維持
    backwards    開始時の状態に戻る
    both         開始時に"forwards"、終了時に"backwards"を適用
    \`\`\`

    ---

    #### 使用例 (forwards)
    \`\`\`css
    .box {
        animation: fadeIn 1s forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    \`\`\`

    結果
    \`\`\`txt
    終了後も opacity:1 のまま残る
    \`\`\`

    使用場面
    - モーダル表示後そのまま表示維持
    - スライドイン後停止
    - 初回ロード演出

    ---

    #### 使用例 (backwards)
    \`\`\`css
    .box {
        animation: fadeIn 1s 1s backwards;
    }
    \`\`\`
    1秒 delay 中でも from の状態が適用される

    使用場面
    - 遅延表示中に透明状態維持
    - 順番表示アニメーション
`);