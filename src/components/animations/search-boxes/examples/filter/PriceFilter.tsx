import { useId } from "react";
import { FaSearch } from "react-icons/fa";
import { PRICE_MIN, PRICE_MAX, PRICE_STEP, PRICE_TICKS, COLORS,} from "./constants";

interface PriceFilterProps {
    minPrice: number;
    maxPrice: number;
    setMinPrice: (value: number) => void;
    setMaxPrice: (value: number) => void;
    clampToStep: (value: number) => number;
}

export default function PriceFilter({
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    clampToStep,
}: PriceFilterProps) {
    const id = useId();

    return (
        <div
            className="pb-10 border-b"
            style={{ borderBottomColor: COLORS.borderBottom }}
        >
            <div className="flex items-center gap-2 mb-4">
                <FaSearch style={{ color: COLORS.icon }} />
                <h2 className="text-lg font-semibold text-[#1e2939]">
                    価格
                </h2>
            </div>

            <div className="space-y-9">
                {/* Slider */}
                <div className="relative w-[94%] h-10 mx-auto">
                    {/* Track */}
                    <div
                        className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-0.5 rounded"
                        style={{ backgroundColor: COLORS.slider }}
                    />

                    {/* Active Range */}
                    <div
                        className="absolute top-1/2 -translate-y-1/2 h-0.75 bg-blue-400 rounded"
                        style={{
                            left: `${(minPrice / PRICE_MAX) * 100}%`,
                            width: `${((maxPrice - minPrice) / PRICE_MAX) * 100
                                }%`,
                        }}
                    />

                    {/* Tick Lines */}
                    <div className="absolute top-2.5 left-0 w-full">
                        {PRICE_TICKS.map((value) => (
                            <div
                                key={value}
                                className="absolute w-px h-3 -translate-x-1/2"
                                style={{
                                    left: `${(value / PRICE_MAX) * 100}%`,
                                    top: "4px",
                                    backgroundColor: COLORS.slider,
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
                            const value = Math.min(
                                Number(e.target.value),
                                maxPrice - PRICE_STEP
                            );
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
                        [&::-webkit-slider-thumb]:shadowfocus-visible:[&::-webkit-slider-thumb]:ring-2
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
                            const value = Math.max(
                                Number(e.target.value),
                                minPrice + PRICE_STEP
                            );
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
                                    className={`absolute text-xs ${isLast ? "-translate-x-2/3" : "-translate-x-1/2" }`}
                                    style={{
                                        left: `${(value / PRICE_MAX) * 100}%`,
                                        color: COLORS.ticks,
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
                    <p
                        id="price-label"
                        className="text-sm mb-2"
                        style={{ color: COLORS.priceText }}
                    >
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
                                setMinPrice(
                                    Math.min(stepped, maxPrice - PRICE_STEP)
                                );
                            }}
                            className="border rounded px-4 py-2 w-26"
                            style={{
                                borderColor: COLORS.priceLabelBorder,
                            }}
                        />

                        <span style={{ color: COLORS.text }}>〜</span>

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
                                setMaxPrice(
                                    Math.max(stepped, minPrice + PRICE_STEP)
                                );
                            }}
                            className="border rounded px-4 py-2 w-26"
                            style={{
                                borderColor: COLORS.priceLabelBorder,
                            }}
                        />
                        <span style={{ color: COLORS.priceText}}>円</span>
                    </div>
                </div>
            </div>
        </div>
    );
}