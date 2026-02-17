export const BASE_WIDTH = 400;

export const PRICE_MIN = 0;
export const PRICE_MAX = 20000;
export const PRICE_STEP = 500;
export const TICK_INTERVAL = 5000;

export const PRICE_TICKS = Array.from(
    { length: PRICE_MAX / TICK_INTERVAL + 1 },
    (_, i) => i * TICK_INTERVAL
);

export const COLORS = {
    borderBottom: "#ddd",
    slider: "#d1d5dc",
    ticks: "#99a1af",
    priceLabelBorder: "#d1d5dc",
    priceText: "#4a5565",
    icon: "#6a7282",
    text: "#6a7282",
};
