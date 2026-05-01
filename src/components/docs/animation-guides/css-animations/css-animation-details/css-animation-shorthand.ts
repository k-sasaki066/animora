import dedent from "dedent";

export const detail = dedent(`
    \`animation\` は、以下の複数プロパティをまとめて書ける
    - animation-name
    - animation-duration
    - animation-timing-function
    - animation-delay
    - animation-iteration-count
    - animation-direction
    - animation-fill-mode
    - animation-play-state

    #### 基本形
    \`\`\`css
    animation: 名前 時間 easing 遅延 回数 方向 fill-mode;
    \`\`\`

    例
    \`\`\`css
    animation: fadeIn 1s ease 0s 1 normal forwards;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
    \`\`\`

    意味
    \`\`\`txt
    fadeIn     → 使用する @keyframes 名
    1s         → 1秒かけて再生
    ease       → ゆっくり始まり自然に終わる
    0s         → 遅延なしで開始
    1          → 1回だけ実行
    normal     → 通常方向
    forwards   → 終了後も最後の状態を維持
    \`\`\`

    ---

    #### 使用例① フェードイン
    \`\`\`css
    animation: fadeIn 0.5s ease forwards;
    \`\`\`
    モーダル表示・カード出現・ページ読み込み時によく使います。

    ---

    #### 使用例② ローディング回転
    \`\`\`css
    animation: spin 1s linear infinite;
    \`\`\`

    意味
    \`\`\`text
    spin      → 回転アニメーション
    1s        → 1秒で1周
    linear    → 一定速度
    infinite  → 無限ループ
    \`\`\`

    ---

    #### 使用例③ 左右に揺れる
    \`\`\`css
    animation: shake 0.4s ease;
    \`\`\`
    入力エラー・通知強調などで使われる

    ---

    #### よく使う省略パターン
    \`\`\`css
    animation: fadeIn 1s;
    animation: fadeIn 1s ease;
    animation: fadeIn 1s ease forwards;
    animation: spin 1s linear infinite;
    \`\`\`
    \`必要なものだけ書いてOK\`

    ---

    **⚠️ 注意点**
    - 時間は \`1s\` \`500ms\` で指定
    - \`infinite\` は無限ループ
    - \`forwards\` を付けないと終了後に元へ戻る場合あり
    - 名前は必ず \`@keyframes\` と一致させる
`);