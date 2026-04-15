type Entity = {
    char: string;
    entity: string;
    note?: string;
};

const entities: Entity[] = [
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

export default function HtmlEntitiesTable() {
    const padding = "px-3 py-2";

    return (
        <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse text-center mx-auto">
                <thead>
                    <tr>
                        <th className={`${padding} text-left w-[25%]`}>
                            表示
                        </th>
                        <th className={`${padding} text-left w-[25%]`}>
                            文字参照
                        </th>
                        <th className={`${padding} text-left w-[50%]`}>
                            備考
                        </th>
                    </tr>
                </thead>

                <tbody className="">
                    {entities.map((item, i) => (
                        <tr key={i}>
                            <td className={`${padding} text-left font-mono`}>
                                {item.char}
                            </td>
                            <td className={`${padding} text-left font-mono`}>
                                {item.entity}
                            </td>
                            <td className={`${padding} text-left text-sm text-zinc-400`}>
                                {item.note}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}