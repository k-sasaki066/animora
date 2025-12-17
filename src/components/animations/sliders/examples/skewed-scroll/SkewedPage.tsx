import { motion } from "framer-motion"
import { SkewedPageText } from "./SkewedPageText"

const SKEW = 18
const MAGIC_VH = 10.6

interface Props {
    data: {
        title: string
        description: string
        leftBg?: string
        rightBg?: string
        textSide?: string
    }
    isActive: boolean
}

export function SkewedPage({ data, isActive }: Props) {
    const showTextOnLeft = data.textSide === "left"

    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* LEFT */}
            <motion.div
                className="absolute left-0 top-0 w-1/2 h-full"
                animate={{
                    x: isActive ? 0 : `-${MAGIC_VH}vh`,
                    y: isActive ? 0 : "100%",
                }}
                transition={{ duration: 1 }}
            >
                <div
                    className="absolute top-0 -left-[20%] w-[140%] h-full bg-black overflow-hidden"
                    style={{ transform: `skewX(-${SKEW}deg)` }}
                >
                    <div
                        className="w-full h-full flex items-center justify-center text-white"
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
                            />
                        )}
                    </div>
                </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
                className="absolute left-1/2 top-0 w-1/2 h-full"
                animate={{
                    x: isActive ? 0 : `${MAGIC_VH}vh`,
                    y: isActive ? 0 : "-100%",
                }}
                transition={{ duration: 1 }}
            >
                <div
                    className="absolute top-0 -right-[20%] w-[140%] h-full bg-neutral-900 overflow-hidden"
                    style={{ transform: `skewX(-${SKEW}deg)` }}
                >
                    <div
                        className="w-full h-full flex flex-col items-center justify-center text-white px-12"
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
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}