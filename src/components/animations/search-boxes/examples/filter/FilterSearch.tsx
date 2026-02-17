"use client";

import { useState, useRef, useMemo, useId } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { FaSearch, FaCheck } from "react-icons/fa";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;
const PRICE_MIN = 0;
const PRICE_MAX = 20000;
const PRICE_STEP = 500;
const TICK_INTERVAL = 5000;

const PRICE_TICKS = Array.from(
    { length: PRICE_MAX / TICK_INTERVAL + 1 },
    (_, i) => i * TICK_INTERVAL
);

type Category =| "coat" | "jacket" | "onepiece" | "tunic";

interface Product {
    id: number;
    name: string;
    category: Category;
    color: string;
    price: number;
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "ウールコート",
        category: "coat",
        color: "black",
        price: 12000,
        image: "https://picsum.photos/id/91/50/50"
    },
    {
        id: 2,
        name: "デニムジャケット",
        category: "jacket",
        color: "blue",
        price: 8000,
        image: "https://picsum.photos/id/319/50/50"
    },
    {
        id: 3,
        name: "フレアワンピース",
        category: "onepiece",
        color: "pink",
        price: 6500,
        image: "https://picsum.photos/id/64/50/50"
    },
    {
        id: 4,
        name: "ロングチュニック",
        category: "tunic",
        color: "green",
        price: 5000,
        image: "https://picsum.photos/id/1013/50/50"
    },
    {
        id: 5,
        name: "ショートコート",
        category: "coat",
        color: "brown",
        price: 15000,
        image: "https://picsum.photos/id/1005/50/50"
    },

    {
        id: 6,
        name: "トレンチコート",
        category: "coat",
        color: "beige",
        price: 18000,
        image: "https://picsum.photos/id/473/50/50"
    },
    {
        id: 7,
        name: "ライダースジャケット",
        category: "jacket",
        color: "black",
        price: 20000,
        image: "https://picsum.photos/id/447/50/50"
    },
    {
        id: 8,
        name: "チェックワンピース",
        category: "onepiece",
        color: "red",
        price: 7200,
        image: "https://picsum.photos/id/399/50/50"
    },
    {
        id: 9,
        name: "リネンチュニック",
        category: "tunic",
        color: "white",
        price: 4800,
        image: "https://picsum.photos/id/325/50/50"
    },
    {
        id: 10,
        name: "ダッフルコート",
        category: "coat",
        color: "navy",
        price: 17000,
        image: "https://picsum.photos/id/513/50/50"
    },

    {
        id: 11,
        name: "ブルゾンジャケット",
        category: "jacket",
        color: "green",
        price: 9000,
        image: "https://picsum.photos/id/786/50/50"
    },
    {
        id: 12,
        name: "サテンワンピース",
        category: "onepiece",
        color: "purple",
        price: 11000,
        image: "https://picsum.photos/id/777/50/50"
    },
    {
        id: 13,
        name: "ニットチュニック",
        category: "tunic",
        color: "gray",
        price: 5300,
        image: "https://picsum.photos/id/604/50/50"
    },
    {
        id: 14,
        name: "ピーコート",
        category: "coat",
        color: "black",
        price: 14000,
        image: "https://picsum.photos/id/804/50/50"
    },
    {
        id: 15,
        name: "デニムコート",
        category: "coat",
        color: "blue",
        price: 16000,
        image: "https://picsum.photos/id/856/50/50"
    },

    {
        id: 16,
        name: "マウンテンジャケット",
        category: "jacket",
        color: "orange",
        price: 13000,
        image: "https://picsum.photos/id/836/50/50"
    },
    {
        id: 17,
        name: "花柄ワンピース",
        category: "onepiece",
        color: "yellow",
        price: 6900,
        image: "https://picsum.photos/id/858/50/50"
    },
    {
        id: 18,
        name: "ロングチュニックⅡ",
        category: "tunic",
        color: "pink",
        price: 5600,
        image: "https://picsum.photos/id/758/50/50"
    },
    {
        id: 19,
        name: "カシミヤコート",
        category: "coat",
        color: "gray",
        price: 20000,
        image: "https://picsum.photos/id/660/50/50"
    },
    {
        id: 20,
        name: "レザージャケット",
        category: "jacket",
        color: "brown",
        price: 19000,
        image: "https://picsum.photos/id/338/50/50"
    },

    {
        id: 21,
        name: "シャツワンピース",
        category: "onepiece",
        color: "white",
        price: 7800,
        image: "https://picsum.photos/id/823/50/50"
    },
    {
        id: 22,
        name: "オーバーチュニック",
        category: "tunic",
        color: "black",
        price: 6200,
        image: "https://picsum.photos/id/349/50/50"
    },
    {
        id: 23,
        name: "ライトコート",
        category: "coat",
        color: "green",
        price: 9800,
        image: "https://picsum.photos/id/669/50/50"
    },
    {
        id: 24,
        name: "スウェードジャケット",
        category: "jacket",
        color: "beige",
        price: 19500,
        image: "https://picsum.photos/id/389/50/50"
    },
    {
        id: 25,
        name: "プリーツワンピース",
        category: "onepiece",
        color: "navy",
        price: 8400,
        image: "https://picsum.photos/id/628/50/50"
    }
];



