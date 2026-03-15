import { motion, Variants, useReducedMotion } from "framer-motion";
import { MENU_SECTIONS } from "./constants";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

type Props = {
    isOpen: boolean;
    scale: number;
    activeMenu: string;
    setActiveMenu: (v: string) => void;
    itemRefs: React.RefObject<(HTMLAnchorElement | null)[]>;
    onClose: () => void;
};

export function GridOverlayMenu({
    isOpen,
    activeMenu,
    setActiveMenu,
    itemRefs,
    onClose,
}: Props) {
    const reduce = useReducedMotion();

    const overlayVariants: Variants = {
        closed: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
        open: {
            opacity: 1,
            transition: {
            when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const sectionVariants: Variants = {
        open: {
            opacity: 1,
            y: reduce ? 0 : 20,
            transition: reduce
                ? { duration: 0 }
                : { duration: 0.5, ease: "easeOut" },
        },
        closed: {
            opacity: reduce ? 1 : 0,
            y: reduce ? 0 : 40,
            transition: reduce
                ? { duration: 0 }
                : { duration: 0.3, ease: "easeIn" },
        },
    };

    const listVariants: Variants = {
        open: {
            transition: {
                staggerChildren: reduce ? 0 : 0.08,
                delayChildren: reduce ? 0 : 0.1,
            },
        },
        closed: {
            transition: {
                staggerChildren: reduce ? 0 : 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants: Variants = {
        open: {
            opacity: 1,
            y: reduce ? 0 : 12,
            transition: reduce
                ? { duration: 0 }
                : { duration: 0.35, ease: "easeOut" },
        },
        closed: {
            opacity: reduce ? 1 : 0,
            y: reduce ? 0 : 24,
            transition: reduce
                ? { duration: 0 }
                : { duration: 0.2, ease: "easeIn" },
        },
    };

    const NAV_MENUS = MENU_SECTIONS.flatMap(s => s.links);

    const { onKeyDown } = useRovingTabFocus({
        values: NAV_MENUS,
        activeValue: activeMenu,
        setActiveValue: setActiveMenu,
        refs: itemRefs,
        onActivate: onClose,
    });

    let globalIndex = 0;

    return (
        <motion.nav
            id="grid-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-heading"
            hidden={!isOpen}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={overlayVariants}
            transition={
                reduce ? { duration: 0 } : { duration: 0.5 }
            }
            className="absolute inset-0 w-full h-full z-90 bg-neutral-900 overflow-y-auto no-scrollbar"
        >
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-start py-10 px-8">
                {MENU_SECTIONS.map((section) => (
                    <motion.section
                        key={section.title}
                        variants={sectionVariants}
                    >
                        <h2
                            id={`section-${section.title}`}
                            className="mb-2 text-lg md:text-2xl tracking-widest text-[#34b584] uppercase"
                        >
                            {section.title}
                        </h2>

                        <motion.ul className="space-y-1 md:space-y-4" variants={listVariants}>
                            {section.links.map((label) => {
                                const index = globalIndex++;

                                return (
                                    <motion.li
                                        key={label}
                                        role="none"
                                        variants={itemVariants}
                                    >
                                        <motion.a
                                            href="#"
                                            ref={(el) => {
                                                itemRefs.current[index] = el;
                                            }}
                                            tabIndex={activeMenu === label ? 0 : -1}
                                            onKeyDown={onKeyDown}
                                            onPointerDown={(e) => {
                                                // マウス・タッチのみ反応
                                                if (e.pointerType === "mouse" || e.pointerType === "touch") {
                                                    e.preventDefault();
                                                    onClose();
                                                }
                                            }}
                                            className="text-sm md:text-base text-white  hover:text-sky-400 focus-visible:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                        >
                                            {label}
                                        </motion.a>
                                    </motion.li>
                                );
                            })}
                        </motion.ul>
                    </motion.section>
                ))}
            </div>
        </motion.nav>
    );
}