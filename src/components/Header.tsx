"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
    categories: string[];
}

export default function Header({ categories }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("");

    return (
        <header className="w-full bg-white/70 backdrop-blur-md shadow-md fixed top-0 left-0 z-50 md:static md:w-60 md:min-h-screen">
        {/* PC用左ナビ */}
        <nav className="hidden md:flex flex-col ">
            <h1 className="text-4xl font-bold p-4" style={{ fontFamily: "'Alex Brush', cursive"}}>Animora</h1>
            {categories.map((cat) => (
            <a
                key={cat}
                href="#"
                onClick={() => setCurrentCategory(cat)}
                className={`p-4 nav-anim ${
                    currentCategory === cat ? "active" : ""
                }`}
            >
                {cat}
            </a>
            ))}
        </nav>

        {/* モバイル・タブレット用ヘッダー */}
        <div className="flex md:hidden justify-between items-center p-4">
            <h1 className="text-3xl font-bold" style={{ fontFamily: "'Alex Brush', cursive"}}>Animora</h1>
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            >
            <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
            </div>
            </button>
        </div>

        {/* ハンバーガーメニュー開閉 */}
        <AnimatePresence>
            {isOpen && (
            <motion.nav
                className="flex flex-col items-center p-4 space-y-4 bg-white shadow-md md:hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
            >
                {categories.map((cat) => (
                <a
                    key={cat}
                    href="#"
                    className="p-2 rounded hover:cursor"
                >
                    {cat}
                </a>
                ))}
            </motion.nav>
            )}
        </AnimatePresence>
        </header>
    );
}