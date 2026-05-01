import dedent from "dedent";

export const detail = dedent(`
    どのアニメーションを使うか指定する名前<br />
    @keyframesで作成した動きの設計図を呼び出す

    \`\`\`css
    例 :
    animation-name: animation; // "animation"という名前のアニメーションを定義

    @keyframes animation // ここに定義名を記述 {
        0%{
            // アニメーションを開始するときのCSSを記述
        }
        100%{
            // アニメーションを終了するときのCSSを記述
        }
    }
    \`\`\`

    ⚠️ 名前が一致しないと実行されない<br />
    大文字小文字も区別される
`);