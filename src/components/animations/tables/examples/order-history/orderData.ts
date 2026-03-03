export type OrderStatus = "注文完了" | "発送済み" | "配達完了";

export type OrderItem = {
    name: string;
    price: string;
    image: string;
};

export type ShippingAddress = {
    postalCode: string;
    prefecture: string;
    city: string;
    address1: string;
    building?: string;
};

export type Order = {
    id: string;
    date: Date;
    price: string;
    status: OrderStatus;
    shipping: ShippingAddress;
    items: OrderItem[];
};

export const orders: Order[] = [
    {
        id: "1001",
        date: new Date("2026-02-01"),
        price: "¥12,000",
        status: "配達完了",
        shipping: {
            postalCode: "150-0001",
            prefecture: "東京都",
            city: "渋谷区",
            address1: "神宮前4-2-12",
            building: "原宿セントラルビル502号室",
        },
        items: [
            {
                name: "ワイヤレスヘッドフォン",
                price: "¥8,000",
                image: "https://picsum.photos/id/189/120/120",
            },
            {
                name: "スマホケース",
                price: "¥4,000",
                image: "https://picsum.photos/id/188/120/120",
            },
        ],
    },
    {
        id: "1002",
        date: new Date("2026-02-10"),
        price: "¥6,000",
        status: "発送済み",
        shipping: {
            postalCode: "530-0001",
            prefecture: "大阪府",
            city: "大阪市北区",
            address1: "梅田3-1-1",
            building: "梅田タワー1203号室",
        },
        items: [
            {
                name: "Bluetoothスピーカー",
                price: "¥6,000",
                image: "https://picsum.photos/id/187/120/120",
            },
        ],
    },
];

export const steps: OrderStatus[] = ["注文完了", "発送済み", "配達完了"];

export const tableHeaders = [
    { key: "expand", label: "" },
    { key: "order", label: "注文番号" },
    { key: "date", label: "注文日" },
    { key: "status", label: "配送状況" },
    { key: "total", label: "合計金額" },
];