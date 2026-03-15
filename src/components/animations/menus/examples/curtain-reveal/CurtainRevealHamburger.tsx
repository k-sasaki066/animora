import { useReducedMotion } from "framer-motion";
import { HamburgerButton } from "./HamburgerButton";
import { CurtainRevealMenu } from "./CurtainRevealMenu";
import { useCurtainRevealMenu } from "./useCurtainRevealMenu";
import { BASE_WIDTH } from "./constants";
import { useContainerSize } from "@/hooks/useContainerSize";


export default function CurtainRevealHamburger() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1)
        : 1;

    const { isOpen, activeMenu, setActiveMenu, buttonRef, itemRefs, navRef, toggle, close, onKeyDown, isDesktop } = useCurtainRevealMenu();

    const prefersReducedMotion = useReducedMotion();
    const shouldReduceMotion = prefersReducedMotion ?? false;

    return (
        <div
            ref={ref}
            className="w-full h-full relative overflow-hidden z-0 bg-center bg-cover"
            style={{ backgroundImage: "url('/images/sample-06.webp')" }}
        >
            <HamburgerButton
                ref={buttonRef}
                isOpen={isOpen}
                scale={scale}
                onToggle={toggle}
                shouldReduceMotion={shouldReduceMotion}
            />

            <CurtainRevealMenu
                isOpen={isOpen}
                scale={scale}
                activeMenu={activeMenu}
                itemRefs={itemRefs}
                onClose={close}
                ref={navRef}
                onKeyDown={onKeyDown}
                isDesktop={isDesktop}
                shouldReduceMotion={shouldReduceMotion}
            />
        </div>
    );
}