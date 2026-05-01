import dedent from "dedent";

export const detail = dedent(`
    1回だけ再生・3回再生・無限ループなどを指定できる

    #### 基本構文
    \`\`\`css
    animation-iteration-count: 数字;
    animation-iteration-count: infinite;
    \`\`\`

    ---

    #### 使用例① ローディング回転
    \`\`\`css
    .loader {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
    }
    \`\`\`
    常に回転し続ける

    使用場面
    - ローディングUI
    - 通信中表示
    - スピナー

    ---

    #### 使用例② ボタンを3回だけ点滅
    \`\`\`css
    .notice {
        animation: blink 0.5s 3;
    }

    @keyframes blink {
        50% { opacity: 0; }
    }
    \`\`\`
    3回点滅して停止

    使用場面
    - エラー通知
    - 注目させたい要素
    - 初回チュートリアル

    ---

    #### 使用例③ 1回だけフェードイン
    \`\`\`css
    .card {
        animation: fadeIn 0.6s ease 1;
    }
    \`\`\`

    カード表示時に1回だけ再生

    使用場面
    - モーダル表示
    - 一覧カード表示
    - ページ初期表示

    ---

    よく使う考え方
    \`\`\`text
    infinite = 継続動作
    1        = 一度だけ自然に演出
    2〜3     = 注意喚起・強調
    \`\`\`
`);