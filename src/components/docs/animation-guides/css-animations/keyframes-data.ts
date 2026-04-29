import dedent from "dedent";

export type KeyframesItem = {
    item: string;
    detail?: string;
};

export const keyframesColumns = [
    { key: "item", label: "指定方法" },
];

export const keyframesData: KeyframesItem[] = [
    {
        item: "from / to",
        detail: dedent(`
            最初にどういう状態で、最後にどうなるかを指定

            #### 基本構文
            \`\`\`css
            @keyframes アニメーション名 {
                from { ... }        // アニメーション開始（0%）
                to   { ... }        // アニメーション終了（100%）
            }
            \`\`\`

            ---

            #### 使用例① 横移動
            \`\`\`html
            <div class="box"></div>
            \`\`\`
            \`\`\`css
            .box {
                width: 100px;
                height: 100px;
                background: red;
                animation: move 2s infinite;
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
            意味
            \`\`\`txt
            2秒かけて無限ループ
            右へ200px移動
            \`\`\`

            ---

            #### 使用例② フェードイン（透明 → 表示）
            \`\`\`css
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
            最初は透明
            最後は見える
            \`\`\`

            使用場面
            - モーダル表示
            - カード出現
            - ページ読み込み

            ---

            #### 使用例③ 拡大表示
            \`\`\`css
            @keyframes zoomIn {
                from {
                    transform: scale(0.5);
                }

                to {
                    transform: scale(1);
                }
            }
            \`\`\`

            ---

            #### 使用例④ 回転
            \`\`\`css
            @keyframes spin {
                from {
                    transform: rotate(0deg);
                }

                to {
                    transform: rotate(360deg);
                }
            }
            \`\`\`

            ---

            #### 使用例⑤ 下から出現
            \`\`\`css
            @keyframes slideUp {
                from {
                    transform: translateY(30px);
                    opacity: 0;
                }

                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            \`\`\`
        `),
    },
    {
        item: "0%〜100%",
        detail: dedent(`
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
        `),
    },
];