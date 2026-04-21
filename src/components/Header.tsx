"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavMenu from "@/components/NavMenu";
import HamburgerButton from "@/components/ui/HamburgerButton";

interface HeaderProps {
    onSelectItem: (key: string) => void;
}

export default function Header({ onSelectItem }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full h-18 fixed top-0 left-0 z-50 body-color">
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
                <HamburgerButton
                    isOpen={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>

            {/* モバイル用メニュー */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 md:hidden z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu */}
                        <motion.nav
                            className="fixed top-18 left-0 w-full shadow-md md:hidden z-50 max-h-[calc(100dvh-72px)] overflow-y-auto"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25 }}
                        >
                            <NavMenu
                                isMobile
                                isOpen={isOpen}
                                onSelectItem={(key) => {
                                    onSelectItem(key);
                                    setIsOpen(false);
                                }}
                                selectedItem={null}
                            />
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}