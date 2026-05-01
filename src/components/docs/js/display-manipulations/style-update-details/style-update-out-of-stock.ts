import dedent from "dedent";

export const detail = dedent(`
    #### 使用場面
    - ECサイト商品一覧
    - サイズ別在庫表示
    - チケット販売画面
    - 予約枠満席表示
    - フリマアプリの売却済み表示

    ---

    #### 基本例
    \`\`\`html
    <div class="item soldout">
        スニーカー（在庫切れ）
    </div>
    \`\`\`

    \`\`\`css
    .soldout {
        opacity: 0.4;
        filter: grayscale(100%);
        pointer-events: none;
        cursor: not-allowed;
    }
    \`\`\`

    \`\`\`js
    const item = document.querySelector(".item");

    item.classList.add("soldout");
    \`\`\`

    ---

    #### 在庫データから制御

    \`\`\`js
    const item = document.querySelector(".item");

    if (product.stock === 0) {
        item.classList.add("soldout");
    }
    \`\`\`

    ---

    #### 複数商品に適用
    \`\`\`html
    <div class="item" data-stock="0">商品A</div>
    <div class="item" data-stock="5">商品B</div>
    \`\`\`

    \`\`\`js
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        const stock = item.dataset.stock;

        if (stock === "0") {
            item.classList.add("soldout");
        }
    });
    \`\`\`

    ---

    #### トグル制御（状態変更）
    \`\`\`js
    item.classList.toggle("soldout");
    \`\`\`
`);