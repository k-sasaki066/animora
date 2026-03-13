import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function AlarmClockPart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const clockWidth = width ? Math.min(width * 0.21, 80) : 48;
    const clockCenter = Math.min(clockWidth * 0.075, 5);
    const bellWidth = clockWidth * 0.3; // ベル幅
    const bellHeight = clockWidth * 0.14; // ベル高さ
    const footLength = clockWidth * 0.15; // 足の長さ
    const footBorder = Math.max(clockWidth * 0.03, 1); // 足の線の太さ

    const sides = ["left", "right"] as const;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div
                className="aspect-square rounded-full border-4 border-current text-red-500 relative bg-[radial-gradient(circle_3px,black_95%,transparent)]"
                style={{
                    width: clockWidth,
                }}
                animate={{
                    y: [0, -3, -3, -3, -3, -3, 0],
                    rotate: [0, 10, -10, 10, -10, 10, 0],
                }}
                transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    repeatDelay: 0.8,
                    ease: "easeInOut",
                }}
            >
                {/* 時計の針 */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
                            radial-gradient(circle ${clockCenter}px, #000 95%, #0000),
                            linear-gradient(#000 50%, #0000 0) 50% / 2px 80% no-repeat,
                            linear-gradient(90deg, #000 50%, #0000 0) 50% / 60% 2px no-repeat
                        `,
                    }}
                />

                {/* ベル */}
                {sides.map((side) => (
                    <div
                        key={`bell-${side}`}
                        className="absolute rounded-t-[20px] bg-red-500"
                        style={{
                            width: bellWidth,
                            height: bellHeight,
                            top: -bellHeight / 2,
                            [side]: -bellWidth / 2,
                            transform: `rotate(${side === "left" ? -42 : 42}deg)`,
                        }}
                    />
                ))}

                {/* 脚 */}
                {sides.map((side) => (
                    <div
                        key={`foot-${side}`}
                        className="absolute border-red-500"
                        style={{
                            height: footLength,
                            bottom: -footLength / 2,
                            [side]: -footLength / 4,
                            borderWidth: footBorder,
                            transform: `rotate(${side === "left" ? 45 : -45}deg)`,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}