import dedent from "dedent";

export const detail = dedent(`
    ツールチップは、ボタンやアイコンの意味を補足するために使われる<br />
    UIをシンプルに保ちながら、必要な情報だけ後から表示できるのが特徴

    #### 使用場面
    1. アイコンボタンの説明
        - ゴミ箱アイコン →「削除」
        - 編集アイコン →「編集」
        - 設定アイコン →「設定を開く」

    2. フォーム補足説明
        - パスワード条件（8文字以上など）
        - 入力形式のヒント（メールアドレス形式）

    3. UIが狭い場所の補足
        - テーブルの列説明
        - ダッシュボードの数値意味

    4. 無料プラン制限の説明
        - 「この機能は有料プランのみ」
        - 「1日10回まで利用可能」

    ---

    #### 使用例① ホバーとクリック両方対応
    \`\`\`html
    <div class="tooltip-wrapper">
        <button id="btn">?</button>
        <div id="tooltip" class="tooltip">
            削除すると元に戻せません
        </div>
    </div>
    \`\`\`

    \`\`\`css
    .tooltip-wrapper {
        position: relative;
        display: inline-block;
    }

    .tooltip {
        position: absolute;
        top: 40px;
        left: 0;
        white-space: nowrap;
        width: max-content;
        padding: 6px 10px;
        font-size: 12px;
        color: white;
        background: black;
        border-radius: 4px;

        opacity: 0;
        transform: translateY(5px);
        transition: 0.2s ease;

        pointer-events: none;
    }

    .tooltip-wrapper:hover .tooltip {
        opacity: 1;
        transform: translateY(0);
    }
    \`\`\`

    \`\`\`js
    const btn = document.querySelector("#btn");
    const tooltip = document.querySelector("#tooltip");

    btn.addEventListener("click", (e) => {
        e.stopPropagation(); // 外側クリック判定と干渉防止
        tooltip.classList.toggle("show");
    });

    // 外側クリックで閉じる
    document.addEventListener("click", (e) => {
        if (!btn.contains(e.target) && !tooltip.contains(e.target)) {
            tooltip.classList.remove("show");
        }
    });
    \`\`\`

    ---

    #### 使用例② APIデータを表示するツールチップ
    \`\`\`js
    button.addEventListener("mouseenter", async () => {
        const res = await fetch("/api/user/tooltip");
        const data = await res.json();

        tooltip.textContent = data.message;
        tooltip.classList.add("show");
    });
    \`\`\`

    - ユーザー情報表示
    - 権限説明
    - プラン情報

    ---

    #### 使用例③ 遅延表示（ホバー直後に出さない）
    \`\`\`js
    let timer;

    button.addEventListener("mouseenter", () => {
        timer = setTimeout(() => {
            tooltip.classList.add("show");
        }, 300);
    });

    button.addEventListener("mouseleave", () => {
        clearTimeout(timer);
        tooltip.classList.remove("show");
    });
    \`\`\`

    - UI誤爆防止
    - 高密度UI（管理画面）

    ---

    #### 使用例④ スクロール連動ツールチップ
    \`\`\`js
    window.addEventListener("scroll", () => {
        tooltip.classList.remove("show");
    });
    \`\`\`

    - ダッシュボード
    - グラフUI

    ---

    #### 使用例⑤ 複数ツールチップの制御
    \`\`\`js
    document.querySelectorAll(".tooltip-btn").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            document.querySelectorAll(".tooltip").forEach(t => {
            t.classList.remove("show");
            });

            btn.querySelector(".tooltip").classList.add("show");
        });
    });
    \`\`\`

    - テーブルUI
    - メニューUI

    ---

    #### ポイント
    - ツールチップは「情報を隠して必要時だけ表示」
    - UIをスッキリさせるために必須テクニック
    - hover / focus / click で表示制御することが多い
    - transition と opacity を組み合わせると自然に見える

    #### CSSだけでいいケース
    - シンプルなホバー説明
    - 固定位置の説明
    - デザイン目的の補足

    #### JSが必要なケース
    - 位置計算が必要
    - モバイル対応（click制御）
    - APIデータ表示
    - 遅延制御
    - スクロール制御
    - 複雑なUI管理
`);