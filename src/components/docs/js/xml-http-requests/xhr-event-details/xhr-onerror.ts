import dedent from "dedent";

export const detail = dedent(`
    **通信自体が失敗したときに発火するイベント**<br />
    ネットワークレベルの失敗

    #### 発火するケース
    - サーバーに接続できない
    - URLが間違っている
    - ネットが切れている
    - CORSエラー
    - DNSエラー

    **❌ 発火しないケース（重要）**
    \`\`\`txt
    404 / 500 は onerror ではない
    \`\`\`
    👉 これは「通信成功」扱い → onload が呼ばれる

    ---

    #### 基本コード
    \`\`\`js
    xhr.onerror = () => {
        alert("通信エラーが発生しました");
    };
    \`\`\`

    ---

    #### 再試行（リトライ）
    \`\`\`js
    xhr.onerror = () => {
        retryBtn.style.display = "block";
    };
    retryBtn.addEventListener("click", () => {
        upload(); // 再実行
    });
    \`\`\`

    ---

    #### ローディング解除
    \`\`\`js
    xhr.onerror = () => {
        loading.style.display = "none";
    };
    \`\`\`

    ---

    #### onerror と onload の関係
    \`\`\`js
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("成功");
        } else {
            console.log("サーバーエラー");
        }
    };

    xhr.onerror = () => {
        console.log("通信エラー");
    };
    \`\`\`
    onload → サーバーから返ってきた<br />
    onerror → そもそも届いてない<br />
    onerrorは通信できなかった場合を処理する
`);