import dedent from "dedent";

export const detail = dedent(`
    | 項目 | HTMLCollection | NodeList |
    |---|---|---|
    | 主な取得方法 | getElementsByClassName | querySelectorAll |
    | 配列っぽさ | 弱い | 強い |
    | forEach | × | ○ |
    | 自動更新 | ○ Live | × Static |

    - HTMLCollection<br />
        → 今の現場をリアルタイム監視する名簿

    - NodeList<br />
        → 撮影した時点のメンバー一覧写真
`);