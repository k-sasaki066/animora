import dedent from "dedent";

export const detail = dedent(`
    Markdown（md）では HTMLタグをそのまま埋め込める 場合がある<br />
    これを使うと、Markdownだけでは足りない表現を補える

    - 改行したい
    - 文字色を変えたい
    - 横並びにしたい
    - 細かいレイアウトをしたい
    - 折りたたみを使いたい

    #### 改行
    \`\`\`markdown
    1行目<br>
    2行目
    \`\`\`
    1行目<br>
    2行目

    ---

    #### 水平中央寄せ
    \`\`\`markdown
    <div align="center">
        中央寄せテキスト
    </div>
    \`\`\`
    <div align="center">
        中央寄せテキスト
    </div>

    ---

    #### 文字色
    \`\`\`markdown
    <span style="color:red;">赤文字</span>
    <span style="font-size:150%;">文字サイズ大</span>
    \`\`\`
    <span style="color:red;">赤文字</span>

    <span style="font-size:150%;">文字サイズ大</span>

    ---

    #### 太枠ボックス
    \`\`\`markdown
    <div style="border:1px solid #999; padding:10px;">
        囲み枠
    </div>
    \`\`\`
    <div style="border:1px solid #999; padding:10px;">
        囲み枠
    </div>

    ---

    #### 区切り線
    \`\`\`markdown
    <hr>
    \`\`\`
    <hr>

    ---

    #### 折りたたみUI
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

    #### テーブル
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
`);