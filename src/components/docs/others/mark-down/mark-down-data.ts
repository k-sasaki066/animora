import dedent from "dedent";

export type CommandItem = {
    command: string;
    description: string;
    detail?: string;
};

export const markdownColumns = [
    { key: "command", label: "記法", className: "font-mono text-xs" },
    { key: "description", label: "説明" },
];

export const markdownData: CommandItem[] = [
    {
        command: "見出し",
        description: "h1~h6の見出しを表示",
        detail: dedent(`
            文章のタイトル・章・項目を整理するための構造タグ

            \`\`\`markdown
            # 見出し1
            ## 見出し2
            ### 見出し3
            #### 見出し4
            ##### 見出し5
            ###### 見出し6
            \`\`\`

            # ページタイトル（1回）
            ## セクション
            ### 詳細項目
            #### 補足

            <br />
            ⚠️ 空白なしにすると見出しだと認識されない
            \`\`\`markdown
            #見出し → #見出し(文字列として表示されてしまう)
            \`\`\`
        `),
    },
    {
        command: "**文字**",
        description: "文字を太字にする",
        detail: dedent(`
            文字を 強調して目立たせたい時 に太字を使う

            \`\`\`markdown
            **太字にしたい文字**
            __太字にしたい文字__  (単語内で崩れる可能性があるため非推奨)
            ***かなり強調***     太字 + 斜体
            \`\`\`

            1. **npm install** を実行
            2. **npm run dev** で起動

            ***太字 + 斜体***もできる

            ⚠️ 記号の間にスペースを入れない
            \`\`\`markdown
            ⭕️ **太字**
            ❌ ** 太字 **
            \`\`\`
        `),
    },
    {
        command: "*文字*",
        description: "文字を斜体にする",
        detail: dedent(`
            少しだけ目立たせたい語句 に斜体を使う
            \`\`\`markdown
            *斜体です*
            _斜体です_ (単語内で崩れる可能性があるため非推奨)
            ***かなり強調***     太字 + 斜体
            \`\`\`

            私は *Harry Potter* が好きです。

        `),
    },
    {
        command: "~~文字~~",
        description: "文字に打ち消し線を引く",
        detail: dedent(`
            文章の修正、非推奨表現、比較などで使う

            \`\`\`markdown
            ~~この文字は打ち消し線~~
            \`\`\`

            ~~この文字は打ち消し線~~

            料金は ~~¥9,800~~ ¥4,980 です

            - 旧コマンド: ~~docker-compose up~~
            - 新コマンド: docker compose up

            ⚠️ 前後のスペース不要
        `),
    },
    {
        command: "下線・ハイライト",
        description: "文字に下線やハイライトをつける",
        detail: dedent(`

            \`\`\`markdown
            文字に<u>下線</u>を引いています
            markタグで囲むと<mark>ハイライト/mark>になります
            \`\`\`

            文字に<u>下線</u>を引いています<br />
            markタグで囲むと<mark>ハイライト</mark>になります
        `),
    },
    {
        command: "見出し",
        description: "h1~h6の見出しを表示",
        detail: dedent(`
            文章のタイトル・章・項目を整理するための構造タグ

            \`\`\`markdown
            # 見出し1
            ## 見出し2
            ### 見出し3
            #### 見出し4
            ##### 見出し5
            ###### 見出し6
            \`\`\`

            # ページタイトル（1回）
            ## セクション
            ### 詳細項目
            #### 補足

            <br />
            ⚠️ 空白なしにすると見出しだと認識されない
            \`\`\`markdown
            #見出し → #見出し(文字列として表示されてしまう)
            \`\`\`
        `),
    },
    {
        command: "`code`",
        description: "インラインコードを表示",
        detail: dedent(`
            文章の途中で コード・コマンド・変数名・ファイル名 などを強調表示する書き方

            \`\`\`markdown
            このワードを \`強調\` したい
            \`\`\`

            \`useState()\` を使って状態管理します。<br />
            \`\`a\`b\`\`

            ⚠️ シングルクォートではない
            \`\`\`markdown
            ⭕️ \`バッククォート\`       shift + @
            ❌ \'シングルクォート\'     shift + 7
            \`\`\`
        `),
    },
    {
        command: "```js ... ```",
        description: "コードブロックを表示",
        detail: dedent(`
            コードを見やすくそのまま表示する機能

            - 改行が保持される
            - インデントが保持される
            - 等幅フォントになる
            - シンタックスハイライト対応（環境次第）

            \`\`\`\`markdown
            \`\`\`js
            console.log("hello");
            \`\`\`
            \`\`\`\`

            \`\`\`js
            function add(a, b) {
                return a + b;
            }
            \`\`\`

            言語名を付ける
            \`\`\`markdown
            \`\`\`js
            \`\`\`ts
            \`\`\`tsx
            \`\`\`html
            \`\`\`css
            \`\`\`bash
            \`\`\`json
            \`\`\`python
            \`\`\`
            ⚠️ 開始と終了の数を揃える
        `),
    },
    {
        command: "- 項目",
        description: "箇条書きリストを表示",
        detail: dedent(`
            文章を見やすく整理するためのリスト表示

            \`\`\`markdown
            - 箇条書きリスト
            * 箇条書きリスト
            + 箇条書きリスト
            どれでもリストになるが、統一する

            1. 番号付きリスト
            2. 番号付きリスト
            3. 番号付きリスト

            - [x] 完了
            - [ ] 未完了
            \`\`\`

            ---

            #### 箇条書きリスト (順番が不要な一覧）
            - Apple
            - Banana
            - Orange

            ---

            #### 番号付きリスト（手順・順番あり）
            1. インストール
            2. 設定
            3. 実行

            ---

            #### ネスト（入れ子リスト）
            ネストはスペース2〜4個でインデント
            - フルーツ
                - Apple
                - Banana
            - 野菜
                - Tomato

            ---

            #### 番号付き + 箇条書き
            1. セットアップ
                - Node.jsインストール
                - npm install
            2. 起動
                - npm run dev

            ---

            #### チェックリスト
            - [x] 完了
            - [ ] 未完了

            ---

            ⚠️ 記号の後に半角スペースが必要
            \`\`\`js
            ⭕️
            - Apple
            - Banana
            - Orange

            ❌
            -Apple
            -Banana
            -Orange
            \`\`\`
        `),
    },
    {
        command: "[文字](URL)",
        description: "リンクを表示",
        detail: dedent(`
            文字にURLを設定して見やすく表示

            \`\`\`markdown
            [表示したい文字](移動先URL)
            \`\`\`

            [Google](https://google.com)

            [Google](https://google.com "検索サイト") タイトル付きリンク

            https://google.com URLを直接書いた場合

            \`\`\`markdown
            [OpenAI](https://openai.com)            外部サイトへのリンク

            [お問い合わせ](/contact)                  自分のサイト内ページ

            [Google](https://google.com "検索サイト") タイトル付きリンク（マウスを乗せるとタイトルが表示される環境がある）
            \`\`\`

            ---

            #### README.md
            \`\`\`markdown
            - [インストール方法](#インストール方法)
            - [使い方](#使い方)
            - [ライセンス](#ライセンス)
            \`\`\`

            ---

            #### 技術記事
            \`\`\`markdown
            詳しくは [公式ドキュメント](https://nextjs.org/docs) を参照してください。
            \`\`\`

            ---

            #### ポートフォリオ
            \`\`\`markdown
            [制作物を見る](https://example.com)
            \`\`\`

            ⚠️ 全角スペース禁止
            \`\`\`markdown
            ⭕️ [Google] （https://google.com）
            ❌ [Google]  （https://google.com）
            \`\`\`

            ⚠️ 新しいタブで開く(target="_blank")はMarkdown標準外
            \`\`\`html
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>
            \`\`\`
        `),
    },
    {
        command: "![alt](画像URL)",
        description: "画像を表示",
        detail: dedent(`
            MarkDownで画像を表示

            \`\`\`markdown
            ![代替テキスト](画像URL)

            ! = 画像
            \`\`\`

            ---

            Web上の画像を表示
            \`\`\`markdown
            ![代替テキスト](https://******/***.jpg)
            \`\`\`
            ![sample](${process.env.NEXT_PUBLIC_R2_URL}/images/samples/sample-02.webp)

            ---

            ローカル画像を表示
            \`\`\`markdown
            ![代替テキスト](./images/***.png)
            \`\`\`
            ![sample](./images/samples/sample-06.webp)

            ---

            imgタグでサイズ指定
            \`\`\`html
            <img width="***" alt="***" src="***/***.webp" />
            \`\`\`
            <img width="500" alt="sample" src="${process.env.NEXT_PUBLIC_R2_URL}/images/samples/sample-10.webp" />

            ---

            ⚠️ Markdown標準ではサイズ指定できない

            \`\`\`markdown
            ❌ ![img](cat.png width=200)
            ⭕️ <img width="600" alt="sample" src="https://github.com/user-attachments/assets/9c3666f5-eefa-4d4e-a55e-1f67ed395c21" />
            \`\`\`
        `),
    },
    {
        command: "> 引用文",
        description: "引用ブロックを表示",
        detail: dedent(`
            他の文章・発言・説明文を区別して表示したい時に使用する<br />
            左側に線や余白が付き、本文と分けて表示されることが多い

            \`\`\`markdown
            > これは引用文です
            \`\`\`

            #### 使用場面
            - 補足説明
            - 注意点
            - 経験則
            - ベストプラクティス
            - 一言メモ

            ---

            複数行の引用
            \`\`\`markdown
            > 1行目
            > 2行目
            > 3行目
            \`\`\`
            > 1行目
            > 2行目
            > 3行目

            ---

            段落付き引用
            \`\`\`markdown
            > これは1段落目です。
            >
            > これは2段落目です。
            \`\`\`
            > これは1段落目です。
            >
            > これは2段落目です。

            ---

            引用の中に見出し・リストを書く
            \`\`\`markdown
            > ### ポイント
            > - 重要
            > - 注意
            \`\`\`
            > ### ポイント
            > - 重要
            > - 注意

            ---

            引用のネスト（入れ子）
            \`\`\`markdown
            > 親引用
            >> 子引用
            >>> 孫引用
            \`\`\`
            > 親引用
            >> 子引用
            >>> 孫引用
        `),
    },
    {
        command: "---",
        description: "区切り線を表示",
        detail: dedent(`
            文章の区切り・話題転換・セクション分割に使用する

            \`\`\`markdown
            ---
            ***
            ___
            \`\`\`

            ---

            セクションを分ける
            \`\`\`markdown
            # JavaScript基礎

            変数の説明

            ---

            # 関数

            関数の説明
            \`\`\`

            ---

            話題転換
            \`\`\`markdown
            メリットを説明

            ---

            次にデメリットです
            \`\`\`

            ---

            長文を読みやすくする
            \`\`\`markdown
            導入文

            ---

            本文

            ---

            まとめ
            \`\`\`

            ---

            ⚠️ 前後に空行を入れる
            \`\`\`markdown
            文章
            ---
            文章
            ❌ 環境によって見出し扱い・誤認識される場合がある
            \`\`\`
        `),
    },
    {
        command: "| A | B |",
        description: "テーブル（表）を作成",
        detail: dedent(`
            |（パイプ） と -（ハイフン） を使って表を作れる<br />
            README・ドキュメント・比較表でよく使う

            \`\`\`markdown
            | 項目 | 説明 |               1行目 = ヘッダー（見出し）
            |------|------|             2行目 = 区切り線
            | HTML | Webページ作成 |      3行目以降 = データ
            | CSS  | デザイン調整 |
            | JS   | 動きを付ける |

            :----   左寄せ
            :---:   中央寄せ
            ----:   右寄せ
            \`\`\`

            ---

            比較表
            \`\`\`markdown
            | プラン | 月額 | 容量 |
            |------|------|------|
            | Free | ¥0 | 1GB |
            | Pro  | ¥980 | 100GB |
            \`\`\`
            | プラン | 月額 | 容量 |
            |------|------|------|
            | Free | ¥0 | 1GB |
            | Pro  | ¥980 | 100GB |

            ---

            左寄せ・中央寄せ・右寄せ
            \`\`\`markdown
            | 名前 | 年齢 | 点数 |
            |:-----|:---:|----:|
            | 田中 | 20  | 80  |
            | 佐藤 | 25  | 95  |
            \`\`\`
            | 名前 | 年齢 | 点数 |
            |:-----|:---:|----:|
            | 田中 | 20  | 80  |
            | 佐藤 | 25  | 95  |

            ---

            ⚠️ 列数を揃える
            \`\`\`markdown
            ❌  | 名前 | 年齢 |
                |------|------|
                | 田中 |

            ⭕️  | 名前 | 年齢 |
                |------|------|
                | 田中 | 20 |
            \`\`\`
            ⚠️ 列幅固定, 高さ調整, セル結合はできない<br />
            → 必要ならHTML tableを使う
        `),
    },
    {
        command: "<br />",
        description: "改行を入れる（環境依存）",
        detail: dedent(`
            改行を入れる<br />
            Enterを押しただけでは、見た目上改行されないことがある

            \`\`\`markdown
            空行を1行入れる
            行末に半角スペース2つ
            <br /> を使う（確実）
            \`\`\`

            ---

            \`空行\`を1行入れる
            \`\`\`markdown
            1行目

            2行目
            \`\`\`
            1行目

            2行目

            ---

            行末に\`半角スペース2つ\`(スペース2つが見えにくい)
            \`\`\`markdown
            1行目␠␠
            2行目
            \`\`\`
            1行目  
            2行目

            ---

            \`<br />\` を使う
            \`\`\`markdown
            1行目<br />
            2行目
            \`\`\`
            1行目<br />
            2行目

            ⚠️ Enterだけでは改行されない
        `),
    },
    {
        command: "<span>文字</span>",
        description: "HTMLタグを埋め込める（対応環境のみ）",
        detail: dedent(`
            Markdown（md）では HTMLタグをそのまま埋め込める 場合がある<br />
            これを使うと、Markdownだけでは足りない表現を補える

            - 改行したい
            - 文字色を変えたい
            - 横並びにしたい
            - 細かいレイアウトをしたい
            - 折りたたみを使いたい

            改行
            \`\`\`markdown
            1行目<br>
            2行目
            \`\`\`
            1行目<br>
            2行目

            ---

            水平中央寄せ
            \`\`\`markdown
            <div align="center">
                中央寄せテキスト
            </div>
            \`\`\`
            <div align="center">
                中央寄せテキスト
            </div>

            ---

            文字色
            \`\`\`markdown
            <span style="color:red;">赤文字</span>
            <span style="font-size:150%;">文字サイズ大</span>
            \`\`\`
            <span style="color:red;">赤文字</span>

            <span style="font-size:150%;">文字サイズ大</span>

            ---

            太枠ボックス
            \`\`\`markdown
            <div style="border:1px solid #999; padding:10px;">
                囲み枠
            </div>
            \`\`\`
            <div style="border:1px solid #999; padding:10px;">
                囲み枠
            </div>

            ---

            区切り線
            \`\`\`markdown
            <hr>
            \`\`\`
            <hr>

            折りたたみUI
            \`\`\`markdown
            初期表示は折り畳まれた状態
            <details>
            <summary>クリックで開く</summary>

            中身です

            </details>

            初期表示は開かれた状態
            <details open>
            <summary>クリックで開く</summary>

            中身です

            </details>
            \`\`\`
            <details>
            <summary>クリックで開く</summary>

            中身です

            </details>

            <details open>
            <summary>クリックで開く(open属性)</summary>

            open属性を追加しています

            </details>

            ---

            テーブル
            \`\`\`markdown
            <table className="border border-gray-300 border-collapse">
                <tr>
                    <th className="px-3 py-2 text-center bg-zinc-600">名前</th>
                    <th className="px-3 py-2 text-center bg-zinc-600">年齢</th>
                </tr>
                <tr>
                    <td className="px-3 py-2 text-center">田中</td>
                    <td className="px-3 py-2 text-center">20</td>
                </tr>
            </table>
            \`\`\`
            <table className="border border-gray-600 border-collapse">
                <tr>
                    <th className="px-3 py-2 text-center bg-zinc-600">名前</th>
                    <th className="px-3 py-2 text-center bg-zinc-600">年齢</th>
                </tr>
                <tr>
                    <td className="px-3 py-2 text-center">田中</td>
                    <td className="px-3 py-2 text-center">20</td>
                </tr>
            </table>

            ⚠️ 環境によってHTMLが無効
        `),
    },
    {
        command: ".mdx",
        description: "Reactコンポーネントを埋め込める（MDX）",
        detail: dedent(`
            通常の Markdown に React コンポーネントを直接書ける 仕組み

            Markdown
            \`\`\`markdown
            # タイトル

            - 箇条書き
            - コードブロック
            \`\`\`

            MDX (React コンポーネントが使える)
            \`\`\`markdown
            # タイトル

            <Button>クリック</Button>
            \`\`\`

            - UI付きドキュメントサイト
            - 技術記事に実演を入れられる
            - データから表生成

            #### 基本的な使い方
            コンポーネントをimport
            \`\`\`mdx
            import Button from "@/components/Button";
            import Table from "@/components/Table";
            \`\`\`

            Markdown内で使う
            \`\`\`mdx
            # UIサンプル

            通常文章です。

            <Button>送信</Button>
            \`\`\`

            propsも渡せる
            \`\`\`mdx
            <Table data={items} columns={columns} accordion />
            \`\`\`

            ⚠️ サーバーコンポーネント / Client Component注意
            \`\`\`txt
            MDX 内でuseState, useEffect, onClick etc...
            使うならそのコンポーネント側で "use client"; が必要
        `),
    },
];