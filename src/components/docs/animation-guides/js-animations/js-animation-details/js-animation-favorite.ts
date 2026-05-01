import dedent from "dedent";

export const detail = dedent(`
    #### 使用例① 連打防止（デバウンス・ロック処理）
    \`\`\`html
    <button id="likeBtn" class="like">
        <span id="icon">♡</span>
    </button>
    \`\`\`

    \`\`\`css
    .like {
        font-size: 24px;
        transition: transform 0.2s ease;
    }

    .like.active {
        color: red;
        animation: pop 0.4s ease;
    }

    @keyframes pop {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.4);
        }

        100% {
            transform: scale(1);
        }
    }
    \`\`\`

    \`\`\`js
    const btn = document.querySelector("#likeBtn");

    let isLoading = false;

    btn.addEventListener("click", async () => {
        if (isLoading) return;

        isLoading = true;
        btn.disabled = true;

        // API通信
        await fetch("/api/like", { method: "POST" });

        btn.classList.toggle("active");

        isLoading = false;
        btn.disabled = false;
    });
    \`\`\`

    - いいね連打防止
    - フォロー処理
    - 購入ボタン二重送信防止

    ---

    ## ② サーバー通信成功後にアニメーション実行
    成功した場合のみUIを更新する。

    \`\`\`js
    btn.addEventListener("click", async () => {
        const res = await fetch("/api/like", {
            method: "POST"
        });

        if (!res.ok) return;

        btn.classList.add("active");
    });
    \`\`\`

    - DB反映後にいいね反映
    - お気に入り登録
    - ストレージ保存

    ---

    ## ③ アイコン差し替え（状態表現）
    状態に応じてアイコンを変更する

    \`\`\`js
    const icon = document.querySelector("#icon");

    btn.addEventListener("click", () => {
        const isActive = btn.classList.toggle("active");

        icon.textContent = isActive ? "❤️" : "♡";
    });
    \`\`\`

    - 未いいね / いいね済み
    - 保存ON / OFF
    - フォロー状態切替

    #### 動きの流れ
    \`\`\`text
    クリック
    ↓
    ① 連打防止チェック
    ↓
    ② サーバー通信
    ↓
    ③ 成功時のみ状態更新
    ↓
    ④ アイコン変更
    ↓
    ⑤ アニメーション再生
    \`\`\`
`);