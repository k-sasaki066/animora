import dedent from "dedent";

export const detail = dedent(`
    トースト通知とは、画面の端に数秒だけ表示される小さな通知UI <br />
    ユーザー操作を邪魔せず、結果だけを伝えたい時に使われる

    #### 使用場面
    - 保存完了
    - コピー完了
    - ログイン成功
    - エラー発生
    - 商品をカート追加
    - 更新完了
    - メッセージ受信

    #### 使用例
    \`\`\`html
    <div id="toast" class="toast">
        保存しました
    </div>

    <button id="btn">保存</button>
    \`\`\`

    \`\`\`css
    .toast {
        position: fixed;
        top: 20px;
        right: 20px;
        background: #222;
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        opacity: 0;
        pointer-events: none;
    }

    .toast.show {
        animation: toastIn 0.4s ease forwards;
    }

    .toast.hide {
        animation: toastOut 0.35s ease forwards;
    }

    @keyframes toastIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes toastOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }

        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
    \`\`\`

    \`\`\`js
    const toast = document.querySelector("#toast");
    const btn = document.querySelector("#btn");

    btn.addEventListener("click", () => {
        toast.classList.remove("hide");
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
            toast.classList.add("hide");
        }, 2500);
    });
    \`\`\`

    \`\`\`txt
    ボタン押下
    ↓
    右上に「保存しました」表示
    ↓
    2.5秒後に自動で消える
    \`\`\`

    ---

    \`\`\`txt
    ECサイト例    商品をカートに追加しました
    SaaS例       設定を保存しました
    SNS例        コピーしました
    管理画面例     ユーザーを削除しました
    \`\`\`

    #### UXポイント
    - 数秒で自動消滅
    - モーダルのように操作を止めない
    - 成功 / 失敗 を即時伝達できる
    - 画面端表示が一般的

    #### よく使う位置
    - 右上
    - 右下
    - 上中央
    - 下中央（スマホ）
`);