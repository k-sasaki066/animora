import type { DetailKey } from "./js-event-details/detail-map";

export type EventItem = {
    event: string;
    description: string;
    detailKey?: DetailKey;
};

export const jsEventColumns = [
    { key: "event", label: "イベント", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const jsEventData: EventItem[] = [
    {
        event: "click",
        description: "要素がクリックされたときに発火するイベント",
        detailKey: "jsEventClick",
    },
    {
        event: "input",
        description: "入力欄の値が変更されるたびに発火するイベント",
        detailKey: "jsEventInput",
    },
    {
        event: "change",
        description: "入力確定時に発火するイベント",
        detailKey: "jsEventChange",
    },
    {
        event: "submit",
        description: "フォーム送信時に発火するイベント",
        detailKey: "jsEventSubmit",
    },

    {
        event: "scroll",
        description: "スクロール時に発火するイベント",
        detailKey: "jsEventScroll",
    },

    {
        event: "keydown",
        description: "キーが押された瞬間に発火するイベント",
        detailKey: "jsEventKeydown",
    },
    {
        event: "load",
        description: "ページや画像などの読み込み完了時に発火するイベント",
        detailKey: "jsEventLoad",
    },
    {
        event: "mouseover",
        description: "要素にマウスが乗ったときに発火するイベント",
        detailKey: "jsEventMouseover",
    },
    {
        event: "mouseout",
        description: "マウスが要素から離れたときに発火するイベント",
        detailKey: "jsEventMouseout",
    },
];