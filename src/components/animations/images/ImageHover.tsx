import { motion, useMotionValue, useSpring  } from "framer-motion";
import { useRef } from "react";

interface ImageHoverProps {
    className?: string;
    type: "DashedBorder" | "SlideImage" | "Tilt3d" | "HoverVideo" | "Follow";
}

export function ImageHover({ className = "w-70 h-40 cursor-pointer", type }: ImageHoverProps) {
    const objectCover = "object-cover w-full h-full";
    const flexCenter = "flex justify-center items-center";
    const base = "overflow-hidden relative";
    const videoRef = useRef<HTMLVideoElement | null>(null);

    /** マウス追従用 */
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // 動きを少しなめらかに
    const springX = useSpring(x, { stiffness: 150, damping: 20 });
    const springY = useSpring(y, { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        x.set(offsetX * 0.2); // 動きの強さ調整
        y.set(offsetY * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };
    
    const animations = {
        // Opacity: (
        //     <div className={`${base} ${className}`}>
        //         <img
        //             src="/flower.jpg"
        //             className={`${objectCover}
        //             transition-opacity duration-300 ease-in-out
        //             hover:opacity-60
        //             `}
        //         />
        //     </div>
        // ),

        // Zoom: (
        //     <div
        //         className={`${base} ${className}`}
        //     >
        //         <img
        //             src="./fruits.jpg"
        //             className={`${objectCover} hover:scale-110 transition-transform duration-300`}
        //         />
        //     </div>
        // ),

        // border: (
        //     <motion.div
        //         className={`${base} ${className}`}
        //         initial="rest"
        //         whileHover="hover"
        //         animate="rest"
        //         variants={{
        //             rest: {},
        //             hover: {},
        //         }}
        //         >
        //         <img src="./hydrangea.jpg" className={`${objectCover}`} />

        //         <motion.div
        //             className="absolute inset-0 pointer-events-none"
        //             variants={{
        //             rest: {
        //                 boxShadow:
        //                     "inset 0 0 #dc5a45, inset 0 0 #dc5a45, inset 0 0 #dc5a45, inset 0 0 #dc5a45", //box-shadow: <offset-x> <offset-y> <blur(ぼかし)> <spread(広がり)> <color>;
        //                 opacity: 0,
        //                 transition: { duration: 0.4, ease: "easeInOut" },
        //             },
        //             hover: {
        //                 boxShadow:
        //                     "inset 5px 0 #dc5a45, inset 0 5px #dc5a45, inset -5px 0 #dc5a45, inset 0 -5px #dc5a45", //左、上、右、下の順にそれぞれ5pxの線
        //                 opacity: 0.8,
        //                 transition: { duration: 0.4, ease: "easeInOut" },
        //             },
        //             }}
        //             transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1], }}
        //         />
        //     </motion.div>
        // ),

        // Float: (
        //     <motion.div
        //         className={`${base} ${className}`} initial={{ y: 0, boxShadow: "0 5px 5px rgba(0,0,0,0.1)" }}
        //         whileHover={{
        //         y: -5,
        //         boxShadow: "0 10px 10px rgba(0,0,0,0.2)",
        //         }}
        //         transition={{ duration: 0.3, ease: "easeInOut" }}
        //     >
        //         <img
        //             src="./lavender.jpg"
        //             className={`${objectCover}`}
        //         />
        //     </motion.div>
        // ),

        // Grayscale: (
        //     <div className={`${base} ${className}`}>
        //         <img
        //             src="/leading.jpg"
        //             className={`${objectCover} hover:grayscale transition-all duration-300 ease-in-out`} //グレースケールからホバー時にカラーにする場合はgrayscale hover:grayscale-0
        //         />
        //     </div>
        // ),

        // Blur: (
        //     <div className={`${base} ${className}`}>
        //         <motion.img
        //             src="/river.jpg"
        //             className={`${objectCover}`}
        //             initial={{ filter: "blur(0px)" }}
        //             whileHover={{ filter: ["blur(0px)", "blur(2px)"] }}  // ← ぼかしを段階的に
        //             transition={{ duration: 0.25, ease: "easeInOut" }}
        //         />
        //     </div>
        // ),

        // Flip: (
        //     <motion.div
        //         className={`${base} ${className}`}
        //     >
        //         <motion.img
        //         src="/sea.jpg"
        //         className={`${objectCover}`}
        //         initial={{ rotateY: 0 }}
        //         whileHover={{ rotateY: -180 }}
        //         transition={{ duration: 0.3, ease: "easeInOut" }}
        //         />
        //     </motion.div>
        // ),

        // Overlay: (
        //     <div className={`${base} ${className}`}>
        //         <img
        //             src="/flower.jpg"
        //             className={`${objectCover}`}
        //         />

        //         <motion.div
        //             className="absolute inset-0 bg-gray-400"
        //             initial={{ opacity: 0 }}
        //             whileHover={{ opacity: 0.6 }}
        //             transition={{ duration: 0.3, ease: "easeInOut" }}
        //         />
        //     </div>
        // ),

        // Blink: (
        //     <div className={`${base} ${className}`}>
        //         <img
        //             src="/fruits.jpg"
        //             className={`${objectCover}`}
        //         />

        //         <motion.div
        //             className="absolute inset-0 bg-gray-200 opacity-0"
        //             whileHover={{
        //                 opacity: [0, 0.6, 0],
        //                 transition: { duration: 1, repeat: Infinity },
        //             }}
        //         />
        //     </div>
        // ),

        // HoverText: (
        //     <motion.div
        //         className={`${base} ${className}`}
        //         initial="initial"
        //         whileHover="hover"
        //         animate="initial"
        //         variants={{
        //             initial: {},
        //             hover: {},
        //         }}
        //     >
        //         <img
        //             src="/hydrangea.jpg"
        //             className={`${objectCover}`}
        //         />

        //         <motion.div
        //             className={`
        //             absolute w-20 h-20 left-1/2 top-1/2
        //             bg-black/60 text-white text-sm rounded-full ${flexCenter}`}
        //             variants={{
        //                 initial: { opacity: 0, scale: 0.5, x: "-50%", y: "-50%" },
        //                 hover:   { opacity: 1, scale: 1,   x: "-50%", y: "-50%" },
        //             }}
        //             transition={{ duration: 0.3, ease: "easeInOut" }}
        //         >
        //             VIEW →
        //         </motion.div>
        //     </motion.div>
        // ),

        // ChangeImage: (
        //     <motion.div
        //         className={`rounded-sm ${base} ${className}`}
        //         initial="rest"
        //         whileHover="hover"
        //         animate="rest"
        //     >
        //         {/* 通常画像 */}
        //         <motion.img
        //             src="/lavender.jpg"
        //                 className={`absolute inset-0 ${objectCover}`}
        //             variants={{
        //                 rest: { opacity: 1 },
        //                 hover: { opacity: 0 },
        //             }}
        //             transition={{ duration: 0.4 }}
        //         />

        //         {/* ホバー時像 */}
        //         <motion.img
        //             src="/leading.jpg"
        //             className={`absolute inset-0 ${objectCover}`}
        //             variants={{
        //                 rest: { opacity: 0 },
        //                 hover: { opacity: 1 },
        //             }}
        //             transition={{ duration: 0.4 }}
        //         />
        //     </motion.div>
        // ),

        // ChangeText: (
        //     <motion.figure
        //         className={`bg-black text-white ${className} ${base}`}
        //         initial="rest"
        //         whileHover="hover"
        //         animate="rest"
        //     >
        //         <motion.img
        //             src="/flower.jpg"
        //             className={`${objectCover} absolute inset-0`}
        //             variants={{
        //                 hover: { opacity: 0.3, filter: "grayscale(80%)" },
        //                 rest: { opacity: 0.8, filter: "grayscale(0%)" }
        //             }}
        //         />

        //         <figcaption className="absolute inset-0 flex flex-col">
        //             {/* 上段 */}
        //             <div className={`h-1/2 ${base}`}>
        //                 <motion.p
        //                     className="absolute bottom-0 left-0 px-6 text-lg"
        //                     variants={{
        //                         rest: { opacity: 1, y: 0 },
        //                         hover: { opacity: 0, y: 50 }
        //                     }}
        //                     transition={{ duration: 0.4 }}
        //                 >
        //                 Hello!
        //                 </motion.p>

        //                 <motion.p
        //                     className="absolute bottom-0 left-0 px-6 text-lg"
        //                     variants={{
        //                         rest: { opacity: 0, y: 50 },
        //                         hover: { opacity: 1, y: 0 }
        //                     }}
        //                     transition={{ duration: 0.4 }}
        //                 >
        //                 Change
        //                 </motion.p>
        //             </div>

        //             {/* 下段 */}
        //             <div className={`h-1/2 ${base}`}>
        //                 <motion.h2
        //                     className="absolute top-0 left-0 px-6 font-bold text-2xl"
        //                     variants={{
        //                         rest: { opacity: 1, y: 0 },
        //                         hover: { opacity: 1 }
        //                     }}
        //                 >
        //                 Sample
        //                 </motion.h2>
        //             </div>
        //         </figcaption>

        //         <a className="absolute inset-0" />
        //     </motion.figure>
        // ),

        // HoverLine: (
        //     <motion.figure
        //         className={`${base} bg-black text-white ${className}`}
        //         initial="rest"
        //         whileHover="hover"
        //         animate="rest"
        //     >
        //         <motion.img
        //             src="/river.jpg"
        //             className={`${objectCover}`}
        //             variants={{
        //                 hover: { opacity: 0.5 },
        //             }}
        //             transition={{ duration: 0.5 }}
        //         />

        //         <figcaption className="absolute bottom-6 right-6 p-2 text-center
        //             ">

        //             {/* 横ライン：上 */}
        //             <motion.span
        //                 className="absolute top-0 left-0 h-px w-[400px] bg-white"
        //                 variants={{
        //                 rest: { x: "100%" },
        //                 hover: { x: "0%" },
        //                 }}
        //                 transition={{ duration: 0.8 }}
        //             />

        //             {/* 横ライン：下 */}
        //             <motion.span
        //                 className="absolute bottom-0 right-0 h-px w-[400px] bg-white"
        //                 variants={{
        //                 rest: { x: "-100%" },
        //                 hover: { x: "0%" },
        //                 }}
        //                 transition={{ duration: 0.6, delay: 0.15 }}
        //             />

        //             {/* 縦ライン：左 */}
        //             <motion.span
        //                 className="absolute top-0 left-0 w-px h-[300px] bg-white"
        //                 variants={{
        //                     rest: { y: "100%" },
        //                     hover: { y: "0%" },
        //                 }}
        //                 transition={{ duration: 0.8 }}
        //             />

        //             {/* 縦ライン：右 */}
        //             <motion.span
        //                 className="absolute bottom-0 right-0 w-px h-[300px] bg-white"
        //                 variants={{
        //                     rest: { y: "-100%" },
        //                     hover: { y: "0%" },
        //                 }}
        //                 transition={{ duration: 0.55, delay: 0.15 }}
        //             />

        //             <h3 className="uppercase font-light m-0">Sample Title</h3>
        //             <p className="uppercase text-xs font-bold bg-white text-black px-2 py-1 inline-block mt-1">
        //                 Category
        //             </p>
        //         </figcaption>

        //         <a className="absolute inset-0" />
        //     </motion.figure>
        // ),

        // Spin: (
        //     <motion.div
        //         className={`bg-black text-white ${className} ${base}`}
        //         initial="rest"
        //         whileHover="hover"
        //         animate="rest"
        //         variants={{ rest: {}, hover: {} }}
        //     >
        //         <motion.img
        //             src="/sea.jpg"
        //             className={`${objectCover}`}
        //             variants={{
        //                 rest: { opacity: 1 },
        //                 hover: { opacity: 0.25, transition: { duration: 0.4 } }
        //             }} />

        //         <motion.div
        //             className={`absolute w-8 h-8 bottom-4 right-4 ${flexCenter}`}
        //             variants={{
        //                 rest: {},
        //                 hover: {},
        //             }}
        //             >
        //             {/* 縦線 */}
        //             <motion.div
        //                 className="absolute bg-white w-0.5 h-full"
        //                 variants={{
        //                 rest: { opacity: 0, rotate: -45, originX: "50%", originY: "50%" },
        //                 hover: { opacity: 1, rotate: 0, transition: { duration: 0.3 } },
        //                 }}
        //             />

        //             {/* 横線 */}
        //             <motion.div
        //                 className="absolute bg-white h-0.5 w-full"
        //                 variants={{
        //                 rest: { opacity: 0,rotate: -45, originX: "50%", originY: "50%" },
        //                 hover: { opacity: 1, rotate: 0, transition: { duration: 0.3 } },
        //                 }}
        //             />
        //         </motion.div>
        //     </motion.div>
        // ),

        SlideImage: (
            <motion.div
                className={`${base} ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                rest: {},
                hover: {},
                }}
            >
                <motion.img
                    src="/flower.jpg"
                    className="absolute top-0 left-0 min-w-[120%] h-full object-cover"
                    variants={{
                        rest: {
                            x: 0,
                            transition: {
                                duration: 2,
                                ease: "easeOut"
                            }
                        },
                        hover: {
                            x: "-15%",
                            transition: {
                                duration: 2,
                                ease: "easeOut"
                            }
                        },
                    }}
                />
            </motion.div>
        ),

        Tilt3d: (
            <div
                className="card-box"
                style={{ perspective: 600 }}
            >
                <motion.div
                    className={`${base} ${className} ${flexCenter}`}
                    style={{
                        transformOrigin: "50% 100%", // 下を軸に回転
                    }}
                    initial={{ rotateX: 45 }}
                    whileHover={{ rotateX: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                <motion.img
                    src="/fruits.jpg"
                    className={`${objectCover}`}
                />
                </motion.div>
            </div>
        ),

        HoverVideo: (
            <motion.div
                className={`${base} ${className}`}
                initial="rest"
                animate="rest"
                whileHover="hover"
                onHoverStart={() => videoRef.current?.play()}
                onHoverEnd={() => {
                    if (videoRef.current) {
                        videoRef.current.pause();
                        videoRef.current.currentTime = 0;
                    }
                }}
            >
                {/* 静止画 */}
                <motion.img
                    src="/river.jpg"
                    className={`${objectCover}`}
                    variants={{
                        rest: { opacity: 1 },
                        hover: { opacity: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                />

                {/* 動画 */}
                <motion.video
                    className={`absolute top-0 left-0 ${objectCover}`}
                    ref={videoRef}
                    src="/videos/sun.mp4"
                    muted
                    loop
                    playsInline
                    variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.4 }}
                />
            </motion.div>
        ),

        DashedBorder: (
            <motion.div
                className={`${base} ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                <img src="/sea.jpg"
                    className={objectCover} />

                <motion.svg
                className="absolute inset-0 pointer-events-none w-full h-full"
                >
                    <motion.rect
                        x="2"
                        y="2"
                        width="calc(100% - 4px)"
                        height="calc(100% - 4px)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeDasharray="8 6"
                        variants={{
                            rest: {
                                strokeDashoffset: 0,
                                opacity: 0,
                            },
                            hover: {
                                strokeDashoffset: -180,
                                opacity: 1,
                            },
                        }}
                        transition={{
                            duration: 4,
                            ease: "easeInOut",
                        }}
                    />
                </motion.svg>
            </motion.div>
        ),

        Follow: (
            <motion.div
                className={`${base} ${className}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <motion.img
                    src="/lavender.jpg"
                    className="absolute inset-0 min-w-[120%] h-full object-cover scale-110"
                    style={{ x: springX, y: springY }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                />
            </motion.div>
        ),
    };
    return animations[type];
}