import dedent from "dedent";

export const detail = dedent(`
    #### 基本構文
    \`\`\`css
    animation-play-state: 指定値;
    \`\`\`

    #### 指定できる値
    \`\`\`txt
    running   再生中（初期値）
    paused    一時停止
    \`\`\`

    ---

    #### 基本例
    \`\`\`html
    <div class="loader"></div>
    \`\`\`

    \`\`\`css
    .loader {
        width: 40px;
        height: 40px;
        border: 4px solid #ccc;
        border-top: 4px solid blue;
        border-radius: 50%;

        animation: spin 1s linear infinite;
    }

    .stop {
        animation-play-state: paused;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
    \`\`\`

    JavaScriptで制御
    \`\`\`js
    const loader = document.querySelector(".loader");

    loader.style.animationPlayState = "paused";
    \`\`\`

    再開
    \`\`\`js
    loader.style.animationPlayState = "running";
    \`\`\`

    #### 使用場面
    - 動画停止中にアニメーション停止
    - ホバー中だけ止める
    - タブ非表示時に停止
    - スライダー自動再生停止
    - ローディング停止

    ---

    #### hoverで停止
    \`\`\`css
    .banner {
        animation: slide 10s linear infinite;
    }

    .banner:hover {
        animation-play-state: paused;
    }
    \`\`\`
    マウスを乗せると止まる

    ---

    **⚠️ 注意点**
    \`paused\` は **停止ではなく一時停止**<br />
    再開すると止まった位置から続く

    先頭に戻したい場合は animation を再設定
`);