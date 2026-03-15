import { useContainerSize } from "@/hooks/useContainerSize";
import { HamburgerButton } from "./HamburgerButton";
import { CircleSpreadMenu } from "./CircleSpreadMenu";
import { useCircleSpreadMenu } from "./useCircleSpreadMenu";
import { BASE_WIDTH } from "./constants";

export default function CircleSpreadHamburger() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1) : 1;

    const {
        isOpen,
        isCircleOpen,
        setIsCircleOpen,
        activeMenu,
        setActiveMenu,
        buttonRef,
        itemRefs,
        toggle,
        close,
    } = useCircleSpreadMenu();

    return (
        <div ref={ref} className="w-full h-full relative bg-[#38bdf8] overflow-hidden z-0">
            <HamburgerButton
                ref={buttonRef}
                isOpen={isOpen}
                scale={scale}
                onToggle={toggle}
            />
            <CircleSpreadMenu
                isOpen={isOpen}
                scale={scale}
                isCircleOpen={isCircleOpen}
                setIsCircleOpen={setIsCircleOpen}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                itemRefs={itemRefs}
                onClose={close}
            />
        </div>
    );
}