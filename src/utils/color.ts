export function hexToHsl(hex: string): [number, number, number] {
    const num = parseInt(hex.replace("#", ""), 16);
    let r = (num >> 16) & 255;
    let g = (num >> 8) & 255;
    let b = num & 255;

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return [
        Math.round(h * 360),
        Math.round(s * 100),
        Math.round(l * 100),
    ];
}

export function hslToHex(h: number, s: number, l: number) {
    s /= 100;
    l /= 100;

    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);

    const f = (n: number) =>
        l - a * Math.max(
            -1,
            Math.min(k(n) - 3, Math.min(9 - k(n), 1))
        );

    const toHex = (x: number) =>
        Math.round(255 * x).toString(16).padStart(2, "0");

    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

export function adjustColor(hex: string, amount: number) {
    const [h, s, l] = hexToHsl(hex);

    const newL = Math.max(0, Math.min(100, l + amount * 100));

    return hslToHex(h, s, newL);
}

export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
    s /= 100;
    l /= 100;

    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

    return [
        Math.round(255 * f(0)),
        Math.round(255 * f(8)),
        Math.round(255 * f(4)),
    ];
}

export function lighten(hex: string, amount = 0.2) {
    const [h, s, l] = hexToHsl(hex);

    const newL = Math.min(100, l + amount * 100);

    return hslToHex(h, s, newL);
}

export function darken(hex: string, amount = 0.2) {
    const [h, s, l] = hexToHsl(hex);

    const newL = Math.max(0, l - amount * 100);

    return hslToHex(h, s, newL);
}

export function createGradient(color: string) {
    const [h, s, l] = hexToHsl(color);

    const c1 = `hsl(${(h + 20) % 360}, ${Math.min(s + 10, 100)}%, ${Math.min(l + 10, 95)}%)`;
    const c2 = `hsl(${h}, ${s}%, ${l}%)`;
    const c3 = `hsl(${(h - 20 + 360) % 360}, ${Math.min(s + 5, 100)}%, ${Math.max(l - 10, 5)}%)`;

    return `linear-gradient(90deg, ${c1}, ${c2}, ${c3})`;
}

export function withOpacity(hex: string, opacity: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}