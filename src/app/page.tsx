"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import { LoadingList } from "@/components/animations/loading/LoadingList";
import { ButtonAnimationList } from "@/components/animations/micro-interactions/ButtonAnimationList";
import { ImageList } from "@/components/animations/images/ImageList";
import { SliderList } from "@/components/animations/sliders/SliderList";
import { TextAnimationList } from "@/components/animations/text-animations/TextAnimationList";
import { BackgroundList } from "@/components/animations/backgrounds/BackgroundList";
import { PartList } from "@/components/animations/animated-parts/PartList";
import { ActionButtonList } from "@/components/animations/action-buttons/ActionButtonList";
import { TabList } from "@/components/animations/tabs/TabList";
import { HamburgerList } from "@/components/animations/hamburgers/HamburgerList";
import { MenuList } from "@/components/animations/menus/MenuList";
import { FormPartList } from "@/components/animations/form-parts/FormPartList";
import { SearchBoxList } from "@/components/animations/search-boxes/SearchBoxList";
import { LineList } from "@/components/animations/lines/LineList";
import { PaginationList } from "@/components/animations/pagination/PaginationList";
import { RibbonList } from "@/components/animations/ribbons/RibbonList";
import { ListList } from "@/components/animations/lists/ListList";
import { CardList } from "@/components/animations/cards/CardList";
import { TableList } from "@/components/animations/tables/TableList";
import { GraphList } from "@/components/animations/graphs/GraphList";

import { MDXWrapper } from "@/components/docs/MDXWrapper";
import HtmlEntities from "@/components/docs/entities/html-entities.mdx";
import Image from "@/components/docs/media/image.mdx";
import Video from "@/components/docs/media/video.mdx";
import Source from "@/components/docs/media/source.mdx";
import ColorModel from "@/components/docs/colors/color-model.mdx";
import ColorComparison from "@/components/docs/colors/color-comparison.mdx";
import Helper from "@/components/docs/js/helpers/js-helper.mdx";

export default function HomePage() {
    const [showSplash, setShowSplash] = useState(true);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    // 全ての選択状態の管理

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 4000); // 4秒でトップ画面に切替
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {showSplash ? (
                <motion.div
                    key="splash"
                    className="flex items-center justify-center h-screen w-full body-color"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* SVGアニメーション */}
                    <motion.svg
                        viewBox="0 0 550 150"
                        className="w-full max-w-150 text-gray-400 p-2"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="150"
                            fontFamily="'Alex Brush', cursive"
                            fill="none"
                            strokeWidth="1"
                            stroke="currentColor"
                            strokeDasharray="1100"
                            strokeDashoffset="1100"
                            animate={{ strokeDashoffset: 0 }} // 描きながら表示
                            transition={{
                                duration: 2.5,
                                ease: "easeInOut"
                            }}
                        >
                            Animora
                        </motion.text>

                        {/* 線描画後に塗りつぶす */}
                        <motion.text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="150"
                            fontFamily="'Alex Brush', cursive"
                            fill="currentColor"
                            stroke="none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: 2,
                                duration: 1
                            }}
                        >
                            Animora
                        </motion.text>
                    </motion.svg>
                </motion.div>
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
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">
                                        {selectedItem}
                                    </h2>
                                    {selectedItem === "Loading" && <LoadingList />}
                                    {selectedItem === "Micro" && <ButtonAnimationList />}
                                    {selectedItem === "Image" && <ImageList />}
                                    {selectedItem === "Slider" && <SliderList />}
                                    {selectedItem === "Text" && <TextAnimationList />}
                                    {selectedItem === "Background" && <BackgroundList />}
                                    {selectedItem === "Animated-parts" && <PartList />}
                                    {selectedItem === "Action-buttons" && <ActionButtonList />}
                                    {selectedItem === "Tab" && <TabList />}
                                    {selectedItem === "Hamburger" && <HamburgerList />}
                                    {selectedItem === "Menu" && <MenuList />}
                                    {selectedItem === "Form-Parts" && <FormPartList />}
                                    {selectedItem === "Search-Box" && <SearchBoxList />}
                                    {selectedItem === "Line" && <LineList />}
                                    {selectedItem === "Pagination" && <PaginationList />}
                                    {selectedItem === "Ribbon" && <RibbonList />}
                                    {selectedItem === "List" && <ListList />}
                                    {selectedItem === "Card" && <CardList />}
                                    {selectedItem === "Table" && <TableList />}
                                    {selectedItem === "Graph" && <GraphList />}
                                    {selectedItem === "Entity" && (
                                        <MDXWrapper>
                                            <HtmlEntities />
                                        </MDXWrapper>
                                    )}
                                    {selectedItem === "ImageTag" && (
                                        <MDXWrapper>
                                            <Image />
                                        </MDXWrapper>
                                    )}
                                    {selectedItem === "VideoTag" && (
                                        <MDXWrapper>
                                            <Video />
                                        </MDXWrapper>
                                    )}
                                    {selectedItem === "SourceTag" && (
                                        <MDXWrapper>
                                            <Source />
                                        </MDXWrapper>
                                    )}
                                    {selectedItem === "ColorModel" && (
                                        <MDXWrapper>
                                            <ColorModel />
                                        </MDXWrapper>
                                    )}
                                    {selectedItem === "ColorComparison" && (
                                        <MDXWrapper>
                                            <ColorComparison />
                                        </MDXWrapper>
                                    )}
                                    {selectedItem === "Helpers" && (
                                        <MDXWrapper>
                                            <Helper />
                                        </MDXWrapper>
                                    )}
                                </div>
                            )}
                        </main>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}