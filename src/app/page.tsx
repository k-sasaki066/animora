"use client";

import { useEffect, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import SplashScreen from "@/components/ui/SplashScreen";
import { animationMap, mdxMap } from "@/data/content-map";
import { PageLoader } from "@/components/ui/PageLoader";
import { MDXWrapper } from "@/components/docs/MDXWrapper";

export default function HomePage() {
    const [showSplash, setShowSplash] = useState(true);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    // 全ての選択状態の管理

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 4000); // 4秒でトップ画面に切替
        return () => clearTimeout(timer);
    }, []);

    const AnimationComponent =
        selectedItem &&
        animationMap[selectedItem as keyof typeof animationMap];

    const MdxComponent =
        selectedItem &&
        mdxMap[selectedItem as keyof typeof mdxMap];

    return (
        <AnimatePresence>
            {showSplash ? (
                <SplashScreen key="splash" />
            ) : (
                <motion.div
                    key="main"
                    className="w-screen h-screen body-color pt-18 flex flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Header */}
                    <Header onSelectItem={setSelectedItem} />
                    {/* NavMenuからのonSelectを選択状態にセット */}

                    <div className="flex flex-1 overflow-hidden">
                        {/* 左ナビ */}
                        <NavMenu
                            onSelectItem={setSelectedItem}
                            selectedItem={selectedItem}
                        />

                        {/* メインコンテンツ */}
                        <main className="flex-1 md:ml-0 p-4 overflow-y-scroll">
                            {!selectedItem && (
                                <>
                                    <h2 className="text-3xl font-bold mb-4">
                                        Welcome to Animora!
                                    </h2>
                                    <p className="text-lg text-gray-400">
                                        このアプリでは CSSアニメーション・JavaScriptのサンプル・HTMLタグ辞典などを確認できます。
                                    </p>
                                </>
                            )}

                            {selectedItem && (
                                <>
                                    {AnimationComponent && (
                                        <Suspense fallback={<PageLoader />}>
                                            <AnimationComponent />
                                        </Suspense>
                                    )}

                                    {MdxComponent && (
                                        <MDXWrapper>
                                            <Suspense fallback={<PageLoader />}>
                                                <MdxComponent />
                                            </Suspense>
                                        </MDXWrapper>
                                    )}
                                </>
                            )}
                        </main>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}