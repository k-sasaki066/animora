"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";

export default function HomePage() {
    const [showSplash, setShowSplash] = useState(true);

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
                  {/* SVGで手書きアニメーション */}
                  <motion.svg
                    viewBox="0 0 550 150"
                    className="w-full max-w-[600px] text-gray-400 p-2"
                    initial="hidden"
                    animate="visible"
                  >
                      <motion.text
                        x="50%"                      // 水平方向の中央
                        y="50%"                      // 垂直方向の中央
                        textAnchor="middle"          // 中央揃え
                        dominantBaseline="middle"    // 中央揃え
                        fontSize="150"                // 文字サイズ
                        fontFamily="'Alex Brush', cursive" // 手書き風フォント
                        fill="none"                  // 塗りなし
                        strokeWidth="1"              // 線の太さ
                        stroke="currentColor"        // Tailwindの色に連動
                        strokeDasharray="1100"        // 線の長さ（アニメーション用）
                        strokeDashoffset="1100"       // 初期値（線を隠す）
                        animate={{ strokeDashoffset: 0 }} // 描きながら表示
                        transition={{ duration: 2.5, ease: "easeInOut" }}      // アニメーション時間
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
                          fill="currentColor"          // 塗りつぶす色
                          stroke="none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2, duration: 1 }}  // 線アニメ後に塗り
                        >
                            Animora
                        </motion.text>
                    </motion.svg>
                </motion.div>
            ) : (
                <motion.div
                  key="main"
                  className="w-screen min-h-screen  body-color pt-[72px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                    {/* Header */}
                    <Header />

                    <div className="flex">
                      {/* 左ナビ */}
                      <NavMenu />

                      {/* メインコンテンツ */}
                      <main className="flex-1 md:ml-0 p-4">
                          <h2 className="text-3xl font-bold mb-4">Welcome to Animora!</h2>
                          <p className="text-lg text-gray-400">
                            このアプリでは CSSアニメーションやJavaScriptのサンプル、HTMLタグ辞典などを確認できます。
                          </p>
                      </main>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}