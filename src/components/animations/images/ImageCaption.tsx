import { motion } from "framer-motion";

interface ImageCaptionProps {
    className?: string;
    type: "Reduction" | "Tile" | "Caption";
}

export function ImageCaption({ className = "w-70 h-40 cursor-pointer", type }: ImageCaptionProps) {
    const objectCover = "object-cover w-full h-full";
    const flexCenter = "flex justify-center items-center";
    const base = "overflow-hidden relative";
    const animations = {
        // Mosaic: (
        //     <motion.figure
        //         className={`${base} ${className} rounded-none text-white font-sans`}
        //         initial="rest"
        //         whileHover="hover"
        //         animate="rest"
        //     >
        //         <img src="/river.jpg" className={`${objectCover}`} />

        //         {/* 上下の黒帯アニメーション */}
        //         <motion.div
        //             className="absolute top-0 left-0 right-0 h-1/4 bg-black"
        //             initial={{ scaleX: 0, opacity: 0 }} //中央に圧縮
        //             variants={{
        //                 hover: { scaleX: 1, opacity: 0.8 },
        //                 rest: { scaleX: 0, opacity: 0 },
        //             }}
        //             transition={{ duration: 0.4 }}
        //             style={{ originX: 0.5 }}
        //         />

        //         <motion.div
        //             className="absolute top-1/4 left-0 right-0 h-1/4 bg-black opacity-0"
        //             initial={{ scaleX: 0, opacity: 0 }}
        //             variants={{
        //                 hover: { scaleX: 1, opacity: 0.8 },
        //                 rest: { scaleX: 0, opacity: 0 },
        //             }}
        //             transition={{ duration: 0.4, delay: 0.1 }}
        //             style={{ originX: 0.5 }}
        //         />

        //         <motion.div
        //             className="absolute top-1/2 left-0 right-0 h-1/4 bg-black opacity-0"
        //             initial={{ scaleX: 0, opacity: 0 }}
        //             variants={{
        //                 hover: { scaleX: 1, opacity: 0.8 },
        //                 rest: { scaleX: 0, opacity: 0 },
        //             }}
        //             transition={{ duration: 0.4, delay: 0.2 }}
        //             style={{ originX: 0.5 }}
        //         />

        //         <motion.div
        //             className="absolute top-3/4 left-0 right-0 h-1/4 bg-black opacity-0"
        //             initial={{ scaleX: 0, opacity: 0 }}
        //             variants={{
        //                 hover: { scaleX: 1, opacity: 0.8 },
        //                 rest: { scaleX: 0, opacity: 0 },
        //             }}
        //             transition={{ duration: 0.4, delay: 0.2 }}
        //             style={{ originX: 0.5 }}
        //         />

        //         <motion.figcaption
        //             className={`absolute inset-0 p-4 z-10 flex-col text-center ${flexCenter}`}
        //         >
        //             <motion.h2
        //                 className="text-xl font-bold"
        //                 variants={{ hover: { opacity: 1 }, rest: { opacity: 0 } }}
        //                 transition={{ delay: 0.25 }}
        //             >
        //                 Thanks!
        //             </motion.h2>

        //             <motion.p
        //                 className="text-sm mt-2 opacity-0"
        //                 variants={{ hover: { opacity: 0.7 }, rest: { opacity: 0 } }}
        //                 transition={{ delay: 0.25 }}
        //             >
        //                 ホバー時に表示されます
        //             </motion.p>
        //         </motion.figcaption>
        //     </motion.figure>
        // ),

        // Layer: (
        //     <motion.figure
        //         className={`bg-black ${className} ${base}`}
        //         initial="rest"
        //         whileHover="hover"
        //         animate="rest"
        //     >
        //         <motion.img
        //         src="/sea.jpg"
        //         className={`${objectCover}`}
        //         variants={{
        //             hover: { opacity: 0.5, scale: 1.05 },
        //         }}
        //         transition={{ duration: 0.4 }}
        //         />

        //         {/* 黒いオーバーレイ */}
        //         <motion.div
        //         className="absolute inset-0 bg-black/60 opacity-0"
        //         variants={{
        //             hover: { opacity: 1, inset: "10px" },
        //         }}
        //         transition={{ duration: 0.4 }}
        //         ></motion.div>

        //         {/* テキスト */}
        //         <motion.figcaption
        //         className="absolute inset-0 p-8 flex flex-col gap-2 text-white"
        //         >
        //             <motion.h3
        //                 className="text-xl font-bold opacity-0"
        //                 variants={{
        //                 hover: { opacity: 1, y: 0 },
        //                 }}
        //                 transition={{ duration: 0.4 }}
        //             >
        //                 Hello!
        //             </motion.h3>

        //             <motion.p
        //                 className="text-sm opacity-0 mt-2"
        //                 variants={{
        //                     hover: { opacity: 1, y: -12 },
        //                 }}
        //                 transition={{ duration: 0.4, delay: 0.1 }}
        //             >
        //                 Displays on a layer when hovered.
        //             </motion.p>
        //         </motion.figcaption>
        //     </motion.figure>
        // ),

        // Stretch: (
        //     <motion.figure
        //         className={`bg-black text-white shadow-md ${className} ${base}`}
        //         initial="rest"
        //         whileHover="hover"
        //         animate="rest"
        //     >
        //         <motion.div
        //         className="absolute inset-0"
        //         variants={{
        //             rest: { opacity: 0.9, scale: 1 },
        //             hover: { opacity: 0.15, scale: 1.1 },
        //         }}
        //         transition={{ duration: 0.4 }}
        //         >
        //             <img src="/lavender.jpg"
        //                 className={`${objectCover}`} />
        //         </motion.div>

        //         <motion.figcaption
        //             className="absolute left-[7%] right-[7%] border-white"
        //             style={{
        //                 borderLeftWidth: "1px",
        //                 borderRightWidth: "1px",
        //                 borderBottomWidth: "1px",
        //             }}
        //             variants={{
        //                 rest: { top: "10%", bottom: "80%" },
        //                 hover: { top: "10%", bottom: "10%" },
        //             }}
        //             transition={{ duration: 0.4 }}
        //         >

        //             <div className="w-full flex flex-col items-center relative -translate-y-2">
        //                 <span className="absolute border-t border-white top-2 right-0 w-20"></span>
        //                 <h3 className="absolute -top-1 text-xl font-light uppercase z-20 ">
        //                 Hello!
        //                 </h3>
        //                 <span className="absolute border-t border-white top-2 left-0 w-20"></span>
        //             </div>

        //             <motion.p
        //                 className={`opacity-0 text-sm px-4 inset-0 w-full h-full ${flexCenter}`}
        //                 variants={{
        //                 rest: { opacity: 0 },
        //                 hover: { opacity: 1 },
        //                 }}
        //                 transition={{ duration: 0.45 }}
        //             >
        //                 Displays on a layer when hovered.
        //             </motion.p>
        //         </motion.figcaption>
        //     </motion.figure>
        // ),

        // HiddenText: (
        //     <motion.div
        //         className={`${base} ${className} rounded-sm bg-gray-300`}
        //         initial="rest"
        //         whileHover="hover"
        //         animate="rest"
        //         variants={{
        //         rest: {},
        //         hover: {},
        //         }}
        //     >
        //         <motion.img
        //         src="/hydrangea.jpg"
        //         className={`${objectCover}`}
        //         variants={{
        //             rest: { opacity: 1 },
        //             hover: { opacity: 0.6 },
        //         }}
        //         transition={{ duration: 0.35 }}
        //         />

        //         <motion.div
        //             className="absolute bottom-0 left-0 w-full z-10"
        //             variants={{
        //                 rest: { y: "45%" },
        //                 hover: { y: "0%" },
        //             }}
        //             transition={{ duration: 0.35, ease: "easeInOut" }}
        //             >
        //             <h2 className="text-white text-2xl font-semibold px-2">Hello!</h2>
        //             <p className="w-full text-sm font-medium bg-white/90 text-gray-800 mt-1 p-2">Displays on a layer when hovered.</p>
        //         </motion.div>
        //     </motion.div>
        // ),

        // Skew: (
        //     <motion.div
        //         className={`${base} ${className}`}
        //         initial="rest"
        //         whileHover="hover"
        //         animate="rest"
        //     >
        //         {/* 背景レイヤー */}
        //         <motion.div
        //             className="absolute -top-50 left-80 w-[200%] h-[200%] bg-white opacity-20 z-1"
        //             variants={{
        //                 rest: {
        //                     transform: "skew(-45deg) translateX(-150%) translateY(0%)"
        //                 },
        //                 hover: {
        //                     transform: "skew(-45deg) translateX(-50%) translateY(50%)", transition: { duration: 0.6 }
        //                 },
        //             }}
        //         />
        //         <motion.div
        //             className="absolute -bottom-50 right-80 w-[200%] h-[200%] bg-white opacity-20 z-1"
        //             variants={{
        //                 rest: {
        //                     transform: "skew(-45deg) translateX(150%) translateY(0%)"
        //                 },
        //                 hover: {
        //                     transform: "skew(-45deg) translateX(50%) translateY(-50%)", transition: { duration: 0.6 }
        //                 },
        //             }}
        //         />

        //         <motion.img
        //             src="/leading.jpg"
        //             className={`${objectCover}`}
        //             variants={{
        //                 rest: { filter: "grayscale(0%)" },
        //                 hover: { filter: "grayscale(100%)", transition: { duration: 0.6 } },
        //             }}
        //         />

        //         <motion.div
        //             className={`absolute inset-0 flex-col z-10 text-center ${flexCenter}`}
        //             variants={{
        //                 rest: {},
        //                 hover: { transition: { delayChildren: 0.2 } },
        //             }}
        //         >
        //             <motion.h2
        //                 className="text-2xl"
        //                 variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        //             >
        //                 Title
        //             </motion.h2>
        //             <motion.p
        //                 className="text-sm"
        //                 variants={{ rest: { opacity: 0 }, hover: { opacity: 0.7 } }}
        //             >
        //                 Description
        //             </motion.p>
        //         </motion.div>
        //     </motion.div>
        // ),

        // SpreadsOut: (
        //     <motion.figure
        //         className={`bg-black ${className} ${base}`}
        //         initial="rest"
        //         whileHover="hover"
        //         animate="rest"
        //         >
        //         <motion.img
        //             src="/sea.jpg"
        //             className={`${objectCover}`}
        //             variants={{
        //             rest: { filter: "grayscale(0%)", opacity: 1 },
        //             hover: { filter: "grayscale(100%)", opacity: 1 },
        //             }}
        //             transition={{ duration: 0.35 }}
        //         />

        //         {/* overlay */}
        //         <motion.div
        //             className="absolute inset-0 bg-white/75 origin-center"
        //             variants={{
        //             rest: { scaleX: 0 },
        //             hover: { scaleX: 1 },
        //             }}
        //             transition={{ duration: 0.4, ease: "easeInOut" }}
        //         />

        //         <motion.figcaption
        //             className={`absolute inset-0 flex-col text-center z-10 ${flexCenter}`}
        //         >
        //             <motion.h2
        //                 className="uppercase tracking-wider text-2xl font-medium px-4"
        //                 variants={{
        //                     rest: { opacity: 0, y: 10 },
        //                     hover: { opacity: 1, y: 0 },
        //                 }}
        //                 transition={{ delay: 0.2 }}
        //             >
        //                 title
        //             </motion.h2>

        //             <motion.p
        //                 className="text-sm px-8 mt-1 text-gray-700"
        //                 variants={{
        //                 rest: { opacity: 0 },
        //                 hover: { opacity: 0.7 },
        //                 }}
        //                 transition={{ delay: 0.25 }}
        //             >
        //                 description
        //             </motion.p>
        //         </motion.figcaption>
        //     </motion.figure>
        // ),

        // SubMenu: (
        //     <motion.div
        //         className={`bg-black ${className} ${base}`}
        //         initial="rest"
        //         whileHover="hover"
        //         animate="rest"
        //     >
        //         <motion.img
        //             src="/river.jpg"
        //             className={`${objectCover}`}
        //             variants={{
        //                 rest: { opacity: 1 },
        //                 hover: { opacity: 0.5 },
        //             }}
        //             transition={{ duration: 0.35 }}
        //         />

        //         <motion.div
        //             className="absolute inset-y-0 left-[-30%] right-[70%] bg-black/70"
        //             variants={{
        //                 rest: {
        //                     x: "-75%",
        //                     skewX: 20,
        //                 },
        //                 hover: {
        //                     x: "0%",
        //                     skewX: 20,
        //                 },
        //             }}
        //             transition={{ duration: 0.35, ease: "easeInOut" }}
        //         />

        //         <div className="absolute top-0 right-0 z-10 p-4 text-white">
        //             <h3 className="font-black text-lg mb-2">Hover Title</h3>

        //             <ul className="space-y-1 text-xs text-right tracking-widest">
        //                 {["DETAIL", "VIEW", "MORE"].map((text, i) => (
        //                     <motion.li
        //                         key={text}
        //                         variants={{
        //                         rest: { opacity: 0, x: 20 },
        //                         hover: { opacity: 1, x: -4 },
        //                         }}
        //                         transition={{
        //                         duration: 0.35,
        //                         delay: 0.1 * (i + 1),
        //                         }}
        //                     >
        //                         <a href="#" className="hover:text-amber-400">
        //                         {text}
        //                         </a>
        //                     </motion.li>
        //                 ))}
        //             </ul>
        //         </div>
        //     </motion.div>
        // ),

        Reduction: (
            <motion.figure
                className={`${base} bg-gray-900 text-white ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                    rest: {},
                    hover: {},
                }}
            >
                <motion.img
                    src="/fruits.jpg"
                    className="absolute left-1/2 -translate-x-1/2"
                    variants={{
                        rest: {
                            width: "100%",
                            bottom: "0%",
                        },
                        hover: {
                            width: "50%",
                            bottom: "0%",
                            transition: { duration: 0.35, ease: "easeOut" },
                        },
                    }}
                />

                <figcaption className="relative z-10 p-2 text-center">
                <motion.h2
                    className="uppercase text-lg font-semibold"
                    variants={{
                    rest: { y: 20, opacity: 0 },
                    hover: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.35 },
                    },
                    }}
                >
                    Title
                </motion.h2>

                <motion.p
                    className="text-sm opacity-80"
                    variants={{
                    rest: { y: 20, opacity: 0 },
                    hover: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.35, delay: 0.05 },
                    },
                    }}
                >
                    Hover animation example
                </motion.p>
                </figcaption>
            </motion.figure>
        ),
        
        Tile: (
            <motion.figure
                className={`${base} bg-black ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                <motion.img
                    src="/hydrangea.jpg"
                    alt=""
                    className={`${objectCover}`}
                    variants={{
                        rest: { opacity: 1 },
                        hover: { opacity: 0.5 },
                    }}
                    transition={{ duration: 0.35 }}
                />

                <motion.figcaption
                    className="absolute top-0 right-0 h-full w-[35%] bg-gray-200 -bg-conic-33 z-1 py-2 pr-2"
                    variants={{
                        rest: { x: "150%", opacity: 1 },
                        hover: { x: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    <div className="absolute top-24 -left-24 -translate-y-1/2 w-0 h-0 
                    border-y-200 border-y-transparent
                    border-r-200 border-r-gray-200 -z-1" />

                    <h3 className="font-bold text-lg mb-1">Title</h3>
                    <p className="text-sm text-gray-600">Description text</p>
                </motion.figcaption>
                <motion.div
                    className="absolute bottom-0 left-0 -translate-y-1/2 w-0 h-0 border-x-100 border-x-transparent border-b-100 border-b-gray-100/75 z-1"
                    variants={{
                        rest: { y: "150%", x: "-7%", opacity: 1 },
                        hover: { y: "86%", x:"-7%",opacity: 1 },
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                />
            </motion.figure>
        ),

        Caption: (
            <motion.figure
                className={`${base} bg-[#0c1116] text-white ${className}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                <motion.img
                    src="/leading.jpg"
                    className={`${objectCover}`}
                    variants={{
                        rest: { opacity: 1 },
                        hover: { opacity: 0.15 },
                    }}
                    transition={{ duration: 0.35 }}
                />

                <figcaption className={`absolute inset-0 ${flexCenter}`}>
                    <motion.div
                        className="absolute w-12 h-12"
                        variants={{
                            rest: { rotate: -90, opacity: 0 },
                            hover: { rotate: 0, opacity: 0.7 },
                        }}
                        transition={{ duration: 0.35, delay: 0.2 }}
                    >
                        <span className="absolute top-1/2 left-0 right-0 h-px bg-white/70" />
                        <span className="absolute left-1/2 top-0 bottom-0 w-px bg-white/70" />
                    </motion.div>

                    <motion.p
                        className="absolute bottom-6 text-sm tracking-widest"
                        variants={{
                            rest: { opacity: 0 },
                            hover: { opacity: 1 },
                        }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                    >
                        VIEW MORE
                    </motion.p>
                </figcaption>
            </motion.figure>
        ),

    };
    return animations[type];
}