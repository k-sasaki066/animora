import type { DetailKey } from "./js-animation-details/detail-map";

export type JSAnimationItem = {
    process: string;
    description: string;
    detailKey?: DetailKey;
};

export const animationUseColumns = [
    { key: "process", label: "使用場面" },
    { key: "description", label: "内容" },
];

export const animationUseData: JSAnimationItem[] = [
    {
        process: "モーダル表示",
        description: "クリック時にフェードイン・拡大表示して自然に見せる",
        detailKey: "jsAnimationModal",
    },
    {
        process: "ハンバーガーメニュー開閉",
        description: "横からスライド表示してメニュー展開する",
        detailKey: "jsAnimationMenuToggle",
    },
    {
        process: "ローディング表示",
        description: "通信中にスピナー回転・点滅で待機状態を伝える",
        detailKey: "jsAnimationLoading",
    },
    {
        process: "スクロール出現",
        description: "下からふわっと表示し、視線誘導や印象向上に使う",
        detailKey: "jsAnimationScrollReveal",
    },
    {
        process: "アコーディオン開閉",
        description: "高さアニメーションで詳細説明を開閉する",
        detailKey: "jsAnimationAccordionToggle",
    },
    {
        process: "タブ切替",
        description: "フェード・スライドでコンテンツを切り替える",
        detailKey: "jsAnimationTabSwitch",
    },
    {
        process: "ボタンホバー",
        description: "拡大・色変化・浮き上がりで押せることを伝える",
        detailKey: "jsAnimationButtonHover",
    },
    {
        process: "フォームエラー",
        description: "揺れ・赤表示で入力ミスをわかりやすく伝える",
        detailKey: "jsAnimationInputErrorFeedback",
    },
    {
        process: "通知トースト",
        description: "右上や下部からスライド表示して通知する",
        detailKey: "jsAnimationToastNotification",
    },
    {
        process: "ページ遷移演出",
        description: "フェード切替で画面遷移を滑らかに見せる",
        detailKey: "jsAnimationPageTransitionFade",
    },
    {
        process: "カルーセル / スライダー",
        description: "画像やカードを横移動で切り替える",
        detailKey: "jsAnimationCarousel",
    },
    {
        process: "ツールチップ表示",
        description: "ホバー時に小さくフェード表示する",
        detailKey: "jsAnimationTooltip",
    },
    {
        process: "選択カード",
        description: "クリック状態を保持",
        detailKey: "jsAnimationClickState",
    },
    {
        process: "いいね / お気に入り",
        description: "ハート拡大・跳ねる演出で操作感を高める",
        detailKey: "jsAnimationFavorite",
    },
    {
        process: "削除完了演出",
        description: "縮小して消すことで自然に削除を伝える",
        detailKey: "jsAnimationDeleteComplete",
    },
    {
        process: "進捗バー",
        description: "横幅変化で進行状況を視覚化する",
        detailKey: "jsAnimationProgressBar",
    },
    {
        process: "数値カウントアップ",
        description: "売上・PV・実績数値を動的に増加表示する",
        detailKey: "jsAnimationNumberCountUp",
    },
    {
        process: "背景アニメーション",
        description: "グラデーション・粒子・波でサイト印象を上げる",
        detailKey: "jsAnimationBackground",
    },
];