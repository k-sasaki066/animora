export type Color = {
    name: string;
    hex: string;
    rgb: string;
    hsl: string;
};

export const colorData: Color[] = [
    { name: "赤", hex: "#FF0000", rgb: "rgb(255, 0, 0)", hsl: "hsl(0, 100%, 50%)" },
    { name: "緑", hex: "#00FF00", rgb: "rgb(0, 255, 0)", hsl: "hsl(120, 100%, 50%)" },
    { name: "青", hex: "#0000FF", rgb: "rgb(0, 0, 255)", hsl: "hsl(240, 100%, 50%)" },
    { name: "黒", hex: "#000000", rgb: "rgb(0, 0, 0)", hsl: "hsl(0, 0%, 0%)" },
    { name: "白", hex: "#FFFFFF", rgb: "rgb(255, 255, 255)", hsl: "hsl(0, 0%, 100%)" },
    { name: "グレー", hex: "#808080", rgb: "rgb(128, 128, 128)", hsl: "hsl(0, 0%, 50%)" },
    { name: "オレンジ", hex: "#FFA500", rgb: "rgb(255, 165, 0)", hsl: "hsl(39, 100%, 50%)" },
    { name: "ピンク", hex: "#FFC0CB", rgb: "rgb(255, 192, 203)", hsl: "hsl(350, 100%, 88%)" },
];