import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

const BASE_WIDTH = 450;

const tabs = [
    { id: "html", label: "HTML" },
    { id: "css", label: "CSS" },
    { id: "php", label: "PHP" },
    { id: "js", label: "JS" },
    { id: "other", label: "Other" },
];

export default function ScrollTab() {
    const [activeId, setActiveId] = useState("html");
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1.5)
        : 1;
    const fontSize = 16 * scale; // 基準16px
    const headingSize = 28 * scale;
    const sliderHeight = 6 * scale;
    const marginTop = 4 * scale;
    const tabHeight = 54 * scale;

    const containerRef = useRef<HTMLDivElement | null>(null);
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const values = tabs.map((tab) => tab.id);

    const handleTabActivate = (tabId: string) => {
        setActiveId(tabId);

        const container = containerRef.current;
        if (!container) return;

        const target = container.querySelector<HTMLElement>(`#${tabId}`);
        if (!target) return;

        target.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    };

    const { onKeyDown } = useRovingTabFocus({
        values,
        activeValue: activeId,
        setActiveValue: setActiveId,
        refs: tabsRef,
        onActivate: handleTabActivate,
    });

    return (
        <div ref={ref} className="w-full h-full">
            <div ref={containerRef} className="w-full h-full flex flex-col overflow-y-auto no-scrollbar">
                {/* Sticky Tabs */}
                <div className="sticky top-0 z-10 bg-white shadow shrink-0" style={{ height: tabHeight }}>
                    <div className="relative flex h-full" role="tablist">
                        {tabs.map((tab, index) => {
                            const isActive = activeId === tab.id;

                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls={`panel-${tab.id}`}
                                    id={`tab-${tab.id}`}
                                    ref={(el) => {
                                        tabsRef.current[index] = el;
                                    }}
                                    tabIndex={isActive ? 0 : -1}
                                    onPointerDown={() => handleTabActivate(tab.id)}
                                    onClick={() => handleTabActivate(tab.id)}
                                    onKeyDown={onKeyDown}
                                    className={`relative flex-1 text-sm tracking-wide transition-colors ${isActive ? "text-blue-600" : "text-gray-700 hover:bg-blue-400 hover:text-white"}`}
                                    style={{ fontSize }}
                                >
                                    {tab.label}

                                    {/* slider */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="tab-slider"
                                            className="absolute bottom-0 left-0 w-full bg-blue-400"
                                            style={{ height: sliderHeight }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Sections */}
                {tabs.map((tab) => (
                    <section
                        key={tab.id}
                        id={tab.id}
                        role="tabpanel"
                        aria-labelledby={`tab-${tab.id}`}
                        className="flex flex-col justify-center items-center bg-gray-100"
                        style={{ minHeight: `calc(100% - ${tabHeight}px)` }}
                    >
                        <h2 className="tracking-widest leading-none" style={{ fontSize: headingSize }}>
                            {tab.label}
                        </h2>
                        <p className="tracking-wide opacity-60" style={{ fontSize: fontSize, marginTop }}>
                            something about {tab.label}
                        </p>
                    </section>
                ))}
            </div>
        </div>
    );
}