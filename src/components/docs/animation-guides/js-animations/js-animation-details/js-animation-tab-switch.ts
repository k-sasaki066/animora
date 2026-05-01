import dedent from "dedent";

export const detail = dedent(`
    タブUIとは、1つの画面内で内容を切り替えて表示する仕組み

    #### 使用場面
    - 商品詳細（説明 / レビュー / FAQ）
    - マイページ（プロフィール / 注文履歴 / 設定）
    - 管理画面（売上 / 会員 / 商品管理）
    - ダッシュボード（週 / 月 / 年）

    #### 使用例
    \`\`\`html
    <div class="tabs">
        <button class="tab active" data-tab="info">商品説明</button>
        <button class="tab" data-tab="review">レビュー</button>
        <button class="tab" data-tab="faq">FAQ</button>
    </div>

    <div id="info" class="panel show">商品の説明です</div>
    <div id="review" class="panel">レビュー一覧です</div>
    <div id="faq" class="panel">よくある質問です</div>
    \`\`\`

    \`\`\`css
    .panel {
        display: none;
        opacity: 0;
    }

    .panel.show {
        display: block;
        animation: fadeIn 0.35s ease forwards;
    }

    .tab.active {
        background: #111;
        color: #fff;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    \`\`\`

    \`\`\`js
    const tabs = document.querySelectorAll(".tab");
    const panels = document.querySelectorAll(".panel");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.tab;

            tabs.forEach(btn =>
                btn.classList.remove("active")
            );

            panels.forEach(panel =>
                panel.classList.remove("show")
            );

            tab.classList.add("active");

            document
                .querySelector("#" + target)
                .classList.add("show");
        });
    });
    \`\`\`
`);