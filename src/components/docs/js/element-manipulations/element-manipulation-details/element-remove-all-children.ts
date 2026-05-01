import dedent from "dedent";

export const detail = dedent(`
    親要素の中に入っている **すべての子要素を削除して空にする処理**<br />
    一覧データの再表示・検索結果の更新・再描画前の初期化などでよく使われる

    #### 使用場面
    - 検索結果リセット
    - API再取得前の一覧初期化
    - Todo一覧の再描画
    - ページネーション切替時
    - フィルター変更時の再表示

    #### 基本の使い方
    \`\`\`html
    <ul id="list">
        <li>りんご</li>
        <li>バナナ</li>
        <li>みかん</li>
    </ul>
    \`\`\`

    \`\`\`js
    const list = document.querySelector("#list");

    list.innerHTML = "";
    \`\`\`

    実行後
    \`\`\`html
    <ul id="list"></ul>
    \`\`\`
    子要素（li）がすべて削除され、空の状態になる

    ---

    #### 検索結果を更新する
    \`\`\`js
    resultList.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name;

        resultList.append(li);
    });
    \`\`\`
    👉 古い検索結果を消して、新しい結果だけ表示する

    ---

    #### Todoを全削除
    \`\`\`js
    clearBtn.addEventListener("click", () => {
        list.innerHTML = "";
    });
    \`\`\`
    👉 一括削除ボタンなどで使う

    ---

    #### 別の書き方（安全）
    \`\`\`js
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    \`\`\`

    #### 違い
    - \`innerHTML = ""\` → シンプルで速い
    - \`removeChild\` → 1件ずつ確実に削除

    ---

    #### ⚠️ 注意点
    - 子要素に付いていたイベントも消える
    - フォーム入力内容も消える
    - 再生成時は再度イベント登録が必要な場合あり

    ---

    #### React / Next.js では？

    Reactでは直接削除せず、
    \`\`\`js
    setItems([]);
    \`\`\`
    のように state を空配列にして再描画するのが基本
`);