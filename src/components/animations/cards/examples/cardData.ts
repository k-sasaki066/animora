
export type Data = {
    id: number;
    title: string;
    subTitle: string;
    image: string;
    thumbnail: string;
    category: string;
    text: string;
    likes: number;
    likedByMe: boolean;
    created_at: string;
};

export const CARD_DATA: Data[] = [
    {
        id: 1,
        title: "Title 1",
        subTitle: "Sub Title 1",
        image: "https://picsum.photos/id/90/574/322",
        thumbnail: "https://picsum.photos/id/1026/200/340",
        category: "Design",
        text: "ユーザー体験を向上させるためのUIデザイン原則について解説します。余白の使い方、視線誘導、タイポグラフィのバランスなど、実務で意識すべきポイントを具体例とともに紹介します。",
        likes: 47,
        likedByMe: true,
        created_at: "2025-10-21T14:32:10.000Z",
    },
    {
        id: 2,
        title: "Title 2",
        subTitle: "Sub Title 2",
        image: "https://picsum.photos/id/91/574/322",
        thumbnail: "https://picsum.photos/id/112/200/340",
        category: "Tech",
        text: "Next.jsとTypeScriptを用いたモダンなフロントエンド開発のベストプラクティスをまとめました。パフォーマンス最適化やAPI設計、状態管理の選択について実例を交えて解説します。",
        likes: 10,
        likedByMe: false,
        created_at: "2025-12-18T09:10:00.000Z",
    },
    {
        id: 3,
        title: "Title 3",
        subTitle: "Sub Title 3",
        image: "https://picsum.photos/id/92/574/322",
        thumbnail: "https://picsum.photos/id/102/200/340",
        category: "Life",
        text: "日々の生活を少し豊かにする習慣づくりについて考えてみました。朝のルーティンやデジタルデトックス、集中力を高める環境づくりなど、実践しやすいアイデアを紹介します。",
        likes: 27,
        likedByMe: false,
        created_at: "2026-01-15T17:10:00.000Z",
    },
];
