export type Rating = {
    subject: string;
    value: number;
};

export type Product = {
    id: number;
    name: string;
    color: string;
    image: string;
    rating: Rating[];
};

export const products: Product[] = [
    {
        id: 1,
        name: "Smart Headphones",
        color: "#60A5FA",
        image: "https://picsum.photos/200?random=1",
        rating: [
            { subject: "価格", value: 70 },
            { subject: "品質", value: 90 },
            { subject: "デザイン", value: 85 },
            { subject: "耐久性", value: 80 },
            { subject: "使いやすさ", value: 88 },
        ],
    },
    {
        id: 2,
        name: "Wireless Mouse",
        color: "#34D399",
        image: "https://picsum.photos/200?random=2",
        rating: [
            { subject: "価格", value: 85 },
            { subject: "品質", value: 78 },
            { subject: "デザイン", value: 82 },
            { subject: "耐久性", value: 75 },
            { subject: "使いやすさ", value: 92 },
        ],
    },
    {
        id: 3,
        name: "Mechanical Keyboard",
        color: "#F472B6",
        image: "https://picsum.photos/200?random=3",
        rating: [
            { subject: "価格", value: 60 },
            { subject: "品質", value: 95 },
            { subject: "デザイン", value: 88 },
            { subject: "耐久性", value: 92 },
            { subject: "使いやすさ", value: 80 },
        ],
    },
];