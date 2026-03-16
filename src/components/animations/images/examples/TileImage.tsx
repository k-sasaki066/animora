import { motion } from "framer-motion";
import { scaleByBase } from "@/utils/scaleByBase";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function TileImage() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const { active, bind } = useToggleHover();

    const figWidth = scaleByBase(width, { base: 98 });
    const slideTriTop = scaleByBase(width, { base: 96 });
    const slideTriLeft = scaleByBase(width, { base: -96 });
    const slideTriSize = scaleByBase(width, { base: 200 });

    const triSize = scaleByBase(width, { base: 168 });   // 三角形サイズ
    const triX = scaleByBase(width, { base: -81.2 });     // 横位置
    const triRestY = triSize; // 非表示
    const triHoverY = scaleByBase(width, { base: 105.84 }); // 表示時：三角形の 2/3 だけ見せる

    return (
        <motion.figure
            ref={ref}
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden bg-black"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
        >
            <motion.img
                src="/images/samples/sample-30.webp"
                alt=""
                className="w-full h-full object-cover"
                variants={{
                    rest: { opacity: 1 },
                    hover: { opacity: 0.5 },
                }}
                transition={{ duration: 0.35 }}
            />

            {/* SLIDE PANEL */}
            <motion.figcaption
                className="absolute top-0 right-0 h-full bg-gray-200 z-10"
                style={{
                    width: figWidth,
                    paddingTop: scaleByBase(width, { base: 8 }),
                    paddingRight: scaleByBase(width, { base: 8 }),
                }}
                variants={{
                    rest: { x: figWidth * 1.5 },
                    hover: { x: 0 },
                }}
                transition={{
                    duration: 0.35,
                    ease: "easeOut"
                }}
            >
                {/* TRIANGLE */}
                <div
                    className="absolute w-0 h-0 -z-10"
                    style={{
                        top: slideTriTop,
                        left: slideTriLeft,
                        transform: "translateY(-50%)",
                        borderTop: `${slideTriSize}px solid transparent`,
                        borderBottom: `${slideTriSize}px solid transparent`,
                        borderRight: `${slideTriSize}px solid #e5e7eb`,
                    }}
                />

                <h3
                    className="font-bold text-lg mb-1"
                    style={{
                        fontSize: scaleByBase(width, { base: 18 }),
                        marginBottom: scaleByBase(width, { base: 4 }),
                    }}
                >
                    Title
                </h3>
                <p
                    style={{
                        fontSize: scaleByBase(width, { base: 14 }),
                    }}
                    className="text-gray-600"
                >
                    Description text
                </p>
            </motion.figcaption>

            <motion.div
                className="absolute bottom-0 left-0 w-0 h-0 z-10"
                style={{
                    borderLeft: `${triSize}px solid transparent`,
                    borderRight: `${triSize}px solid transparent`,
                    borderBottom: `${triSize}px solid rgba(243,244,246,0.75)`,
                }}
                variants={{
                    rest: {
                        y: triRestY,
                        x: triX,
                        opacity: 1,
                    },
                    hover: {
                        y: triHoverY,
                        x: triX,
                        opacity: 1,
                    },
                }}
                transition={{
                    duration: 0.35,
                    ease: "easeOut"
                }}
            />
        </motion.figure>
    );
}