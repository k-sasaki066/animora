// "use client";

// import { motion, useReducedMotion, Variants, AnimatePresence } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { useContainerSize } from "@/hooks/useContainerSize";
// import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";
// import { FaTools, FaCog, FaLifeRing, FaWater, FaSuitcase } from "react-icons/fa";

// export default function PushDownHamburger() {

//     return (
//         <div ref={ref} className="relative w-full h-full overflow-hidden z-0">
//             <motion.div
//                 className="relative w-full h-full bg-gray-100 flex flex-col items-start pt-[10%] p-8 overflow-y-auto no-scrollbar z-2"
//                 animate={{
//                     y: isOpen ? "25%" : 0,
//                     scale: isOpen ? 0.95 : 1,
//                     }}
//                 transition={
//                     shouldReduceMotion
//                         ? { duration: 0 }
//                         : { type: "spring", stiffness: 200, damping: 20 }
//                 }
//             >
//                 {/* scrollable content */}
//                 <div className="flex-1 w-full">
//                     <h1 className="font-bold text-lg md:text-xl mb-1">Story</h1>
//                         <p className="text-xs md:text-sm">Once upon a time, in a small village nestled between the mountains and the sea, there lived a curious young girl named Emily. Every morning, she would wake up before sunrise to watch the mist rise from the hills and dance over the calm waters of the bay. Emily loved exploring the forest paths, collecting colorful leaves, and listening to the whispers of the wind through the ancient trees.</p>
//                 </div>
//             </motion.div>

//             {/* ハンバーガー */}
//             <motion.div
//                 className="absolute top-[6%] left-[3%] origin-top-left z-10"
//                 animate={{ scale }}
//                 transition={
//                     shouldReduceMotion
//                     ? { duration: 0 }
//                     : { type: "spring", stiffness: 200, damping: 20 }
//                 }
//             >
//                 <div className="flex flex-col gap-1">
//                     <motion.button
//                         ref={buttonRef}
//                         type="button"
//                         onClick={toggle}
//                         aria-label={isOpen ? "Close menu" : "Open menu"}
//                         aria-expanded={isOpen}
//                         aria-haspopup="menu"
//                         aria-controls="global-navigation"
//                         className="relative w-9 h-5 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
//                     >
//                         {/* lines */}
//                         {HAMBURGER_LINES.map((line) => (
//                             <motion.span
//                                 key={line.key}
//                                 className={`absolute left-0 w-full h-1 bg-black ${line.className}`}
//                                 animate={line.animate(isOpen)}
//                                 transition={
//                                     shouldReduceMotion
//                                         ? { duration: 0 }
//                                         : { duration: 0.3 }
//                                 }
//                             />
//                         ))}
//                     </motion.button>
//                     <AnimatePresence mode="wait">
//                         <motion.span
//                             key={isOpen ? "close" : "menu"}
//                             initial={{
//                                 opacity: 0,
//                                 y: -4
//                             }}
//                             animate={{
//                                 opacity: 1,
//                                 y: 0,
//                                 color: isOpen ? "#ffffff" : "#000000",
//                             }}
//                             exit={{
//                                 opacity: 0,
//                                 y: 4
//                             }}
//                             transition={shouldReduceMotion
//                                 ? { duration: 0 }
//                                 : { duration: 0.25, ease: "easeOut" }
//                             }
//                             className="text-sm tracking-wide text-black select-none"
//                         >
//                             {isOpen ? "close" : "menu"}
//                         </motion.span>
//                     </AnimatePresence>
//                 </div>
//             </motion.div>

//             {/* メニュー */}
//             <motion.nav
//                 ref={navRef}
//                 id="overlay-menu"
//                 role="navigation"
//                 aria-label="メインメニュー"
//                 aria-hidden={!isOpen}
//                 className="absolute w-full h-full top-0 left-0 bg-[#25262b] z-1"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={shouldReduceMotion
//                     ? { duration: 0 }
//                     : { duration: 0.3, ease: "easeOut" }
//                 }
//             >
//                 <motion.ul
//                     role="menu"
//                     className="flex justify-end items-center gap-4  p-3 origin-top-right"
//                     animate={{ scale }}
//                 >
//                     <AnimatePresence>
//                         {isOpen &&
//                         NAV_MENUS.map((item, i) => (
//                             <motion.li
//                                 key={item.label}
//                                 role="none"
//                                 custom={i}
//                                 initial="closed"
//                                 animate="open"
//                                 exit="closed"
//                                 variants={itemVariants}
//                                 whileHover={{ scale: 1.2 }}
//                                 className=""
//                             >
//                                 <a
//                                     href="#"
//                                     role="menuitem"
//                                     className="flex flex-col gap-1 px-1.5 text-lg cursor-pointer text-blue-500 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:text-blue-400"
//                                     ref={(el) => {
//                                         itemRefs.current[i] = el;
//                                     }}
//                                     tabIndex={activeMenu.label === item.label ? 0 : -1}
//                                     onKeyDown={onKeyDown}
//                                     onPointerDown={(e) => {
//                                         // マウス・タッチのみ反応
//                                         if (e.pointerType === "mouse" || e.pointerType === "touch") {
//                                             e.preventDefault();
//                                             close();
//                                         }
//                                     }}
//                                 >
//                                     <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-500 text-white text-xl mx-auto">
//                                         {item.icon}
//                                     </div>
//                                     <h4 className="text-white text-xs text-center">
//                                         {item.label}
//                                     </h4>
//                                 </a>
//                             </motion.li>
//                         ))}
//                     </AnimatePresence>
//                 </motion.ul>
//             </motion.nav>
//         </div>
//     );
// }

"use client";
import { useContainerSize } from "@/hooks/useContainerSize";
import { HamburgerButton } from "./HamburgerButton";
import { PushDownMenu } from "./PushDownMenu";
import { usePushDownMenu } from "./usePushDownMenu";
import { BASE_WIDTH } from "./constants";
import { motion, useReducedMotion } from "framer-motion";

export default function PushDownHamburger() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1) : 1;

    const { isOpen, activeMenu, setActiveMenu, buttonRef, itemRefs, navRef, toggle, close, onKeyDown } = usePushDownMenu();

    const shouldReduceMotion = useReducedMotion();

    return (
        <div ref={ref} className="w-full h-full relative overflow-hidden z-0">
            <motion.div className="relative w-full h-full bg-gray-100 flex flex-col items-start pt-[10%] p-8 overflow-y-auto no-scrollbar z-2"
                animate={{
                    y: isOpen ? "25%" : 0,
                    scale: isOpen ? 0.95 : 1,
                }}
                transition={
                    shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 200, damping: 20 }
                }
            >
                {/* scrollable content */}
                <div className="flex-1 w-full">
                    <h1 className="font-bold text-lg md:text-xl mb-1">Story</h1>
                    <p className="text-xs md:text-sm">Once upon a time, in a small village nestled between the mountains and the sea, there lived a curious young girl named Emily. Every morning, she would wake up before sunrise to watch the mist rise from the hills and dance over the calm waters of the bay. Emily loved exploring the forest paths, collecting colorful leaves, and listening to the whispers of the wind through the ancient trees.</p>
                </div>
            </motion.div>

            <HamburgerButton ref={buttonRef} isOpen={isOpen} scale={scale} onToggle={toggle} />

            <PushDownMenu
                isOpen={isOpen}
                scale={scale}
                activeMenu={activeMenu}
                itemRefs={itemRefs}
                onClose={close}
                ref={navRef}
                onKeyDown={onKeyDown}
            />
        </div>
    );
}