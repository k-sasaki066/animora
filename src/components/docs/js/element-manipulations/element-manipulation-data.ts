import dedent from "dedent";


export type ElementManipulationItem = {
    process: string;
    detail?: string;
};

export const elementColumns = [
    { key: "process", label: "要素追加・削除" },
];

export const elementData: ElementManipulationItem[] = [
    {
        process: "末尾に要素追加（append）",
        detail: dedent(`
            親要素の最後に新しい要素を追加する

            #### 使用場面
            - Todo追加
            - チャットメッセージ追加
            - コメント一覧追加
            - 商品カード追加
            - API取得データを一覧表示
            - 通知を下に追加

            #### 基本構文
            \`\`\`js
            parent.append(child);
            \`\`\`

            | 引数 | 内容 |
            |---|---|
            | parent | 親要素 |
            | child | 追加する要素 |

            ---

            #### 基本例
            \`\`\`html
            <ul id="list"></ul>
            \`\`\`

            \`\`\`js
            const list = document.querySelector("#list");
            const li = document.createElement("li");

            li.textContent = "新しい項目";

            list.append(li);
            \`\`\`

            #### 実行結果
            \`\`\`html
            <ul id="list">
            <li>新しい項目</li>
            </ul>
            \`\`\`

            ---

            #### appendを2回使うと順番に追加される
            \`\`\`js
            list.append(document.createElement("li"));
            list.append(document.createElement("li"));
            \`\`\`

            結果
            \`\`\`text
            1件目
            2件目
            \`\`\`
            👉 常に最後に追加される

            ---

            #### Todo追加
            \`\`\`js
            addBtn.addEventListener("click", () => {
                const li = document.createElement("li");
                li.textContent = input.value;

                list.append(li);
            });
            \`\`\`

            ---

            #### チャットメッセージ追加
            \`\`\`js
            const msg = document.createElement("p");
            msg.textContent = "こんにちは";

            chatBox.append(msg);
            \`\`\`
            新しいメッセージを下に積み上げるUI

            ---

            #### APIデータ一覧表示
            \`\`\`js
            data.forEach(user => {
                const li = document.createElement("li");
                li.textContent = user.name;

                list.append(li);
            });
            \`\`\`

            ---

            #### append と innerHTML の違い

            | 方法 | 特徴 |
            |---|---|
            | append() | 要素追加に強い、安全 |
            | innerHTML += | HTML文字列追加、再描画あり |
            👉  \`append()\` の方が安定しやすい

            ---

            #### append の便利ポイント
            文字列も追加できる
            \`\`\`js
            list.append("テキスト");
            \`\`\`

            複数同時追加も可能
            \`\`\`js
            list.append(li1, li2, li3);
            \`\`\`

            ---

            #### 注意点
            - 追加先の親要素が存在しないとエラー
            - 同じ要素を append すると「移動」になる
            - 大量追加時は DocumentFragment が効率的
        `),
    },
    {
        process: "先頭に要素追加（prepend）",
        detail: dedent(`
            親要素の先頭に要素を追加する

            #### 使用場面
            - 最新通知を上に表示
            - 新着コメントを先頭追加
            - チャット最新メッセージを上表示
            - Todoを新しい順で並べる
            - 更新履歴の追加

            #### 基本構文
            \`\`\`js
            parent.prepend(element);
            \`\`\`

            ---

            #### 基本例
            \`\`\`html
            <ul id="list">
                <li>古いデータ</li>
            </ul>
            \`\`\`

            \`\`\`js
            const list = document.querySelector("#list");

            const li = document.createElement("li");
            li.textContent = "最新データ";

            list.prepend(li);
            \`\`\`

            #### 実行結果
            \`\`\`html
            <ul id="list">
                <li>最新データ</li>
                <li>古いデータ</li>
            </ul>
            \`\`\`
            👉 新しい要素が一番上に入る

            ---

            #### appendとの違い
            \`\`\`js
            list.append(li);   // 一番下に追加
            list.prepend(li); // 一番上に追加
            \`\`\`

            ---

            #### 通知一覧
            \`\`\`js
            const notice = document.createElement("li");
            notice.textContent = "新しい通知があります";

            noticeList.prepend(notice);
            \`\`\`
            最新通知を上に見せたいときに使う

            ---

            #### コメント投稿
            \`\`\`js
            const comment = document.createElement("div");
            comment.textContent = "とても参考になりました！";

            comments.prepend(comment);
            \`\`\`
            投稿したコメントをすぐ上に表示できる

            ---

            #### Todoアプリ
            \`\`\`js
            const task = document.createElement("li");
            task.textContent = "新しいタスク";

            todoList.prepend(task);
            \`\`\`
            新しいタスクを上から管理できる

            ---

            #### 文字列も追加できる
            \`\`\`js
            list.prepend("先頭テキスト");
            \`\`\`
            ただし実務では要素追加の方が多い

            ---

            #### ポイント
            - 最新順表示と相性が良い
            - appendより通知UIでよく使う
            - Reactでは state 更新 + map で代用されることが多い
            - 大量追加時は DocumentFragment を使うと高速
        `),
    },
    {
        process: "HTML文字列で追加（innerHTML）",
        detail: dedent(`
            HTML文字列を要素の中に挿入してまとめて画面に追加できる機能

            #### 使用場面
            - カード一覧生成
            - APIデータ描画
            - 商品一覧表示
            - コメント一覧表示
            - テーブル行追加
            - モーダル内容差し替え

            #### 基本
            \`\`\`html
            <ul id="list"></ul>
            \`\`\`

            \`\`\`js
            const list = document.querySelector("#list");

            list.innerHTML += "<li>追加項目</li>";
            \`\`\`

            実行結果
            \`\`\`html
            <ul id="list">
            <li>追加項目</li>
            </ul>
            \`\`\`

            ---

            #### 複数要素をまとめて追加
            \`\`\`js
            list.innerHTML += \`
            <li>りんご</li>
            <li>バナナ</li>
            <li>みかん</li>
            \`;
            \`\`\`

            ---

            #### 商品カード一覧
            \`\`\`js
            products.forEach(item => {
            list.innerHTML += \`
                <div class="card">
                <h3>\${item.name}</h3>
                <p>¥\${item.price}</p>
                </div>
            \`;
            });
            \`\`\`

            ---

            #### API取得後に描画
            \`\`\`js
            fetch("/api/users")
            .then(res => res.json())
            .then(users => {
                users.forEach(user => {
                list.innerHTML += \`<li>\${user.name}</li>\`;
                });
            });
            \`\`\`

            ---

            #### ⚠️ 注意点① 再描画が発生する
            \`\`\`js
            list.innerHTML += "<li>A</li>";
            list.innerHTML += "<li>B</li>";
            list.innerHTML += "<li>C</li>";
            \`\`\`
            上記は毎回HTML全体を書き直すため、
            要素数が多いと重くなりやすい。

            ---

            #### ⚠️ 注意点② イベントが消えることがある
            既存要素も再生成されるため、
            \`\`\`js
            button.addEventListener(...)
            \`\`\`
            で付けたイベントが消える場合があります。

            ---

            #### 改善方法（まとめて1回代入）
            \`\`\`js
            let html = "";

            products.forEach(item => {
            html += \`<li>\${item.name}</li>\`;
            });

            list.innerHTML = html;
            \`\`\`
            👉 ループ中に何回も \`+=\` しない

            ---

            #### より実務向き
            \`\`\`js
            list.insertAdjacentHTML(
                "beforeend",
                "<li>追加項目</li>"
            );
            \`\`\`
            👉 再描画コストが少なく安全

            ---

            #### 危険ポイント（XSS）
            外部入力値をそのまま入れない
            \`\`\`js
            list.innerHTML = userInput;
            \`\`\`
            悪意ある script が実行される可能性があります。
        `),
    },
    {
        process: "指定位置に追加（insertAdjacentHTML）",
        detail: dedent(`
            HTML文字列を、既存要素の好きな位置へ追加できる<br />
            append() や prepend() は\`要素ノード追加\`<br />
            insertAdjacentHTML() は \`HTML文字列を直接挿入できる\` のが特徴

            #### 使用場面
            - カード一覧追加
            - APIデータ描画
            - 通知メッセージ追加
            - コメント投稿追加
            - モーダル内部HTML生成

            #### 基本構文
            \`\`\`js
            element.insertAdjacentHTML(position, html);
            \`\`\`
            - position：挿入位置
            - html：追加するHTML文字列

            位置指定
            \`\`\`txt
            - beforebegin   要素の前
            - afterbegin    要素内の先頭
            - beforeend     要素内の末尾
            - afterend      要素の後
            \`\`\`

            ---

            #### 末尾に追加
            \`\`\`html
            <div id="box">
                <p>既存テキスト</p>
            </div>
            \`\`\`

            \`\`\`js
            const box = document.querySelector("#box");

            box.insertAdjacentHTML(
                "beforeend",
                "<p>追加テキスト</p>"
            );
            \`\`\`

            実行後
            \`\`\`html
            <div id="box">
                <p>既存テキスト</p>
                <p>追加テキスト</p>
            </div>
            \`\`\`

            ---

            #### 挿入位置 4種類
            #### ① beforebegin（要素の前）
            \`\`\`js
            box.insertAdjacentHTML(
                "beforebegin",
                "<p>boxの前</p>"
            );
            \`\`\`

            \`\`\`html
            <p>boxの前</p>
            <div id="box"></div>
            \`\`\`

            ---

            #### ② afterbegin（要素内の先頭）
            \`\`\`js
            box.insertAdjacentHTML(
                "afterbegin",
                "<p>先頭追加</p>"
            );
            \`\`\`

            \`\`\`html
            <div id="box">
                <p>先頭追加</p>
                ...
            </div>
            \`\`\`

            ---

            #### ③ beforeend（要素内の末尾）
            \`\`\`js
            box.insertAdjacentHTML(
                "beforeend",
                "<p>末尾追加</p>"
            );
            \`\`\`

            \`\`\`html
            <div id="box">
                ...
                <p>末尾追加</p>
            </div>
            \`\`\`

            ---

            #### ④ afterend（要素の後）
            \`\`\`js
            box.insertAdjacentHTML(
                "afterend",
                "<p>boxの後</p>"
            );
            \`\`\`

            \`\`\`html
            <div id="box"></div>
            <p>boxの後</p>
            \`\`\`

            ---

            #### 通知追加
            \`\`\`js
            noticeList.insertAdjacentHTML(
                "afterbegin",
                "<li>新着メッセージがあります</li>"
            );
            \`\`\`
            最新通知を上に表示

            ---

            #### 商品カード追加
            \`\`\`js
            products.insertAdjacentHTML(
            "beforeend",
            \`
            <div class="card">
                <h3>商品A</h3>
                <p>¥980</p>
            </div>
            \`
            );
            \`\`\`

            ---

            #### ⚠️ 注意点
            - 外部入力値をそのまま入れるとXSS危険
            - 大量追加時はテンプレート化すると管理しやすい
            - Reactでは通常使わず JSXで描画する

            ❌ 危険例
            \`\`\`js
            box.insertAdjacentHTML(
                "beforeend",
                userInput
            );
            \`\`\`
        `),
    },
    {
        process: "要素削除（remove）",
        detail: dedent(`
            指定したHTML要素そのものを画面から削除する処理<br />
            非表示（display:none）とは違い、要素自体を削除する点が特徴

            #### 使用場面
            - Todo削除
            - モーダル閉じる
            - 通知削除
            - コメント削除
            - 不要な広告バナー削除
            - 条件に応じたUI削除

            #### 基本
            \`\`\`html
            <div class="item">削除対象</div>
            \`\`\`

            \`\`\`js
            const item = document.querySelector(".item");

            item.remove();
            \`\`\`

            実行後
            \`\`\`html
            <!-- 要素が消える -->
            \`\`\`

            ---

            #### Todo削除
            \`\`\`html
            <li id="task">買い物に行く</li>
            <button id="deleteBtn">削除</button>
            \`\`\`

            \`\`\`js
            const task = document.querySelector("#task");
            const deleteBtn = document.querySelector("#deleteBtn");

            deleteBtn.addEventListener("click", () => {
                task.remove();
            });
            \`\`\`

            ---

            #### 通知を閉じる
            \`\`\`html
            <div id="notice">
                保存しました
                <button id="close">×</button>
            </div>
            \`\`\`

            \`\`\`js
            const notice = document.querySelector("#notice");
            const close = document.querySelector("#close");

            close.addEventListener("click", () => {
                notice.remove();
            });
            \`\`\`

            ---

            #### 自分自身を削除
            \`\`\`js
            button.addEventListener("click", (e) => {
                e.target.remove();
            });
            \`\`\`
            クリックしたボタン自身を削除できる

            ---

            #### 複数要素を削除
            \`\`\`js
            document.querySelectorAll(".done").forEach(item => {
                item.remove();
            });
            \`\`\`
            完了済みタスクをまとめて削除

            ---

            #### 非表示との違い
            \`\`\`js
            item.style.display = "none";
            \`\`\`
            👉 見えないだけで要素は存在する

            \`\`\`js
            item.remove();
            \`\`\`
            👉 要素自体が消える

            ---

            #### ポイント
            - 削除確認ダイアログと組み合わせることが多い
            - Reactでは state 更新で削除するのが基本
            - アニメーション後に remove() するとUXが良い
            - querySelector が null の場合はエラーになるので注意

            \`\`\`js
            item?.remove();
            \`\`\`
        `),
    },
    {
        process: "子要素を全削除",
        detail: dedent(`
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
        `),
    },
    {
        process: "特定要素だけ削除",
        detail: dedent(`
            条件一致した要素だけ削除する<br />
            全体を消すのではなく、必要な要素だけピンポイントで削除したい時に使う

            #### 使用場面
            - 完了したTodoだけ削除
            - 読了済み通知だけ削除
            - 特定IDの商品カード削除
            - 閉じるボタンを押したメッセージ削除

            #### 基本
            \`\`\`html
            <li class="done">買い物に行く</li>
            \`\`\`

            \`\`\`js
            const done = document.querySelector(".done");

            done.remove();
            \`\`\`
            👉 class="done" の要素だけ削除される

            ---

            #### Todoアプリ例（完了済みだけ削除）
            \`\`\`html
            <ul id="list">
                <li>勉強する</li>
                <li class="done">掃除する</li>
                <li>買い物する</li>
            </ul>
            \`\`\`

            \`\`\`js
            const done = document.querySelector(".done");

            done.remove();
            \`\`\`

            実行後
            \`\`\`html
            <ul id="list">
                <li>勉強する</li>
                <li>買い物する</li>
            </ul>
            \`\`\`

            ---

            #### 複数ある場合（querySelectorAll）
            \`\`\`js
            const dones = document.querySelectorAll(".done");

            dones.forEach(item => item.remove());
            \`\`\`
            👉 完了済みタスクを全部削除できる

            ---

            #### ボタン押下で削除
            \`\`\`html
            <div class="notice">
                通知があります
                <button id="close">×</button>
            </div>
            \`\`\`

            \`\`\`js
            const close = document.querySelector("#close");
            const notice = document.querySelector(".notice");

            close.addEventListener("click", () => {
                notice.remove();
            });
            \`\`\`

            ---

            #### ID指定で削除
            \`\`\`js
            const item = document.querySelector("#product-12");

            item.remove();
            \`\`\`
            👉 商品IDごとの削除などで使う

            ---

            #### ⚠️ 注意点
            \`\`\`js
            const item = document.querySelector(".done");
            \`\`\`
            要素が存在しないと \`null\` になるため、

            \`\`\`js
            if (item) {
                item.remove();
            }
            \`\`\`
            と書くと安全

            ---

            #### ポイント
            - 1件だけなら \`querySelector()\`
            - 複数削除なら \`querySelectorAll()\`
            - Reactでは state更新で削除することが多い
            - Vanilla JSでは \`remove()\` が基本
        `),
    },
    {
        process: "要素置き換え（replaceWith）",
        detail: dedent(`
            既存の要素を、新しい要素へ丸ごと差し替える処理<br />
            テキスト変更ではなく **HTML要素そのものを入れ替える** ため、
            見た目・属性・構造・イベント対象までまとめて変更できる

            #### 使用場面
            - 編集モード切替
            - ボタン切替
            - ローディング → 完了表示
            - 画像 → 動画切替
            - 空状態 → データ表示
            - ログイン前 → ログイン後UI変更

            #### 基本構文
            \`\`\`js
            oldElement.replaceWith(newElement);
            \`\`\`
            oldElement を削除し、その場所へ newElement を挿入する。

            ---

            #### 基本例（ボタン置き換え）
            \`\`\`html
            <button id="loginBtn">ログイン</button>
            \`\`\`

            \`\`\`js
            const oldBtn = document.querySelector("#loginBtn");

            const newBtn = document.createElement("button");
            newBtn.textContent = "ログアウト";

            oldBtn.replaceWith(newBtn);
            \`\`\`

            実行結果
            \`\`\`html
            <button>ログアウト</button>
            \`\`\`

            ---

            #### 編集モード切替
            表示用テキストを input に変える

            \`\`\`html
            <p id="name">田中 太郎</p>
            \`\`\`

            \`\`\`js
            const name = document.querySelector("#name");

            const input = document.createElement("input");
            input.value = name.textContent;

            name.replaceWith(input);
            \`\`\`

            使用場面
            - プロフィール編集
            - インライン編集
            - タイトル変更UI

            ---

            #### ローディング置き換え
            \`\`\`html
            <div id="loading">Loading...</div>
            \`\`\`

            \`\`\`js
            const loading = document.querySelector("#loading");

            const result = document.createElement("div");
            result.textContent = "データ取得完了";

            loading.replaceWith(result);
            \`\`\`

            使用場面
            - API取得完了
            - 画像読み込み完了
            - 非同期通信UI更新

            ---

            #### 画像 → 動画
            \`\`\`js
            const img = document.querySelector("img");

            const video = document.createElement("video");
            video.src = "/movie.mp4";
            video.controls = true;

            img.replaceWith(video);
            \`\`\`

            ---

            #### 文字列でも置換できる
            \`\`\`js
            oldBox.replaceWith("完了しました");
            \`\`\`
            テキストノードに置き換わる

            ---

            #### ⚠️ 注意点
            - 古い要素はDOMから消える
            - 古い要素に付いていたイベントも消える
            - 再利用したいなら変数保持しておく
            - querySelectorし直す必要がある場合もある

            ---

            #### style変更との違い
            style変更 → 同じ要素を見た目だけ変更
            \`\`\`js
            box.style.display = "none";
            \`\`\`

            replaceWith → 要素自体を別物に変更
            \`\`\`js
            box.replaceWith(newBox);
            \`\`\`
        `),
    },
    {
        process: "複製して追加（cloneNode）",
        detail: dedent(`
            既存のHTML要素をコピー（複製）して、
            同じ内容の要素を新しく追加する処理

            同じ構造のUIを何個も増やしたい時に便利

            #### 使用場面
            - 商品カード複製
            - フォーム入力欄追加
            - チャットテンプレート複製
            - ToDo項目追加
            - UIパーツ量産

            #### 基本構文
            \`\`\`js
            const copy = element.cloneNode(true);
            parent.append(copy);
            \`\`\`

            ---

            #### true / false の違い
            **要素本体だけコピー（子要素なし）**
            \`\`\`js
            cloneNode(false)
            \`\`\`

            \`\`\`html
            <div class="card">
                <p>商品名</p>
            </div>
            \`\`\`

            結果
            \`\`\`html
            <div class="card"></div>
            \`\`\`

            ---

            **子要素も含めて丸ごとコピー**
            \`\`\`js
            cloneNode(true)
            \`\`\`

            結果
            \`\`\`html
            <div class="card">
                <p>商品名</p>
            </div>
            \`\`\`

            ---

            #### 商品カード追加
            \`\`\`html
            <div id="list">
                <div class="card">
                    <h3>りんご</h3>
                    <p>100円</p>
                </div>
            </div>
            \`\`\`

            \`\`\`js
            const list = document.querySelector("#list");
            const card = document.querySelector(".card");

            const copy = card.cloneNode(true);

            list.append(copy);
            \`\`\`
            👉 同じカードが追加される

            ---

            #### 入力欄追加
            \`\`\`html
            <div id="form">
                <input type="text" class="skill" />
            </div>
            \`\`\`

            \`\`\`js
            const form = document.querySelector("#form");
            const input = document.querySelector(".skill");

            const copy = input.cloneNode(true);

            form.append(copy);
            \`\`\`
            👉 スキル入力欄を増やせる

            ---

            #### テンプレート複製して内容変更
            \`\`\`js
            const copy = card.cloneNode(true);

            copy.querySelector("h3").textContent = "みかん";
            copy.querySelector("p").textContent = "150円";

            list.append(copy);
            \`\`\`
            👉 元のカード構造を再利用できる

            ---

            #### ⚠️ 注意点
            - id属性もコピーされる（重複注意）
            - イベントはコピーされない場合がある
            - フォーム値は状態確認が必要

            ---

            #### ポイント
            - createElementで毎回作るより速い場合がある
            - UIテンプレート量産に便利
            - 現代Reactでは map描画が主流だが、Vanilla JSではよく使う
        `),
    },
    {
        process: "存在確認して追加",
        detail: dedent(`
            同じ要素がすでに画面内に存在するか確認してから追加する処理<br />
            何も確認せず毎回追加すると、

            - モーダルが2重表示される
            - 通知が何個も増える
            - ローディング画面が重複する
            - Toastが大量発生する

            などの不具合につながるため、
            実務では追加前の存在確認がよく使われる

            #### 使用場面
            - 通知重複防止
            - モーダル多重生成防止
            - ローディングUIの重複防止
            - エラーメッセージの多重表示
            - Toast通知の連打防止

            #### 基本
            \`\`\`js
            if (!document.querySelector(".modal")) {
                document.body.append(modal);
            }
            \`\`\`

            #### 解説
            \`\`\`js
            document.querySelector(".modal")
            \`\`\`
            すでに .modal が存在すれば要素を返す<br />
            存在しなければ \`null\`

            \`\`\`js
            !document.querySelector(".modal")
            \`\`\`
            は「存在しないなら true」になる。

            ---

            #### モーダル生成
            \`\`\`js
            function openModal() {
                if (document.querySelector(".modal")) return;

                const modal = document.createElement("div");
                modal.className = "modal";
                modal.textContent = "確認画面";

                document.body.append(modal);
            }
            \`\`\`
            ボタン連打しても1個しか生成されない。

            ---

            #### ローディング表示
            \`\`\`js
            function showLoading() {
                if (document.querySelector(".loading")) return;

                const loading = document.createElement("div");
                loading.className = "loading";
                loading.textContent = "Loading...";

                document.body.append(loading);
            }
            \`\`\`
            API連続実行でも重複しない

            ---

            #### 通知バナー
            \`\`\`js
            if (!document.querySelector(".notice")) {
                const notice = document.createElement("div");
                notice.className = "notice";
                notice.textContent = "保存しました";

                document.body.append(notice);
            }
            \`\`\`

            ---

            #### より安全な方法（id指定）
            \`\`\`js
            if (!document.querySelector("#modal")) {
            }
            \`\`\`
            classより一意性が高い。

            ---

            #### ポイント
            - append前に存在確認するとバグ防止になる
            - モーダル・通知・ローディングで特によく使う
            - 実務ではかなり重要な考え方
        `),
    },
];