"use client";

import { useContainerSize } from "@/hooks/useContainerSize";
import { HamburgerButton } from "./HamburgerButton";
import { SlideMenu } from "./SlideMenu";
import { useYellowSlideMenu } from "./useYellowSlideMenu";
import { BASE_WIDTH } from "./constants";

export default function YellowSlideHamburger() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width ? Math.min(Math.max(width/BASE_WIDTH,0.3),1) : 1;

    const { isOpen, activeMenu, setActiveMenu, buttonRef, itemRefs, navRef, toggle, close } = useYellowSlideMenu();

    return (
        <div ref={ref} className="w-full h-full relative overflow-hidden z-0">
            <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('https://picsum.photos/id/155/684/370')" }}
            />
            <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
            />

            <HamburgerButton
                ref={buttonRef}
                isOpen={isOpen}
                scale={scale}
                onToggle={toggle}
            />

            <SlideMenu
                isOpen={isOpen}
                scale={scale}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                itemRefs={itemRefs}
                onClose={close}
                ref={navRef}
            />
        </div>
    );
}