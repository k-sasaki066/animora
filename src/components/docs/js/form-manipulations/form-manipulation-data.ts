import type { DetailKey } from "./form-manipulation-details/detail-map";

export type FormManipulationItem = {
    process: string;
    detailKey?: DetailKey;
};

export const formColumns = [
    { key: "process", label: "フォーム操作", className: "font-mono" },
];

export const formData: FormManipulationItem[] = [
    {
        process: "入力値の取得",
        detailKey: "formGetInputValue",
    },

    {
        process: "入力値の変更（初期値セット）",
        detailKey: "formSetInitialValue",
    },

    {
        process: "入力値のクリア",
        detailKey: "formClearInputValue",
    },

    {
        process: "送信イベントの取得",
        detailKey: "formEventPreventDefault",
    },

    {
        process: "入力バリデーション（必須チェック）",
        detailKey: "formRequiredValidation",
    },

    {
        process: "リアルタイム入力監視",
        detailKey: "formRealTimeInputMonitor",
    },

    {
        process: "チェックボックスの状態取得",
        detailKey: "formCheckboxState",
    },
];