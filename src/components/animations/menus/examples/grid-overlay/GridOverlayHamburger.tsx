import { useContainerSize } from "@/hooks/useContainerSize";
import { HamburgerButton } from "./HamburgerButton";
import { GridOverlayMenu } from "./GridOverlayMenu";
import { useGridOverlayMenu } from "./useGridOverlayMenu";

export default function GridOverlayHamburger() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width ? Math.min(Math.max(width / 480, 0.3), 1) : 1;

    const {
        isOpen,
        activeMenu,
        setActiveMenu,
        buttonRef,
        itemRefs,
        toggle,
        close,
    } = useGridOverlayMenu();

    return (
        <div ref={ref} className="relative w-full h-full bg-[#d0d0d0] z-0">
            <HamburgerButton
                isOpen={isOpen}
                scale={scale}
                onToggle={toggle}
                ref={buttonRef}
            />
            <GridOverlayMenu
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