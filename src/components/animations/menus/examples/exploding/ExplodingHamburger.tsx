"use client";

import { useContainerSize } from "@/hooks/useContainerSize";
import { HamburgerButton } from "./HamburgerButton";
import { ExplodingMenu } from "./ExplodingMenu";
import { useExplodingMenu } from "./useExplodingMenu";
import { BASE_WIDTH } from "./constants";

export default function ExplodingHamburger() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1.2)
        : 1;

    const { isOpen, activeMenu, setActiveMenu, buttonRef, itemRefs, navRef, toggle, close, onKeyDown, shouldReduceMotion, explode } = useExplodingMenu();

    return (
        <div ref={ref} className="w-full h-full relative overflow-hidden z-0 bg-[#f7f4f4]">
            <HamburgerButton
                ref={buttonRef}
                isOpen={isOpen}
                scale={scale}
                onToggle={toggle}
                shouldReduceMotion={shouldReduceMotion}
            />

            <ExplodingMenu
                ref={navRef}
                isOpen={isOpen}
                scale={scale}
                activeMenu={activeMenu}
                itemRefs={itemRefs}
                onClose={close}
                onKeyDown={onKeyDown}
                shouldReduceMotion={shouldReduceMotion}
                explode={explode}
            />
        </div>
    )
}