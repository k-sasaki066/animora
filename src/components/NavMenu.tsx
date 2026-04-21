import { motion, AnimatePresence } from "framer-motion";
import Accordion from "@/components/Accordion";
import { accordionData } from "@/data/accordionData";

// NavMenuが受け取る型の定義
interface NavMenuProps {
    isMobile?: boolean;
    isOpen?: boolean;
    onSelectItem: (key: string) => void;
    selectedItem: string | null;
}

export default function NavMenu({
    isMobile = false,
    isOpen = true,
    onSelectItem,
    selectedItem,
}: NavMenuProps) {

    if (!isMobile) {
        /* PC用ナビ */
        return (
            <nav className="hidden md:flex flex-col w-60 h-[calc(100vh-72px)] overflow-y-scroll pb-10">
                {accordionData.map((category) => (
                    <Accordion
                        key={category.title}
                        title={category.title}
                        items={category.items}
                        onSelect={onSelectItem}
                        selectedItem={selectedItem}
                    />
                ))}
            </nav>
        );
    }

  /* モバイル用（開閉あり） */
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.nav
                    className="flex flex-col p-4 pb-10 space-y-2 bg-gray-200 md:hidden"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.4 }}
                >
                    {accordionData.map((category) => (
                        <Accordion
                            key={category.title}
                            title={category.title}
                            items={category.items}
                            onSelect={onSelectItem}
                            selectedItem={selectedItem}
                        />
                    ))}
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
