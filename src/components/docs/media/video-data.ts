export type VideoEvent = {
    event: string;
    timing: string;
    usage: string;
    detail: string;
};

export const videoEventColumns = [
    { key: "event", label: "イベント", className: "font-mono" },
    { key: "timing", label: "タイミング" },
    { key: "usage", label: "用途" },
    { key: "detail", label: "使用場面" },
];

export const videoEventData: VideoEvent[] = [
    {
        event: "onPlay",
        timing: "再生ボタンを押したとき",
        usage: "再生開始の検知",
        detail:
            "ユーザーが動画を再生した瞬間に発火。\nログ記録・UIの再生状態切り替え・再生回数カウントなど",
    },
    {
        event: "onPause",
        timing: "一時停止したとき",
        usage: "再生停止の検知",
        detail:
            "ユーザーが動画を止めたときに発火。\n学習動画の進捗保存や離脱分析に利用",
    },
    {
        event: "onEnded",
        timing: "動画が最後まで再生されたとき",
        usage: "視聴完了処理",
        detail:
            "動画が最後まで再生されたタイミング。\n次の動画への自動遷移、完了フラグ更新、報酬付与など",
    },
    {
        event: "onTimeUpdate",
        timing: "再生中（数百msごとに発火）",
        usage: "進捗バー更新",
        detail:
            "再生中に繰り返し発火するイベント。\nシークバー、視聴進捗、残り時間表示などリアルタイムUI更新",
    },
    {
        event: "onLoadedData",
        timing: "動画の読み込み完了時",
        usage: "再生準備完了",
        detail:
            "動画のメタデータ・再生可能状態が揃ったタイミング。\nローディングUIの解除や初期UI表示",
    },
];