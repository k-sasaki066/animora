import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

function adjustColor(hex: string, amount: number) {
    // hex → rgb
    const num = parseInt(hex.replace("#", ""), 16);
    let r = (num >> 16) & 255;
    let g = (num >> 8) & 255;
    let b = num & 255;

    // rgb → hsl
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

    // 明度を調整（ここがポイント）
    l = Math.max(0, Math.min(1, l + amount));

    // hsl → rgb
    const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    };

    let r2, g2, b2;

    if (s === 0) {
        r2 = g2 = b2 = l;
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r2 = hue2rgb(p, q, h + 1/3);
        g2 = hue2rgb(p, q, h);
        b2 = hue2rgb(p, q, h - 1/3);
    }

    const toHex = (x: number) =>
        Math.round(x * 255).toString(16).padStart(2, "0");

    return `#${toHex(r2)}${toHex(g2)}${toHex(b2)}`;
}

export default function ColorCycleButton({
    speed = 0.3,
    color = "#16A34A",
}: ButtonParams) {
    const { active, bind } = useToggleHover();
    const lightColor = adjustColor(color, 0.35);

    return (
        <motion.div
            className="relative rounded-full border-2 border-green-600 overflow-hidden w-40 h-12 cursor-pointer"
            style={{
                borderColor: color,
            }}
            initial="initial"
            animate={active ? "hover" : "initial"}
            {...bind}
        >
            {/* 背景1 */}
            <motion.div
                className="absolute left-0 w-full h-full z-0"
                style={{
                    backgroundColor: lightColor,
                }}
                variants={{
                    initial: { top: "-100%" },
                    hover: { top: 0 }
                }}
                transition={{
                    duration: speed,
                    ease: "easeInOut",
                }}
            />

            {/* 背景2 */}
            <motion.div
                className="absolute left-0 w-full h-full z-1"
                style={{
                    backgroundColor: color,
                }}
                variants={{
                    initial: { top: "-100%" },
                    hover: { top: 0 },
                }}
                transition={{
                    duration: speed,
                    ease: "easeInOut",
                    delay: 0.2
                }}
            />

            {/* テキスト */}
            <motion.span
                className="absolute inset-0 z-10 flex justify-center items-center"
                variants={{
                    initial: { color: color },
                    hover: { color: "#fff" },
                }}
                transition={{
                    duration: speed * 1.2,
                    ease: "easeInOut"
                }}
            >
                BUTTON
            </motion.span>
        </motion.div>
    );
}