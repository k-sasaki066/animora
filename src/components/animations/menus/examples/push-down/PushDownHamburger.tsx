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