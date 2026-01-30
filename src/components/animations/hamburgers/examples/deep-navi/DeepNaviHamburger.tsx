"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { HamburgerButton } from "./HamburgerButton";
import { DeepNaviMenu } from "./DeepNaviMenu";
import { useDeepNaviMenu } from "./useDeepNaviMenu";
import { BASE_WIDTH } from "./constants";

export default function DeepNaviHamburger() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1) : 1;

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;
    const getMenuWidth = (width: number) => {
        if (width < 480) return Math.round(width * 0.8); // mobile
        if (width < 1024) return 260; // tablet
        return 300; // desktop
    };
    const menuWidth = getMenuWidth(width);

    const {
        isOpen,
        activeIndex,
        expandedIndex,
        setExpandedIndex,
        itemRefs,
        childRefs,
        buttonRef,
        navRef,
        toggle,
        close,
        onKeyDown,
        onChildKeyDown
    } = useDeepNaviMenu();
    const shouldReduceMotion = useReducedMotion();

    return (
        <div ref={ref} className="relative w-full h-full overflow-hidden z-0 flex">
            {/* Backdrop (tablet / mobile overlay) */}
            <AnimatePresence>
                {isOpen && !isDesktop && (
                    <motion.div
                        onPointerDown={toggle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        transition={
                            shouldReduceMotion
                                ? { duration: 0 }
                                : { duration: 0.4, ease: "easeInOut" }
                        }
                        className="absolute inset-0 bg-black z-30"
                    />
                )}
            </AnimatePresence>

            <DeepNaviMenu
                ref={navRef}
                isOpen={isOpen}
                activeIndex={activeIndex}
                expandedIndex={expandedIndex}
                setExpandedIndex={setExpandedIndex}
                itemRefs={itemRefs}
                childRefs={childRefs}
                onKeyDown={onKeyDown}
                onChildKeyDown={onChildKeyDown}
                onToggle={toggle}
                onClose={close}
                isDesktop={isDesktop}
                menuWidth={menuWidth}
            />

            {/* Main Container */}
            <motion.main
                initial={false}
                animate={{ x: !isDesktop && isOpen ? menuWidth : 0, }}
                transition={
                    shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.4, ease: "easeInOut" }
                }
                className="relative w-full h-full bg-gray-50 overflow-y-auto"
                style={{
                    marginLeft: isDesktop ? menuWidth : 0,
                }}
            >
                {/* Hamburger */}
                {!isDesktop && (
                    <HamburgerButton
                    ref={buttonRef}
                    isOpen={isOpen}
                    scale={scale}
                    onToggle={toggle}
                    />
                )}
                <div className="p-10">
                    <h1 className="text-lg md:text-2xl font-bold">Main Content</h1>
                    <p className="mt-4 text-sm md:text-lg">
                        Once upon a time, in a small village nestled between the mountains and the sea, there lived a curious young girl named Emily. Every morning, she would wake up before sunrise to watch the mist rise from the hills and dance over the calm waters of the bay. Emily loved exploring the forest paths, collecting colorful leaves, and listening to the whispers of the wind through the ancient trees.
                    </p>
                </div>
            </motion.main>
        </div>
    );
}