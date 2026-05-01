import type { DetailKey } from "./css-animation-details/detail-map";

export type AnimationItem = {
    property: string;
    description: string;
    detailKey?: DetailKey;
};

export const animationColumns = [
    { key: "property", label: "プロパティ", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const animationData: AnimationItem[] = [
    {
        property: "animation-name",
        description: "使用する @keyframes 名を指定する",
        detailKey: "cssAnimationKeyframesName",
    },
    {
        property: "animation-duration",
        description: "アニメーション時間を指定する",
        detailKey: "cssAnimationDuration",
    },
    {
        property: "animation-delay",
        description: "開始まで待機時間を指定する",
        detailKey: "cssAnimationDelay",
    },
    {
        property: "animation-timing-function",
        description: "動き方（速度変化）を指定する",
        detailKey: "cssAnimationTimingFunction",
    },
    {
        property: "animation-iteration-count",
        description: "繰り返し回数を指定する",
        detailKey: "cssAnimationIterationCount",
    },
    {
        property: "animation-direction",
        description: "再生方向を指定する",
        detailKey: "cssAnimationDirection",
    },
    {
        property: "animation-fill-mode",
        description: "開始前・終了後の状態を指定する",
        detailKey: "cssAnimationFillMode",
    },
    {
        property: "animation-play-state",
        description: "再生 / 一時停止を指定する",
        detailKey: "cssAnimationPlayState",
    },
    {
        property: "animation",
        description: "複数プロパティを一括指定する省略形",
        detailKey: "cssAnimationShorthand",
    },
];