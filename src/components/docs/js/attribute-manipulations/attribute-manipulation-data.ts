import dedent from "dedent";

export type AttributeItem = {
    process: string;
    detail?: string;
};

export const attributeColumns = [
    { key: "process", label: "属性操作" },
];

export const attributeData: AttributeItem[] = [
    {
        process: "属性値を取得（getAttribute）",
        detail: dedent(`
            HTML要素に設定されている属性値を取得する

            #### 使用場面
            - img の src取得
            - aタグの href確認
            - data属性の取得
            - フォーム初期値確認

            #### 基本構文
            \`\`\`js
            element.getAttribute("属性名");
            \`\`\`

            ---

            #### 画像URL取得
            \`\`\`html
            <img id="photo" src="/cat.jpg" alt="猫">
            \`\`\`

            \`\`\`js
            const img = document.querySelector("#photo");

            console.log(img.getAttribute("src"));
            // /cat.jpg
            \`\`\`
            👉 現在表示中の画像パスを取得できる

            ---

            #### リンク先取得

            \`\`\`html
            <a id="link" href="/contact">お問い合わせ</a>
            \`\`\`

            \`\`\`js
            const link = document.querySelector("#link");

            console.log(link.getAttribute("href"));
            // /contact
            \`\`\`
            👉 遷移先URL確認や差し替え前確認に使う

            ---

            #### data属性取得

            \`\`\`html
            <button id="btn" data-id="15">詳細</button>
            \`\`\`

            \`\`\`js
            const btn = document.querySelector("#btn");

            console.log(btn.getAttribute("data-id"));
            // 15
            \`\`\`
            👉 商品ID・投稿ID・カテゴリID取得で使う

            ---

            #### フォーム属性取得
            \`\`\`html
            <input id="name" placeholder="名前を入力">
            \`\`\`

            \`\`\`js
            const input = document.querySelector("#name");

            console.log(input.getAttribute("placeholder"));
            // 名前を入力
            \`\`\`

            ---

            #### 存在しない属性の場合
            \`\`\`js
            img.getAttribute("title");
            // null
            \`\`\`
            👉 属性が無いと \`null\`

            ---

            #### 商品画像切替前に元URL保存

            \`\`\`js
            const original = img.getAttribute("src");
            \`\`\`

            ---

            #### 外部リンク判定
            \`\`\`js
            const href = link.getAttribute("href");

            if (href.startsWith("http")) {
                console.log("外部リンク");
            }
            \`\`\`

            ---

            #### getAttribute と プロパティの違い
            \`\`\`js
            img.getAttribute("src")  HTMLに書かれている元の値
            img.src                  ブラウザが変換後の現在値
            \`\`\`

            例：
            \`\`\`html
            <img src="/cat.jpg">
            \`\`\`

            \`\`\`js
            img.getAttribute("src");
            // /cat.jpg

            img.src;
            // http://localhost:3000/cat.jpg
            \`\`\`

            👉 この違いがかなり重要

            ---

            #### ポイント

            - HTML属性をそのまま取得したいなら \`getAttribute()\`
            - 存在しない場合は \`null\`
            - data属性取得にも便利
            - 状態確認・切替前の保存でよく使う
        `),
    },
    {
        process: "属性値を変更（setAttribute）",
        detail: dedent(`
            要素の属性値を変更・追加する<br />
            JavaScriptからタグの設定情報を書き換えることで、
            表示内容・リンク先・入力制御などを動的に変更できる

            #### 使用場面
            - 画像URL変更（src）
            - リンク先変更（href）
            - 新しいタブで開く（target）
            - 入力欄制御（disabled / readonly）
            - class / id の付与
            - data属性の追加

            #### 基本構文
            \`\`\`js
            element.setAttribute("属性名", "値");
            \`\`\`

            ---

            #### 画像を差し替える
            \`\`\`html
            <img id="photo" src="/cat.jpg">
            \`\`\`

            \`\`\`js
            const img = document.querySelector("#photo");

            img.setAttribute("src", "/dog.jpg");
            \`\`\`

            実行後
            \`\`\`html
            <img id="photo" src="/dog.jpg">
            \`\`\`
            👉 商品画像切替・ギャラリーでよく使う

            ---

            #### リンク先変更
            \`\`\`html
            <a id="link" href="/about">会社概要</a>
            \`\`\`

            \`\`\`js
            const link = document.querySelector("#link");

            link.setAttribute("href", "/contact");
            \`\`\`
            👉 キャンペーンページ切替・ABテスト

            ---

            #### target追加（別タブで開く）
            \`\`\`js
            link.setAttribute("target", "_blank");
            \`\`\`
            👉 外部サイトリンクでよく使う

            ---

            #### ボタン無効化
            \`\`\`html
            <button id="submit">送信</button>
            \`\`\`

            \`\`\`js
            const btn = document.querySelector("#submit");

            btn.setAttribute("disabled", "");
            \`\`\`
            👉 二重送信防止

            ---

            #### data属性追加
            \`\`\`js
            btn.setAttribute("data-id", "15");
            \`\`\`

            \`\`\`html
            <button data-id="15">
            \`\`\`
            👉 商品ID・投稿ID管理

            ---

            #### setAttribute と プロパティ代入の違い
            \`\`\`js
            img.setAttribute("src", "/dog.jpg");
            img.src = "/dog.jpg";
            \`\`\`

            どちらも変更できるが、

            - HTML属性として扱いたい → setAttribute()
            - JSで自然に扱いたい → プロパティ代入

            \`\`\`js
            img.src = "/dog.jpg";
            link.href = "/contact";
            button.disabled = true;
            \`\`\`

            ---

            #### 注意点

            ##### disabled属性
            \`\`\`js
            btn.setAttribute("disabled", "");
            \`\`\`
            値より「属性が存在するか」で判定される


            ##### 存在しない要素
            \`\`\`js
            const img = document.querySelector("#photo");
            \`\`\`
            要素が無いと null になるため注意
        `),
    },
    {
        process: "属性削除（removeAttribute）",
        detail: dedent(`
            HTML要素についている属性を削除する処理

            #### 使用場面
            - disabled解除（ボタンを押せるようにする）
            - readonly解除（入力可能にする）
            - hidden解除（再表示する）
            - style削除（直接指定したCSS解除）
            - required解除（必須入力解除）
            - target解除（別タブ表示解除）

            #### 基本構文
            \`\`\`js
            element.removeAttribute("属性名");
            \`\`\`

            #### disabled解除
            \`\`\`html
            <button id="btn" disabled>送信</button>
            \`\`\`

            \`\`\`js
            const btn = document.querySelector("#btn");

            btn.removeAttribute("disabled");
            \`\`\`

            実行後
            \`\`\`html
            <button id="btn">送信</button>
            \`\`\`
            👉 ボタンが押せるようになる

            ---

            #### readonly解除
            \`\`\`html
            <input id="name" value="田中" readonly>
            \`\`\`

            \`\`\`js
            const input = document.querySelector("#name");

            input.removeAttribute("readonly");
            \`\`\`
            👉 入力できるようになる

            ---

            #### hidden解除
            \`\`\`html
            <p id="msg" hidden>保存しました</p>
            \`\`\`

            \`\`\`js
            const msg = document.querySelector("#msg");

            msg.removeAttribute("hidden");
            \`\`\`
            👉 メッセージ表示

            ---

            #### style削除
            \`\`\`js
            box.removeAttribute("style");
            \`\`\`
            👉 style属性ごと削除される

            変更前
            \`\`\`html
            <div style="color:red; font-size:20px;">
            \`\`\`

            変更後
            \`\`\`html
            <div>
            \`\`\`

            ---

            #### API送信完了後にボタン解放
            \`\`\`js
            submitBtn.setAttribute("disabled", true);

            await fetch("/api/send");

            submitBtn.removeAttribute("disabled");
            \`\`\`

            ---

            #### 編集モード切替
            \`\`\`js
            input.removeAttribute("readonly");
            \`\`\`

            ---

            #### 注意点

            ##### 属性が無くてもエラーにならない
            \`\`\`js
            btn.removeAttribute("disabled");
            \`\`\`
            disabled が無くても安全に実行される

            ---

            ##### disabled=false との違い
            \`\`\`js
            btn.disabled = false;
            \`\`\`
            これはプロパティ変更

            \`\`\`js
            btn.removeAttribute("disabled");
            \`\`\`
            これはHTML属性削除

            多くの場合どちらでも動くが、DOM理解としては別物

            ---

            #### ポイント

            - 一時的制御は \`disabled = false\` が多い
            - HTML属性自体を消したいなら \`removeAttribute()\`
            - Reactでは state制御で代替することが多い
        `),
    },
    {
        process: "入力欄を無効化（disabled）",
        detail: dedent(`
            フォーム入力やボタン操作を無効化する<br />
            ユーザーはクリック・入力・選択ができなくなる

            #### 使用場面
            - 送信中の二重送信防止
            - 必須項目未入力時は送信不可
            - 権限のないユーザー操作制限
            - 在庫切れ商品の購入不可
            - ローディング中の操作停止

            #### 基本（ボタン無効化）
            \`\`\`html
            <button id="submit">送信</button>
            \`\`\`

            \`\`\`js
            const button = document.querySelector("#submit");

            button.disabled = true;
            \`\`\`

            実行結果
            \`\`\`text
            送信ボタンが押せなくなる
            \`\`\`

            ---

            #### 再度有効化する
            \`\`\`js
            button.disabled = false;
            \`\`\`

            ---

            #### 入力欄を無効化
            \`\`\`html
            <input id="email" type="email">
            \`\`\`

            \`\`\`js
            const input = document.querySelector("#email");

            input.disabled = true;
            \`\`\`

            実行結果
            \`\`\`text
            メールアドレスを入力できなくなる
            \`\`\`

            ---

            #### 送信中は二重クリック防止
            \`\`\`js
            const button = document.querySelector("#submit");

            button.disabled = true;
            button.textContent = "送信中...";
            \`\`\`

            API完了後
            \`\`\`js
            button.disabled = false;
            button.textContent = "送信";
            \`\`\`

            ---

            #### 必須項目入力まで押せない
            \`\`\`js
            const input = document.querySelector("#name");
            const button = document.querySelector("#submit");

            input.addEventListener("input", () => {
                button.disabled = input.value === "";
            });
            \`\`\`

            ---

            #### チェック同意後に有効化
            \`\`\`js
            check.addEventListener("change", () => {
                button.disabled = !check.checked;
            });
            \`\`\`

            ---

            #### disabled と readonly の違い

            | 項目 | disabled | readonly |
            |---|---|---|
            | 入力不可 | ○ | ○ |
            | フォーカス可 | × | ○ |
            | 送信データに含まれる | × | ○ |

            👉 入力禁止だけなら readonly<br />
            👉 完全停止なら disabled

            ---

            #### CSSで見た目調整

            \`\`\`css
            button:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            \`\`\`

            ---

            #### Reactでは

            \`\`\`jsx
            <button disabled={isLoading}>
            送信
            </button>
            \`\`\`

            ---

            #### ポイント

            - ユーザー誤操作防止に非常に重要
            - 送信中制御でよく使う
            - UX向上に直結する基本機能

        `),
    },
    {
        process: "プレースホルダー変更",
        detail: dedent(`
            入力欄の案内文を状況に応じて動的に切り替える

            #### 使用場面
            - 検索対象切替（商品名 / メーカー名）
            - 言語切替（日本語 / 英語）
            - ログイン画面（メール / ユーザー名）
            - 入力例表示
            - フォーム内容に応じた案内変更

            #### 基本
            \`\`\`html
            <input id="search" placeholder="検索してください">
            \`\`\`

            \`\`\`js
            const input = document.querySelector("#search");

            input.placeholder = "商品名で検索";
            \`\`\`

            実行結果
            \`\`\`text
            変更前: 検索してください
            変更後: 商品名で検索
            \`\`\`

            #### 検索対象切替
            \`\`\`html
            <select id="type">
                <option value="product">商品</option>
                <option value="brand">ブランド</option>
            </select>

            <input id="search">
            \`\`\`

            \`\`\`js
            const type = document.querySelector("#type");
            const input = document.querySelector("#search");

            type.addEventListener("change", () => {
                if (type.value === "product") {
                    input.placeholder = "商品名で検索";
                } else {
                    input.placeholder = "ブランド名で検索";
                }
            });
            \`\`\`

            ---

            #### 多言語切替
            \`\`\`js
            input.placeholder = "Enter your email";
            \`\`\`

            日本語に戻す場合
            \`\`\`js
            input.placeholder = "メールアドレスを入力";
            \`\`\`

            ---

            #### ログイン切替（メール / 電話番号）
            \`\`\`js
            input.placeholder = "電話番号を入力";
            \`\`\`

            ---

            #### ポイント

            - 入力内容そのものではなく「案内文」
            - 値が入力されると placeholder は消える
            - value とは別物

            \`\`\`js
            input.value = "田中";         // 入力値
            input.placeholder = "名前";  // 案内文
            \`\`\`

            ---

            #### 注意点

            placeholder は補助説明なので、
            重要説明をplaceholderだけに頼らず label も併用するのが理想。

            \`\`\`html
            <label>メールアドレス</label>
            <input placeholder="example@test.com">
            \`\`\`
        `),
    },
    {
        process: "チェック状態変更",
        detail: dedent(`
            checkbox / radio の選択状態を操作する<br />
            \`checked\` は true / false で管理され、
            チェック済み・未チェックを切り替えられる

            #### 使用場面
            - 利用規約への同意
            - 一括チェック
            - 初期選択
            - お気に入りON/OFF
            - 設定画面のON/OFF切替

            #### checkbox をONにする
            \`\`\`html
            <input type="checkbox" id="agree">
            \`\`\`

            \`\`\`js
            const check = document.querySelector("#agree");

            check.checked = true;
            \`\`\`

            実行結果
            \`\`\`text
            ☑ チェック済み
            \`\`\`

            ---

            #### checkbox をOFFにする
            \`\`\`js
            check.checked = false;
            \`\`\`

            ---

            #### 現在の状態を取得する
            \`\`\`js
            console.log(check.checked);
            // true or false
            \`\`\`

            ---

            #### ボタンでチェック切替
            \`\`\`html
            <input type="checkbox" id="agree">
            <button id="toggleBtn">切替</button>
            \`\`\`

            \`\`\`js
            const check = document.querySelector("#agree");
            const btn = document.querySelector("#toggleBtn");

            btn.addEventListener("click", () => {
                check.checked = !check.checked;
            });
            \`\`\`

            ---

            #### 一括チェック

            \`\`\`html
            <input type="checkbox" class="item">
            <input type="checkbox" class="item">
            <input type="checkbox" class="item">
            \`\`\`

            \`\`\`js
            const items = document.querySelectorAll(".item");

            items.forEach(item => {
                item.checked = true;
            });
            \`\`\`

            使用場面
            - メール一括選択
            - 商品まとめ削除
            - 権限一覧設定

            ---

            #### radio の初期選択
            \`\`\`html
            <input type="radio" name="plan" id="basic">
            <input type="radio" name="plan" id="pro">
            \`\`\`

            \`\`\`js
            document.querySelector("#pro").checked = true;
            \`\`\`

            ---

            #### ポイント

            - \`checked\` は文字列ではなく真偽値（boolean）
            - ユーザー操作とJS操作の両方で変更される

            ---

            #### Reactでは

            \`\`\`jsx
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
            />
            \`\`\`

            stateで管理することが多い
        `),
    },
    {
        process: "画像のalt変更",
        detail: dedent(`
            画像の \`alt（代替テキスト）\` を変更することで、
            画像の内容をテキストとして補足することができる。

            alt は「画像が表示されない場合」や「スクリーンリーダー」によって読み上げられる、**非常に重要なアクセシビリティ属性**

            #### 使用場面
            - 商品画像の切り替え時に説明も変更
            - SEO対策（検索エンジンに内容を伝える）
            - アクセシビリティ対応（視覚障害者向け）
            - 画像読み込み失敗時の代替表示
            - 多言語対応（説明文の切り替え）

            #### 基本
            \`\`\`html
            <img id="photo" src="/cat.jpg" alt="猫の写真">
            \`\`\`

            \`\`\`js
            const img = document.querySelector("#photo");

            img.alt = "犬の写真";
            \`\`\`

            ---

            #### 実行結果
            \`\`\`text
            変更前: 猫の写真
            変更後: 犬の写真
            \`\`\`
            ※画像が表示されない場合や、読み上げ時に反映される

            ---

            #### 画像切り替えとセットで使う
            \`\`\`js
            img.src = "/dog.jpg";
            img.alt = "犬の写真";
            \`\`\`
            👉 src と alt は必ずセットで更新するのが基本

            ---

            #### ボタンで画像＋説明切り替え
            \`\`\`html
            <img id="photo" src="/cat.jpg" alt="猫の写真">
            <button id="btn">切り替え</button>
            \`\`\`

            \`\`\`js
            const img = document.querySelector("#photo");
            const btn = document.querySelector("#btn");

            btn.addEventListener("click", () => {
                img.src = "/dog.jpg";
                img.alt = "犬の写真";
            });
            \`\`\`

            ---

            #### data属性と組み合わせ
            \`\`\`html
            <img id="photo" src="/cat.jpg" alt="猫の写真">

            <button data-src="/dog.jpg" data-alt="犬の写真">犬</button>
            <button data-src="/bird.jpg" data-alt="鳥の写真">鳥</button>
            \`\`\`

            \`\`\`js
            const img = document.querySelector("#photo");

            document.querySelectorAll("button").forEach(btn => {
                btn.addEventListener("click", () => {
                    img.src = btn.dataset.src;
                    img.alt = btn.dataset.alt;
                });
            });
            \`\`\`

            ---

            #### ポイント

            - alt は「画像の意味」を説明する
            - 「画像」「写真」だけの説明はNG（例: "image"）
            - 装飾目的の画像は alt=""（空）にする
            - SEO・アクセシビリティの両方に影響する重要属性
            - srcだけ変更して alt を変えないのはNG
        `),
    },
    {
        process: "リンク先変更",
        detail: dedent(`
            aタグの遷移先URLを変更する<br />
            ユーザーの状態・言語・キャンペーン内容・時間帯などに応じて、
            遷移先ページを動的に切り替える時によく使われる

            #### 使用場面
            - キャンペーンURL差し替え
            - 言語別ページ遷移
            - ログイン状態で遷移先変更
            - ABテスト
            - スマホ / PCで別ページへ誘導
            - 在庫あり商品のみ詳細ページへ

            #### 基本
            \`\`\`html
            <a id="saleLink" href="/">セール会場へ</a>
            \`\`\`

            \`\`\`js
            const link = document.querySelector("#saleLink");

            link.href = "/sale";
            \`\`\`

            実行後
            \`\`\`html
            <a id="saleLink" href="/sale">セール会場へ</a>
            \`\`\`

            ---

            #### 言語別ページへ切替
            \`\`\`js
            const lang = "en";

            if (lang === "en") {
                link.href = "/en/about";
            } else {
                link.href = "/about";
            }
            \`\`\`

            ---

            #### ログイン状態で変更
            \`\`\`js
            const isLogin = true;

            link.href = isLogin
                ? "/mypage"
                : "/login";
            \`\`\`
            未ログインならログインページへ誘導できる

            ---

            #### ABテスト
            \`\`\`js
            const pattern = "B";

            link.href =
                pattern === "A"
                    ? "/campaign-a"
                    : "/campaign-b";
            \`\`\`
            広告効果測定などで使用される

            ---

            #### 別タブで開く
            \`\`\`js
            link.href = "https://example.com";
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            \`\`\`
            外部リンク時によく使う

            ---

            #### ポイント
            - \`href\` は aタグ専用の重要属性
            - URLを状況に応じて動的変更できる
            - 外部リンク時は \`target="_blank"\` だけでなく \`rel\` も推奨
            - Reactでは \`<Link href="">\` を使うことが多い

            ---

            #### 注意点
            存在しない要素に対して実行するとエラー

            \`\`\`js
            const link = document.querySelector("#saleLink");

            if (link) {
                link.href = "/sale";
            }
            \`\`\`

        `),
    },
    {
        process: "data属性を取得",
        detail: dedent(`
            HTML要素に独自の情報を持たせるための属性が \`data-*\` 属性<br />
            JavaScriptから値を取得して、要素ごとに異なる処理を行える

            標準属性（id / class / href など）とは別に、
            開発者が自由に情報を埋め込めるのが特徴

            #### 使用場面
            - 商品ID取得
            - 投稿ID取得
            - カテゴリ判定
            - モーダル開閉対象の指定
            - タブ切替
            - UI状態保持
            - ボタンごとの分岐処理

            #### 基本
            \`\`\`html
            <button id="btn" data-id="15">詳細</button>
            \`\`\`

            \`\`\`js
            const btn = document.querySelector("#btn");

            console.log(btn.dataset.id);
            // 15
            \`\`\`

            ---

            #### なぜ便利なのか？

            HTML側に値を書いておけば、
            JavaScript側で個別の値を判定できる

            例：商品一覧の「詳細」ボタン

            \`\`\`html
            <button data-id="101">商品A</button>
            <button data-id="102">商品B</button>
            <button data-id="103">商品C</button>
            \`\`\`

            \`\`\`js
            const buttons = document.querySelectorAll("button");

            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    console.log(btn.dataset.id);
                });
            });
            \`\`\`
            👉 押した商品のIDが取得できる

            ---

            #### 複数データも持てる
            \`\`\`html
            <div
                data-id="15"
                data-category="book"
                data-status="sale"
            ></div>
            \`\`\`

            \`\`\`js
            const item = document.querySelector("div");

            console.log(item.dataset.id);        // 15
            console.log(item.dataset.category);  // book
            console.log(item.dataset.status);    // sale
            \`\`\`

            ---

            #### ハイフン区切りはキャメルケースになる
            \`\`\`html
            <button data-user-id="99"></button>
            \`\`\`

            \`\`\`js
            button.dataset.userId
            \`\`\`

            👉 \`data-user-id\` → \`dataset.userId\`

            ---

            #### タブ切替
            \`\`\`html
            <button data-tab="profile">プロフィール</button>
            <button data-tab="settings">設定</button>
            \`\`\`

            \`\`\`js
            console.log(btn.dataset.tab);
            \`\`\`

            ---

            #### モーダル開閉
            \`\`\`html
            <button data-modal="login">ログイン</button>
            <button data-modal="signup">新規登録</button>
            \`\`\`

            押したボタンごとに表示モーダルを変更できる

            ---

            #### 商品詳細遷移
            \`\`\`js
            location.href = "/products/" + btn.dataset.id;
            \`\`\`

            ---

            #### 注意点
            - datasetで取得できる値は文字列
            - 数値として使うなら変換する

            \`\`\`js
            const id = Number(btn.dataset.id);
            \`\`\`

            - 機密情報は入れない（HTMLから見えるため）
        `),
    },
    {
        process: "hidden切替",
        detail: dedent(`
            \`hidden\` は、要素を **表示 / 非表示** にするHTML属性<br />
            JavaScriptから \`true / false\` を切り替えるだけで簡単に制御できる

            \`display: none;\` に近い動作になり、要素は画面から消える

            #### 使用場面
            - FAQの開閉
            - エラーメッセージ表示
            - モーダルの表示切替
            - ローディング完了後に非表示
            - 詳細説明の開閉
            - タブ切替UI

            #### 基本（非表示にする）
            \`\`\`html
            <p id="notice">保存が完了しました</p>
            \`\`\`

            \`\`\`js
            const box = document.querySelector("#notice");

            box.hidden = true;
            \`\`\`

            実行結果<br />
            → 要素が画面から消える

            ---

            #### 再表示する
            \`\`\`js
            box.hidden = false;
            \`\`\`

            実行結果<br />
            → 再び表示される

            ---

            #### ボタンで表示 / 非表示切替
            \`\`\`html
            <button id="btn">切替</button>
            <p id="notice">詳細情報です</p>
            \`\`\`

            \`\`\`js
            const btn = document.querySelector("#btn");
            const box = document.querySelector("#notice");

            btn.addEventListener("click", () => {
                box.hidden = !box.hidden;
            });
            \`\`\`
            👉 クリックするたびに開閉できる

            ---

            #### FAQ開閉
            \`\`\`html
            <button id="question">Q. 配送料はいくらですか？</button>
            <p id="answer" hidden>全国一律500円です。</p>
            \`\`\`

            \`\`\`js
            const question = document.querySelector("#question");
            const answer = document.querySelector("#answer");

            question.addEventListener("click", () => {
                answer.hidden = !answer.hidden;
            });
            \`\`\`

            ---

            #### エラーメッセージ表示
            \`\`\`html
            <p id="error" hidden>メールアドレスを入力してください</p>
            \`\`\`

            \`\`\`js
            const error = document.querySelector("#error");

            error.hidden = false;
            \`\`\`

            入力エラー時だけ表示できる

            ---

            #### hidden と display:none の違い
            | 方法 | 特徴 |
            |---|---|
            | \`hidden = true\` | シンプルで分かりやすい |
            | \`style.display = "none"\` | 細かい制御が可能 |

            ---

            #### ポイント
            - 初学者には \`hidden\` の方が直感的でおすすめ
            - アコーディオンUIやFAQでよく使う
            - アニメーションしたい場合は class切替 + CSS が向いている
            - Reactでは state による条件分岐表示が主流
        `),
    },
];