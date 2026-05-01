import dedent from "dedent";

export const detail = dedent(`
    #### 使用場面
    - SNS通知
    - DM未読件数
    - チャット新着メッセージ
    - カート商品数表示
    - 管理画面アラート

    #### 基本
    \`\`\`html
    <div class="bell-wrap">
        🔔
        <span class="badge"></span>
    </div>
    \`\`\`

    \`\`\`css
    .bell-wrap {
        position: relative;
        display: inline-block;
        font-size: 28px;
    }

    /* 非表示状態 */
    .badge {
        display: none;
    }

    /* 表示状態 */
    .badge.is-visible {
        display: inline-block;
        position: absolute;
        top: -6px;
        right: -10px;
        min-width: 20px;
        height: 20px;
        padding: 0 6px;
        border-radius: 9999px;
        background: red;
        color: white;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        font-weight: bold;
    }

    /* 重要通知 */
    .badge.is-warning {
        background: orange;
    }
    \`\`\`

    \`\`\`js
    const badge = document.querySelector(".badge");

    const count = 3;

    if (count > 0) {
        badge.textContent = count > 99 ? "99+" : count;
        badge.classList.add("is-visible");
    } else {
        badge.classList.remove("is-visible");
    }
    \`\`\`

    ---

    #### API取得後

    \`\`\`js
    fetch("/api/notifications")
        .then(res => res.json())
        .then(data => {
            const badge = document.querySelector(".badge");

            if (data.count > 0) {
                badge.textContent = data.count > 99 ? "99+" : data.count;
                badge.classList.add("is-visible");
            } else {
                badge.classList.remove("is-visible");
            }
        });
    \`\`\`

    ---

    #### 重要通知の色変更

    \`\`\`js
    if (count > 10) {
        badge.classList.add("is-warning");
    }
    \`\`\`
`);