import { motion } from "framer-motion";
import { SkewedPageText } from "./SkewedPageText";
import { getSkewedSliderConfig } from "@/lib/responsive/skewedConfig";

const SKEW = 18;

interface Props {
    data: {
        title: string;
        description: string;
        leftBg?: string;
        rightBg?: string;
        textSide?: string;
    };
    isActive: boolean;
    containerWidth: number;
};

export function SkewedPage({ data, isActive, containerWidth }: Props) {
    const showTextOnLeft = data.textSide === "left";
    const { magicVH } = getSkewedSliderConfig(containerWidth);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* LEFT */}
            <motion.div
                className="absolute left-0 top-0 w-1/2 h-full"
                animate={{
                    x: isActive ? 0 : `-${magicVH}vh`,
                    y: isActive ? 0 : "100%",
                }}
                transition={{ duration: 1 }}
            >
                <div
                    className="absolute top-0 -left-[24%] w-[124%] h-full bg-black overflow-hidden"
                    style={{ transform: `skewX(-${SKEW}deg)` }}
                >
                    <div
                        className="w-full h-full flex items-center justify-center text-white px-10 sm:px-12 md:px-15"
                        style={{
                            transform: `skewX(${SKEW}deg)`,
                            backgroundImage: data.leftBg,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {showTextOnLeft && (
                            <SkewedPageText
                                title={data.title}
                                description={data.description}
                                containerWidth={containerWidth}
                            />
                        )}
                    </div>
                </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
                className="absolute left-1/2 top-0 w-1/2 h-full"
                animate={{
                    x: isActive ? 0 : `${magicVH}vh`,
                    y: isActive ? 0 : "-100%",
                }}
                transition={{ duration: 1 }}
            >
                <div
                    className="absolute top-0 -right-[23%] w-[124%] h-full bg-neutral-900 overflow-hidden"
                    style={{ transform: `skewX(-${SKEW}deg)` }}
                >
                    <div
                        className="w-full h-full flex flex-col items-center justify-center text-white px-10 sm:px-12 md:px-15"
                        style={{
                            transform: `skewX(${SKEW}deg)`,
                            backgroundImage: data.rightBg,
                            backgroundSize: "cover",
                        }}
                    >
                        {!showTextOnLeft && (
                            <SkewedPageText
                                title={data.title}
                                description={data.description}
                                containerWidth={containerWidth}
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}