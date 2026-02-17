export type Category = "coat" | "jacket" | "onepiece" | "tunic";

export interface Product {
    id: number;
    name: string;
    category: Category;
    color: string;
    price: number;
    image: string;
}

export const categories: { label: string; value: Category }[] = [
    { label: "コート", value: "coat" },
    { label: "ジャケット", value: "jacket" },
    { label: "ワンピース", value: "onepiece" },
    { label: "チュニック", value: "tunic" },
];

export const colors = [
    "black",
    "gray",
    "white",
    "brown",
    "beige",
    "olive",
    "green",
    "blue",
    "purple",
    "pink",
    "red",
    "orange",
    "yellow",
];

export const products: Product[] = [
    {
        id: 1,
        name: "ウールコート",
        category: "coat",
        color: "black",
        price: 12000,
        image: "https://picsum.photos/id/91/50/50"
    },
    {
        id: 2,
        name: "デニムジャケット",
        category: "jacket",
        color: "blue",
        price: 8000,
        image: "https://picsum.photos/id/319/50/50"
    },
    {
        id: 3,
        name: "フレアワンピース",
        category: "onepiece",
        color: "pink",
        price: 6500,
        image: "https://picsum.photos/id/64/50/50"
    },
    {
        id: 4,
        name: "ロングチュニック",
        category: "tunic",
        color: "green",
        price: 5000,
        image: "https://picsum.photos/id/1013/50/50"
    },
    {
        id: 5,
        name: "ショートコート",
        category: "coat",
        color: "brown",
        price: 15000,
        image: "https://picsum.photos/id/1005/50/50"
    },

    {
        id: 6,
        name: "トレンチコート",
        category: "coat",
        color: "beige",
        price: 18000,
        image: "https://picsum.photos/id/473/50/50"
    },
    {
        id: 7,
        name: "ライダースジャケット",
        category: "jacket",
        color: "black",
        price: 20000,
        image: "https://picsum.photos/id/447/50/50"
    },
    {
        id: 8,
        name: "チェックワンピース",
        category: "onepiece",
        color: "red",
        price: 7200,
        image: "https://picsum.photos/id/399/50/50"
    },
    {
        id: 9,
        name: "リネンチュニック",
        category: "tunic",
        color: "white",
        price: 4800,
        image: "https://picsum.photos/id/325/50/50"
    },
    {
        id: 10,
        name: "ダッフルコート",
        category: "coat",
        color: "navy",
        price: 17000,
        image: "https://picsum.photos/id/513/50/50"
    },

    {
        id: 11,
        name: "ブルゾンジャケット",
        category: "jacket",
        color: "green",
        price: 9000,
        image: "https://picsum.photos/id/786/50/50"
    },
    {
        id: 12,
        name: "サテンワンピース",
        category: "onepiece",
        color: "purple",
        price: 11000,
        image: "https://picsum.photos/id/777/50/50"
    },
    {
        id: 13,
        name: "ニットチュニック",
        category: "tunic",
        color: "gray",
        price: 5300,
        image: "https://picsum.photos/id/604/50/50"
    },
    {
        id: 14,
        name: "ピーコート",
        category: "coat",
        color: "black",
        price: 14000,
        image: "https://picsum.photos/id/804/50/50"
    },
    {
        id: 15,
        name: "デニムコート",
        category: "coat",
        color: "blue",
        price: 16000,
        image: "https://picsum.photos/id/856/50/50"
    },

    {
        id: 16,
        name: "マウンテンジャケット",
        category: "jacket",
        color: "orange",
        price: 13000,
        image: "https://picsum.photos/id/836/50/50"
    },
    {
        id: 17,
        name: "花柄ワンピース",
        category: "onepiece",
        color: "yellow",
        price: 6900,
        image: "https://picsum.photos/id/858/50/50"
    },
    {
        id: 18,
        name: "ロングチュニックⅡ",
        category: "tunic",
        color: "pink",
        price: 5600,
        image: "https://picsum.photos/id/758/50/50"
    },
    {
        id: 19,
        name: "カシミヤコート",
        category: "coat",
        color: "gray",
        price: 20000,
        image: "https://picsum.photos/id/660/50/50"
    },
    {
        id: 20,
        name: "レザージャケット",
        category: "jacket",
        color: "brown",
        price: 19000,
        image: "https://picsum.photos/id/338/50/50"
    },

    {
        id: 21,
        name: "シャツワンピース",
        category: "onepiece",
        color: "white",
        price: 7800,
        image: "https://picsum.photos/id/823/50/50"
    },
    {
        id: 22,
        name: "オーバーチュニック",
        category: "tunic",
        color: "black",
        price: 6200,
        image: "https://picsum.photos/id/349/50/50"
    },
    {
        id: 23,
        name: "ライトコート",
        category: "coat",
        color: "green",
        price: 9800,
        image: "https://picsum.photos/id/669/50/50"
    },
    {
        id: 24,
        name: "スウェードジャケット",
        category: "jacket",
        color: "beige",
        price: 19500,
        image: "https://picsum.photos/id/389/50/50"
    },
    {
        id: 25,
        name: "プリーツワンピース",
        category: "onepiece",
        color: "navy",
        price: 8400,
        image: "https://picsum.photos/id/628/50/50"
    }
];
