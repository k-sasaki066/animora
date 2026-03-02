export type Header = "Product" | "Price" | "Stock" | "Rating";

export const headers: Header[] = ["Product", "Price", "Stock", "Rating"];

export type Row = [
    product: string,
    price: string,
    stock: string,
    rating: string
];

export const rows: Row[] = [
    ["MacBook Pro", "$1999", "12", "4.8"],
    ["iPhone 15", "$999", "34", "4.7"],
    ["AirPods Pro", "$249", "56", "4.6"],
    ["iPad Air", "$799", "20", "4.5"],
    ["Apple Watch", "$399", "18", "4.6"],
    ["Mac Mini", "$699", "15", "4.5"],
    ["Mac Studio", "$1999", "6", "4.7"],
    ["iPhone 15 Pro", "$1199", "22", "4.8"],
    ["iPhone SE", "$429", "40", "4.4"],
    ["AirPods Max", "$549", "9", "4.6"],
    ["Magic Keyboard", "$299", "25", "4.3"],
    ["Magic Mouse", "$99", "31", "4.2"],
    ["Studio Display", "$1599", "7", "4.6"],
    ["HomePod", "$299", "16", "4.5"],
    ["Apple TV 4K", "$129", "28", "4.4"],
    ["Beats Fit Pro", "$199", "21", "4.5"],
    ["Beats Studio Pro", "$349", "13", "4.4"],
    ["iPad Pro 11\"", "$999", "11", "4.8"],
    ["iPad Pro 13\"", "$1299", "8", "4.7"],
    ["Apple Pencil", "$129", "37", "4.6"],
];