const categories: { label: string; value: Category }[] = [
    { label: "コート", value: "coat" },
    { label: "ジャケット", value: "jacket" },
    { label: "ワンピース", value: "onepiece" },
    { label: "チュニック", value: "tunic" },
];

const colors = ["black", "gray", "white", "brown", "beige", "olive", "green", "blue", "purple", "pink", "red", "orange", "yellow"];

export default function FilterSearch() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale =
        width ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1) : 1;

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const id = useId();

    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [minPrice, setMinPrice] = useState<number>(5000);
    const [maxPrice, setMaxPrice] = useState<number>(15000);

    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const filteredProducts = useMemo(() => {
        return products.filter((p) => {
            const matchCategory = selectedCategory ? p.category === selectedCategory : true;
            const matchColor = selectedColor ? p.color === selectedColor : true;
            const matchPrice = p.price >= minPrice && p.price <= maxPrice;
            return matchCategory && matchColor && matchPrice;
        });
    }, [selectedCategory, selectedColor, minPrice, maxPrice]);

    const clampToStep = (value: number) => {
        const stepped = Math.round(value / PRICE_STEP) * PRICE_STEP;
        return Math.min(Math.max(stepped, PRICE_MIN), PRICE_MAX);
    };

    return (
        <div
            ref={ref}
            role="region"
            aria-label="商品フィルター"
            className="w-full h-full mx-auto overflow-y-auto no-scrollbar"
        >
            <motion.div className="w-full h-full flex flex-col gap-10 origin-top" animate={{scale}}>
                {/* Category */}
                <div
                    role="radiogroup"
                    aria-labelledby="category-heading"
                    className="pb-10 border-b border-b-[#ddd]"
                >
                    <h2 id="category-heading" className="text-left text-lg font-bold mb-4">カテゴリ</h2>
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <motion.button
                                role="radio"
                                key={cat.value}
                                type="button"
                                aria-checked={selectedCategory === cat.value}
                                aria-pressed={selectedCategory === cat.value}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                    setSelectedCategory(
                                        selectedCategory === cat.value ? null : cat.value
                                    )
                                }
                                className={`w-40 text-center text-sm font-semibold px-4 py-3 rounded transition ${selectedCategory === cat.value
                                        ? "bg-orange-200"
                                        : "bg-gray-100 hover:bg-gray-200"
                                    }`}
                            >
                                {cat.label}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Color */}
                <div
                    role="radiogroup"
                    aria-labelledby="color-heading"
                    aria-label="カラー選択"
                    className="pb-10 border-b border-b-[#ddd]"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <FaSearch aria-hidden="true"/>
                        <h2 id="color-heading" className="text-lg font-bold">カラー</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 bg-[#eee] p-2">
                        {colors.map((color, index) => {
                            const isSelected = selectedColor === color;
                            const isTabbable = isSelected || (!selectedColor && index === 0);

                            return (
                                <motion.button
                                    key={color}
                                    ref={(el) => { buttonRefs.current[index] = el }}
                                    type="button"
                                    role="radio"
                                    aria-checked={isSelected}
                                    tabIndex={isTabbable ? 0 : -1}
                                    aria-label={`カラー ${color}`}
                                    whileTap={{ scale: 0.85 }}
                                    onClick={() =>
                                        setSelectedColor(isSelected ? null : color)
                                    }
                                    onKeyDown={(e) => {
                                        const currentIndex = index;

                                        // 選択トグル（解除も可能）
                                        if (e.key === " " || e.key === "Enter") {
                                            e.preventDefault();
                                            setSelectedColor(isSelected ? null : color);
                                            return;
                                        }

                                        if (e.key === "ArrowRight") {
                                            e.preventDefault();
                                            const nextIndex = (currentIndex + 1) % colors.length;
                                            buttonRefs.current[nextIndex]?.focus();
                                            return;
                                        }

                                        if (e.key === "ArrowLeft") {
                                            e.preventDefault();
                                            const prevIndex =
                                                (currentIndex - 1 + colors.length) % colors.length;
                                            buttonRefs.current[prevIndex]?.focus();
                                            return;
                                        }
                                    }}

                                    className={`relative w-8 h-8 rounded-full cursor-pointer border-2 flex items-center justify-center
                                        ${isSelected ? "border-black scale-110" : "border-transparent"}
                                    `}
                                    style={{ backgroundColor: color }}
                                >
                                    <AnimatePresence>
                                        {isSelected && (
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                                transition={
                                                    reduce
                                                        ? { duration: 0 }
                                                        : { type: "spring", stiffness: 300, damping: 20 }
                                                }
                                                className="absolute text-white drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]"
                                            >
                                                <FaCheck size={14} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            )
                        })}
                    </div>
                </div>

                {/* Price */}
                <div className="pb-10 border-b border-b-[#ddd]">
                    <div className="flex items-center gap-2 mb-4">
                        <FaSearch className="text-gray-500" />
                        <h2 className="text-lg font-semibold text-gray-800">価格</h2>
                    </div>

                    <div className="space-y-9">
                        {/* Slider */}
                        <div className="relative w-[94%] h-10 mx-auto">
                            {/* Track */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-0.5 bg-gray-300 rounded" />

                            {/* Active Range */}
                            <div
                                className="absolute top-1/2 -translate-y-1/2 h-0.75 bg-blue-400 rounded"
                                style={{
                                    left: `${(minPrice / PRICE_MAX) * 100}%`,
                                    width: `${((maxPrice - minPrice) / PRICE_MAX) * 100}%`,
                                }}
                            />

                            {/* Tick Lines */}
                            <div className="absolute top-2.5 left-0 w-full">
                                {PRICE_TICKS.map((value) => (
                                    <div
                                        key={value}
                                        className="absolute w-px h-3 bg-gray-300 -translate-x-1/2"
                                        style={{
                                            left: `${(value / PRICE_MAX) * 100}%`,
                                            top: "4px",
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Min Range */}
                            <input
                                type="range"
                                id={`${id}-min-range`}
                                name={`${id}-min-range`}
                                min={PRICE_MIN}
                                max={PRICE_MAX}
                                step={PRICE_STEP}
                                value={minPrice}
                                aria-label="最低価格"
                                aria-valuetext={`${minPrice}円`}
                                aria-valuemin={PRICE_MIN}
                                aria-valuemax={PRICE_MAX}
                                aria-valuenow={minPrice}
                                onChange={(e) => {
                                    const value = Math.min(Number(e.target.value), maxPrice - PRICE_STEP);
                                    setMinPrice(value);
                                }}
                                className="absolute -left-2 top-1/2 -translate-y-1/2 w-[calc(100%+16px)] appearance-none bg-transparent pointer-events-none
                                focus:outline-none focus:ring-0
                                [&::-webkit-slider-thumb]:pointer-events-auto
                                [&::-webkit-slider-thumb]:appearance-none
                                [&::-webkit-slider-thumb]:w-4
                                [&::-webkit-slider-thumb]:h-4
                                [&::-webkit-slider-thumb]:rounded-full
                                [&::-webkit-slider-thumb]:bg-white
                                [&::-webkit-slider-thumb]:border
                                [&::-webkit-slider-thumb]:border-gray-400
                                [&::-webkit-slider-thumb]:shadow
                                focus-visible:[&::-webkit-slider-thumb]:ring-2
                                focus-visible:[&::-webkit-slider-thumb]:ring-blue-500
                                focus-visible:[&::-webkit-slider-thumb]:ring-offset-2 
                                focus-visible:[&::-webkit-slider-thumb]:ring-offset-white
                                [&::-webkit-slider-runnable-track]:appearance-none"
                            />

                            {/* Max Range */}
                            <input
                                type="range"
                                id={`${id}-max-range`}
                                name={`${id}-max-range`}
                                min={PRICE_MIN}
                                max={PRICE_MAX}
                                step={PRICE_STEP}
                                value={maxPrice}
                                aria-label="最高価格"
                                aria-valuetext={`${maxPrice}円`}
                                aria-valuemin={PRICE_MIN}
                                aria-valuemax={PRICE_MAX}
                                aria-valuenow={maxPrice}
                                onChange={(e) => {
                                    const value = Math.max(Number(e.target.value), minPrice + PRICE_STEP);
                                    setMaxPrice(value);
                                }}
                                className="absolute -left-2 top-1/2 -translate-y-1/2 w-[calc(100%+16px)] appearance-none bg-transparent pointer-events-none
                                focus:outline-none focus:ring-0
                                [&::-webkit-slider-thumb]:pointer-events-auto
                                [&::-webkit-slider-thumb]:appearance-none
                                [&::-webkit-slider-thumb]:w-4
                                [&::-webkit-slider-thumb]:h-4
                                [&::-webkit-slider-thumb]:rounded-full
                                [&::-webkit-slider-thumb]:bg-white
                                [&::-webkit-slider-thumb]:border
                                [&::-webkit-slider-thumb]:border-gray-400
                                [&::-webkit-slider-thumb]:shadow
                                focus-visible:[&::-webkit-slider-thumb]:ring-2 
                                focus-visible:[&::-webkit-slider-thumb]:ring-blue-500 
                                focus-visible:[&::-webkit-slider-thumb]:ring-offset-2 
                                focus-visible:[&::-webkit-slider-thumb]:ring-offset-white
                                [&::-webkit-slider-runnable-track]:appearance-none"
                            />

                            {/* Ticks */}
                            <div className="absolute bottom-0 left-0 w-full">
                                {PRICE_TICKS.map((value) => {
                                    const isLast = value === PRICE_MAX;

                                    return (
                                        <span
                                            key={value}
                                            className={`absolute text-xs text-gray-400 ${
                                                isLast ? "-translate-x-2/3" : "-translate-x-1/2"
                                            }`}
                                            style={{
                                                left: `${(value / PRICE_MAX) * 100}%`,
                                            }}
                                        >
                                            {value}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Numeric Input */}
                        <div>
                            <p id="price-label" className="text-sm text-gray-600 mb-2">
                                価格（税込）を指定
                            </p>
                            <div className="flex justify-center items-center gap-3">
                                {/* Min */}
                                <label htmlFor={`${id}-min-input`} className="sr-only">
                                    最低価格
                                </label>
                                <input
                                    id={`${id}-min-input`}
                                    name={`${id}-min`}
                                    type="number"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    min={PRICE_MIN}
                                    max={PRICE_MAX}
                                    step={PRICE_STEP}
                                    value={minPrice}
                                    aria-labelledby="price-label"
                                    onChange={(e) => {
                                        const raw = Number(e.target.value);
                                        const stepped = clampToStep(raw);
                                        setMinPrice(Math.min(stepped, maxPrice - PRICE_STEP));
                                    }}
                                    className="border border-gray-300 rounded px-4 py-2 w-26"
                                />

                                <span className="text-gray-500">〜</span>

                                {/* Max */}
                                <label htmlFor={`${id}-max-input`} className="sr-only">
                                    最高価格
                                </label>
                                <input
                                    id={`${id}-max-input`}
                                    name={`${id}-max`}
                                    type="number"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    min={PRICE_MIN}
                                    max={PRICE_MAX}
                                    step={PRICE_STEP}
                                    value={maxPrice}
                                    aria-labelledby="price-label"
                                    onChange={(e) => {
                                        const raw = Number(e.target.value);
                                        const stepped = clampToStep(raw);
                                        setMaxPrice(Math.max(stepped, minPrice + PRICE_STEP));
                                    }}
                                    className="border border-gray-300 rounded px-4 py-2 w-26"
                                />
                                <span className="text-gray-600">円</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Result */}
                <div aria-live="polite" aria-atomic="true" className="col-span-3">
                    <h2 className="text-xl font-bold mb-4">
                        結果 ({filteredProducts.length})
                    </h2>

                    <div
                        className="flex flex-wrap justify-center items-center gap-6"
                        role="list"
                    >
                        {filteredProducts.map((p, index) => {
                            const isTabbable = index === 0;

                            return (
                                <motion.button
                                    role="button"
                                    aria-label={`${p.name} ${p.color} ${p.price}円`}
                                    key={p.id}
                                        ref={(el) => { cardRefs.current[index] = el }}
                                    tabIndex={isTabbable ? 0 : -1}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={
                                    reduce
                                        ? { duration: 0 }
                                        : { duration: 0.2 }
                                    }
                                    onKeyDown={(e) => {
                                        const currentIndex = index;

                                        if (e.key === "ArrowRight") {
                                            e.preventDefault();
                                            const next = (currentIndex + 1) % filteredProducts.length;
                                            cardRefs.current[next]?.focus();
                                        }

                                        if (e.key === "ArrowLeft") {
                                            e.preventDefault();
                                            const prev =
                                            (currentIndex - 1 + filteredProducts.length) %
                                            filteredProducts.length;
                                            cardRefs.current[prev]?.focus();
                                        }

                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                        }
                                    }}
                                    className="flex justify-center items-center gap-2 w-52 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <div className="overflow-hidden rounded-full">
                                        <motion.img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-10 h-10 object-cover"
                                            whileHover={{ scale: 1.2 }}
                                            whileFocus={{ scale: 1.05 }}
                                            transition={
                                                reduce
                                                    ? { duration: 0 }
                                                    : { duration: 0.2 }
                                            }
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">
                                            {p.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {p.color} / ¥{p.price}
                                        </p>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}