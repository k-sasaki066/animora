import dedent from "dedent";

export const detail = dedent(`
    #### 使用場面
    - タスクの並び替え（Todoアプリ）
    - カンバンボード（ToDo / Doing / Done）
    - カードUIのドラッグ移動
    - ウィジェット配置画面
    - ギャラリー並び替え

    #### 基本構造
    \`\`\`html
    <div id="item" class="item" draggable="true">
        ドラッグ対象
    </div>
    \`\`\`

    \`\`\`css
    .item {
        transition: 0.2s;
    }

    .dragging {
        opacity: 0.5;
        transform: scale(1.05) rotate(2deg);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        border: 2px dashed #3b82f6;
    }
    \`\`\`

    \`\`\`js
    const item = document.querySelector("#item");

    item.addEventListener("dragstart", () => {
        item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
    });
    \`\`\`

    ---

    #### Tailwind版
    \`\`\`js
    item.classList.add("opacity-50", "scale-105", "shadow-lg");
    \`\`\`

    \`\`\`js
    item.classList.remove("opacity-50", "scale-105", "shadow-lg");
    \`\`\`
`);