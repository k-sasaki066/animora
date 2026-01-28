"use client";

import { useContainerSize } from "@/hooks/useContainerSize";
import { useOverlayMenu } from "./useOverlayMenu";
import { HamburgerButton } from "./HamburgerButton";
import { OverlayMenu } from "./OverlayMenu";
import { BASE_WIDTH } from "./constants";

export default function OverlayHamburger() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1)
        : 1;

    const {
        isOpen,
        activeMenu,
        setActiveMenu,
        buttonRef,
        navRef,
        itemRefs,
        toggle,
        close,
    } = useOverlayMenu();

    return (
        <div ref={ref} className="relative w-full h-full overflow-hidden bg-[#d0d0d0] z-0">
            <HamburgerButton
                ref={buttonRef}
                isOpen={isOpen}
                scale={scale}
                onToggle={toggle}
            />

            <OverlayMenu
                ref={navRef}
                isOpen={isOpen}
                scale={scale}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                itemRefs={itemRefs}
                onClose={close}
            />
        </div>
    );
}