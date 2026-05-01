import dedent from "dedent";

export const detail = dedent(`
    データ削除後に**要素を自然に消えるように見せるUIアニメーション**

    #### 使用場面
    1. ECサイト
        - カートから商品削除
        - お気に入り削除
    2. Todoアプリ
        - タスク削除
        - 完了タスク整理
    3. 管理画面
        - ユーザー削除
        - コメント削除
    4. SNS
        - 投稿削除
        - 通知削除

    ---

    #### 使用例
    \`\`\`html
    <ul>
        <li class="task">
            タスク1 <button class="del">削除</button>
        </li>
    </ul>
    \`\`\`

    \`\`\`css
    .task {
        transition: 0.25s ease;
    }

    .task.remove {
        opacity: 0;
        transform: translateX(20px);
    }
    \`\`\`

    \`\`\`js
    document.querySelectorAll(".del").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const item = e.target.closest(".task");

            item.classList.add("remove");

            setTimeout(() => {
                item.remove();
            }, 250);
            });
        });
    });
    \`\`\`
`);