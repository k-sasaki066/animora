// 日付降順ソート
export const sortByNewest = <T extends { created_at: string }>(
    data: T[]
): T[] => {
    return [...data].sort(
        (a, b) =>
            new Date(b.created_at).getTime() -
            new Date(a.created_at).getTime()
    );
};

// 日付フォーマット
export const formatDate = (createdAt: string) => {
    const date = new Date(createdAt);
    return {
        day: date.getDate(),
        month: date.toLocaleString("en-US", { month: "short" }),
        year: date.getFullYear(),
    };
};

// テキスト省略
export const truncateText = (
    text: string,
    maxLength: number
): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
};

// 相対時間表示
export const getRelativeTime = (createdAt: string): string => {
    const now = new Date();
    const createdDate = new Date(createdAt);

    const diffMs = now.getTime() - createdDate.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);

    if (diffSeconds < 60) return `${diffSeconds} seconds ago`;

    const diffMinutes = Math.floor(diffSeconds / 60);
    if (diffMinutes < 60) return `${diffMinutes} mins ago`;

    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours} hours ago`;

    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 30) return `${diffDays} days ago`;

    const diffMonths = Math.floor(diffDays / 30);
    return `${diffMonths} months ago`;
};

// いいねトグル
export const toggleLike = <
    T extends { id: number; likedByMe: boolean; likes: number }
>(
    data: T[],
    id: number
): T[] => {
    return data.map((item) => {
        if (item.id !== id) return item;

        const isLiked = item.likedByMe;

        return {
            ...item,
            likedByMe: !isLiked,
            likes: isLiked
                ? item.likes - 1
                : item.likes + 1,
        };
    });
};