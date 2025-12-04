"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavMenu from "@/components/NavMenu";

interface HeaderProps {
    onSelectItem: (key: string) => void;
}

export default function Header({ onSelectItem }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full h-[72px] fixed top-0 left-0 z-50 body-color">
        {/* PCヘッダー */}
        <div className="hidden md:block p-4">
            <h1
            className="text-5xl font-bold text-white"
            style={{ fontFamily: "'Alex Brush', cursive" }}
            >
            Animora
            </h1>
        </div>

        {/* モバイル・タブレット用ヘッダー */}
        <div className="flex md:hidden justify-between items-center p-4">
            <h1
            className="text-5xl font-bold text-gray-300"
            style={{ fontFamily: "'Alex Brush', cursive" }}
            >
            Animora
            </h1>
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none relative w-10 h-5 text-gray-300">
                <motion.span
                className="absolute block w-8 h-0.5 bg-gray-400 top-0 right-0"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 10 : 0 }}
                transition={{ duration: 0.3 }}
                />
                <motion.span
                className="absolute block w-8 h-0.5 bg-gray-400 top-1/2 right-0 -translate-y-1/2"
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                />
                <motion.span
                className="absolute block w-8 h-0.5 bg-gray-400 bottom-0 right-0"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                transition={{ duration: 0.3 }}
                />
            </button>
        </div>

        {/* モバイル用ハンバーガーメニュー */}
        <AnimatePresence>
            {isOpen && (
            <motion.nav
                className="flex flex-col p-4 bg-white shadow-md md:hidden max-h-screen overflow-y-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
            >
                {/* モバイル版 */}
                <NavMenu
                    isMobile
                    isOpen={isOpen}
                    onSelectItem={(key) => {
                        onSelectItem(key);   // Home の selectedItem を更新
                        setIsOpen(false);    // メニューを閉じる
                    }}
                    selectedItem={null}
                />
            </motion.nav>
            )}
        </AnimatePresence>
    </header>
    );
}