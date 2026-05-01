import dedent from "dedent";

export const detail = dedent(`
    **0から目標の数値まで徐々に増えていくアニメーション**

    #### 使用場面
    - 売上・実績表示
    - ECサイトの信頼性表示
        - 累計販売数
        - レビュー数
    - LP（ランディングページ）
        - 導入企業数
        - 満足度
    - アプリの統計画面
        - 総プレイ時間
        - 達成率
    - フォロワー・SNS指標

    ---

    #### 使用例①
    \`\`\`html
    <div class="container" id="targetSection">
        <h1 class="count" data-target="5000">0</h1>
    </div>
    \`\`\`

    \`\`\`css
    .container {
        text-align: center;
        margin-top: 100px;
        font-family: sans-serif;
    }

    .count {
        font-size: 48px;
        font-weight: bold;
        color: #22c55e;
    }
    \`\`\`

    \`\`\`js
    function countUp(el, target) {
        let current = 0;
        const step = target / 60;

        const timer = setInterval(() => {
            current += step;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            el.textContent = Math.floor(current);
        }, 16);
    }

    const section = document.querySelector("#targetSection");
    const el = document.querySelector(".count");

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            countUp(el, 5000);
            observer.disconnect();
        }
    });

    observer.observe(section);
    \`\`\`

    ---

    #### 使用例② API取得後に実行
    データ取得後に数値をアニメーション表示

    \`\`\`html
    <h1 class="count" id="sales">0</h1>
    \`\`\`

    \`\`\`js
    function countUp(el, target) {
        let current = 0;
        const step = target / 60;

        const timer = setInterval(() => {
            current += step;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            el.textContent = Math.floor(current);
        }, 16);
    }

    async function fetchData() {
        const res = await fetch("/api/sales");
        const data = await res.json();

        const el = document.querySelector("#sales");
        countUp(el, data.totalSales);
    }

    fetchData();
    \`\`\`

    - ダッシュボード
    - 管理画面
    - リアルタイム統計

    ---

    #### 使用例③ ページを開いた瞬間に1回だけ実行
    \`\`\`html
    <h1 class="count" id="users" data-target="3200">0</h1>
    \`\`\`

    \`\`\`js
    function countUp(el, target) {
        let current = 0;
        const step = target / 60;

        const timer = setInterval(() => {
            current += step;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            el.textContent = Math.floor(current);
        }, 16);
    }

    window.addEventListener("DOMContentLoaded", () => {
        const el = document.querySelector("#users");
        const target = Number(el.dataset.target);

        countUp(el, target);
    });
    \`\`\`

    - トップページの実績表示
    - サービス紹介の数字
    - ヒーローセクション
`);