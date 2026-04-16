type Entity = {
    char: string;
    entity: string;
    note?: string;
};

export const entityColumns = [
    {
        key: "char",
        label: "表示",
        className: "text-left font-mono w-[25%]"
    },
    {
        key: "entity",
        label: "文字参照",
        className: "text-left font-mono w-[25%]"
    },
    {
        key: "note",
        label: "備考",
        className: "text-left text-sm text-zinc-400 w-[50%]"
    },
];

export const entityData: Entity[] = [
    { char: "<", entity: "&lt;", note: "HTMLタグ開始" },
    { char: ">", entity: "&gt;", note: "HTMLタグ終了" },
    { char: "&", entity: "&amp;", note: "エスケープ必須文字" },
    { char: "℃", entity: "&#8451;", note: "温度記号（℃）" },
    { char: '"', entity: "&quot;", note: "ダブルクォート" },
    { char: "'", entity: "&apos;", note: "シングルクォート" },
    { char: "©", entity: "&copy;", note: "著作権表示（copyright）" },
    { char: "®", entity: "&reg;", note: "登録商標マーク" },
    { char: "™", entity: "&trade;", note: "商標マーク" },
    { char: "°", entity: "&deg;", note: "角度・温度記号" },
    { char: "±", entity: "&plusmn;", note: "プラスマイナス" },
    { char: "×", entity: "&times;", note: "掛け算記号" },
    { char: "÷", entity: "&divide;", note: "割り算記号" },
    { char: "←", entity: "&larr;", note: "左矢印" },
    { char: "→", entity: "&rarr;", note: "右矢印" },
    { char: "↑", entity: "&uarr;", note: "上矢印" },
    { char: "↓", entity: "&darr;", note: "下矢印" },
    { char: "✓", entity: "&#10003;", note: "チェックマーク" },
    { char: "★", entity: "&#9733;", note: "星マーク" },
    { char: "♥", entity: "&hearts;", note: "ハート記号" },
    { char: "半角スペース", entity: "&nbsp;", note: "改行されないスペース" },
    { char: "n幅スペース", entity: "&ensp;", note: "半角より広い空白" },
    { char: "m幅スペース", entity: "&emsp;", note: "全角より広い空白" },
];