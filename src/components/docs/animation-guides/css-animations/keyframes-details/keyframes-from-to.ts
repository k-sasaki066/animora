import dedent from "dedent";

export const detail = dedent(`
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
`);