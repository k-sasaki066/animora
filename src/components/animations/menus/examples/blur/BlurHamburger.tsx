import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { HamburgerButton } from "./HamburgerButton";
import { BlurMenu } from "./BlurMenu";
import { useBlurMenu } from "./useBlurMenu";
import { BASE_WIDTH } from "./constants";

export default function BlurHamburger() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1)
        : 1;

    const { isOpen, activeMenu, setActiveMenu, buttonRef, itemRefs, toggle, close, onKeyDown, shouldReduceMotion } = useBlurMenu();

    return (
        <div
            ref={ref}
            className="w-full h-full relative overflow-hidden z-0"
        >
            <motion.div
                animate={{
                    filter: isOpen ? "blur(4px)" : "blur(0px)",
                }}
                transition={shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.5 }
                }
                className="relative w-full h-full z-10"
            >
                <img
                    src="/images/samples/sample-27.webp"
                    alt=""
                    className="h-full w-full object-cover object-top"
                />
            </motion.div>

            <HamburgerButton
                ref={buttonRef}
                isOpen={isOpen}
                scale={scale}
                onToggle={toggle}
                shouldReduceMotion={shouldReduceMotion}
            />

            <BlurMenu
                isOpen={isOpen}
                scale={scale}
                activeMenu={activeMenu}
                itemRefs={itemRefs}
                onClose={close}
                onKeyDown={onKeyDown}
                shouldReduceMotion={shouldReduceMotion}
            />
        </div>
    );
}