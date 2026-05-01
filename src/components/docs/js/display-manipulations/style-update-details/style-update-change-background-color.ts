import dedent from "dedent";

export const detail = dedent(`
    #### 使用場面
    - メニュー選択中
    - タブ切替
    - チェック中のカードUI
    - ナビゲーションの現在ページ表示
    - 選択済み商品の強調

    ---

    #### 基本例
    \`\`\`html
    <div class="item">商品A</div>
    \`\`\`

    \`\`\`css
    .active {
        background-color: lightblue;
    }
    \`\`\`

    \`\`\`js
    const item = document.querySelector(".item");

    item.classList.add("active");
    \`\`\`

    ---

    #### タブ切替の例
    \`\`\`html
    <button class="tab">人気</button>
    <button class="tab">新着</button>
    <button class="tab">おすすめ</button>
    \`\`\`

    \`\`\`css
    .active {
        background-color: skyblue;
    }
    \`\`\`

    \`\`\`js
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            tabs.forEach(t => {
                t.classList.remove("active");
            });

            tab.classList.add("active");
        });
    });
    \`\`\`

    ポイント
    - 選択された要素だけ active を付与
    - 他は remove で解除
    - 状態管理がシンプルになる

    ---

    #### サイドメニュー選択中
    \`\`\`js
    menu.classList.add("active");
    \`\`\`

    \`\`\`css
    .active {
        background-color: #27272a;
    }
    \`\`\`

    ---

    #### カード選択UI
    \`\`\`js
    card.classList.add("selected");
    \`\`\`

    \`\`\`css
    .selected {
        background-color: #dbeafe;
        border: 2px solid #3b82f6;
    }
    \`\`\`
`);