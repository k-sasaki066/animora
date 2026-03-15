import { useContainerSize } from "@/hooks/useContainerSize";
import { BASE_WIDTH } from "./constants";
import { useSlideInMenu } from "./useSlideInMenu";
import { HamburgerButton } from "./HamburgerButton";
import { SlideInMenu } from "./SlideInMenu";

export default function SlideInHamburger() {

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1)
        : 1;

    const { isOpen, activeMenu, setActiveMenu, buttonRef, itemRefs, navRef, toggle, close, onKeyDown } = useSlideInMenu();

    return (
        <div ref={ref} className="w-full h-full relative bg-[#4d4c4c] overflow-hidden z-0">
            <HamburgerButton
                ref={buttonRef}
                isOpen={isOpen}
                scale={scale}
                onToggle={toggle}
            />

            <SlideInMenu
                ref={navRef}
                isOpen={isOpen}
                scale={scale}
                activeMenu={activeMenu}
                itemRefs={itemRefs}
                onClose={close}
                onKeyDown={onKeyDown}
            />
        </div>
    );
}