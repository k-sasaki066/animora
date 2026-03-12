import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { SvgPiece } from "./SvgPiece";
import { explodeTextShapes } from "./explodeTextData";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

export default function ExplodeText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();

    const controls = useAnimation();
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;

        const loop = async () => {
            if (!isMounted.current) return;
            while (isMounted.current) {
                // 表示
                await controls.start("visible");

                // 表示後待機
                await sleep(1200);

                if (!isMounted.current) break;

                // 爆発（後ろから）
                await controls.start("explode");

                // 爆発後待機
                await sleep(800);
            }
        };

        loop();

        return () => {
            isMounted.current = false;
        };
    }, [controls]);

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
        <motion.svg
            viewBox="0 0 880 105.2"
            className="w-[80%] max-w-100 p-4 fill-black stroke-black text-center bg-[#FED75A]"
            style={{ fontSize }}
            initial="hidden"
            animate={controls}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.015,
                    },
                },
                explode: {
                    transition: {
                        staggerChildren: 0.015,
                        staggerDirection: -1,
                    },
                },
            }}
        >
            {explodeTextShapes.map((shape, i) => (
                <SvgPiece key={i}>
                    {shape.type === "polygon" ? (
                        <polygon points={shape.points} />
                    ) : (
                        <path d={shape.d} />
                    )}
                </SvgPiece>
            ))}
            </motion.svg>
        </div>
    );
}

function sleep(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
}