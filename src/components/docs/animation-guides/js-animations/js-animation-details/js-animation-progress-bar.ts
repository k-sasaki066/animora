import dedent from "dedent";

export const detail = dedent(`
    進捗バーは、**処理の進み具合を視覚的に伝えるUI**<br />
    ユーザーに「今どのくらい終わっているか」を見せることで、不安を減らしたり離脱を防ぐ役割

    #### 使用場面
    - ファイルアップロード
    - フォーム入力ステップ
    - アンケート進行状況
    - 動画アップロード
    - API処理の進捗
    - ダウンロード進行
    - チュートリアル進行

    #### 使用例
    \`\`\`html
    <div class="progress">
        <div class="bar" id="bar"></div>
    </div>
    <button id="start">開始</button>
    \`\`\`

    \`\`\`css
    .progress {
        width: 100%;
        height: 10px;
        background: #333;
        border-radius: 5px;
        overflow: hidden;
    }

    .bar {
        width: 0%;
        height: 100%;
        background: #4ade80;
        transition: width 0.3s ease;
    }
    \`\`\`

    \`\`\`js
    const bar = document.querySelector("#bar");
    const button = document.querySelector("#start");

    button.addEventListener("click", () => {
        let progress = 0;

        const interval = setInterval(() => {
            progress += 10;

            bar.style.width = progress + "%";

            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 300);
    });
    \`\`\`

    ---

    #### 使用例② フォーム入力進捗
    \`\`\`txt
    Step 1 → Step 2 → Step 3 → 完了
    \`\`\`

    \`\`\`js
    function updateStep(step) {
        const bar = document.querySelector("#bar");

        const percent = (step / 3) * 100;
        bar.style.width = percent + "%";
    }
    \`\`\`

    ---

    #### 使用例③ アップロード進捗
    \`\`\`js
    xhr.upload.onprogress = (e) => {
        const percent = (e.loaded / e.total) * 100;
        bar.style.width = percent + "%";
    };
    \`\`\`

    - 画像アップロード
    - 動画アップロード
    - ファイル送信

    ---

    #### 使用例④ CSSのみで動かす
    \`\`\`css
    .progress {
        width: 100%;
        height: 10px;
        background: #333;
        border-radius: 5px;
        overflow: hidden;
    }

    .bar {
        width: 0%;
        height: 100%;
        background: #4ade80;
        transition: width 0.3s ease;
        animation: loading 2s ease;
    }

    @keyframes loading {
        0% {
            width: 0%;
        }

        50% {
            width: 70%;
        }

        100% {
            width: 100%;
        }
    }
    \`\`\`
`);