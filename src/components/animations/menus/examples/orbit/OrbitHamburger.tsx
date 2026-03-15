import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { HamburgerButton } from "./HamburgerButton";
import { OrbitMenu } from "./OrbitMenu";
import { useOrbitMenu } from "./useOrbitMenu";
import { BASE_WIDTH } from "./constants";

export default function OrbitHamburger() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1)
        : 1;

    const { isOpen, activeMenu, setActiveMenu, buttonRef, itemRefs, menuRootRef, toggle, close, onKeyDown, buttonControls, itemsControls, shouldReduceMotion } = useOrbitMenu();

    return (
        <div
            ref={ref}
            className="relative w-full h-full bg-cover bg-bottom"
            style={{ backgroundImage: 'url(https://greghub.github.io/animated-navigation/assets/background.svg)' }}
        >
            {/* Welcome text */}
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.3 }
                }
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl text-white tracking-[4px]"
            >
                Welcome!
            </motion.h1>

            {/* Navigation */}
            <motion.nav
                id="global-navigation"
                aria-label="Main navigation"
                className="w-full h-full origin-top-left"
                animate={{ scale }}
                transition={
                    shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 200, damping: 20 }
                }
            >
                <div ref={menuRootRef}>
                    <HamburgerButton
                        ref={buttonRef}
                        isOpen={isOpen}
                        scale={scale}
                        onToggle={toggle}
                        buttonControls={buttonControls}
                    />
                    <OrbitMenu
                        isOpen={isOpen}
                        scale={scale}
                        activeMenu={activeMenu}
                        itemRefs={itemRefs}
                        onClose={close}
                        onKeyDown={onKeyDown}
                        shouldReduceMotion={shouldReduceMotion}
                        itemsControls={itemsControls}
                    />
                </div>
            </motion.nav>
        </div>
    );
}