import { useState } from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";
import { products } from "./products";
import { buildRadarData, calculateAverages } from "./radar";
import RadarTooltip from "./RadarTooltip";
import RadarAngleTick from "./RadarAngleTick";
import ProductSelector from "./ProductSelector";
import AverageScoreList from "./AverageScoreList";

export default function EvaluationRadarGraph() {
    const [hovered, setHovered] = useState<number | null>(null);
    const [selected, setSelected] = useState([products[0].id]);

    const radarData = buildRadarData(products);
    const averages = calculateAverages(products, selected);

    const toggleProduct = (id: number) => {
        setSelected(prev =>
            prev.includes(id)
                ? prev.filter(p => p !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="w-full h-full mx-auto space-y-4 sm:space-y-6 bg-gray-900 overflow-auto no-scrollbar **:focus:outline-none py-4">

            {/* 商品リスト */}
            <ProductSelector
                products={products}
                selected={selected}
                toggleProduct={toggleProduct}
            />

            {/* 平均スコア */}
            <AverageScoreList averages={averages} />

            {/* Radar chart */}
            <motion.div
                key={selected.join("-")}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full rounded-xl px-4"
            >
                <ResponsiveContainer width="100%" height={280}>
                    <RadarChart
                        data={radarData}
                        outerRadius="75%"
                        margin={{ top: 0, right: 20, left: 20, bottom: -10 }}
                    >

                        <PolarGrid stroke="#4B5563" />

                        <Tooltip content={<RadarTooltip />} />

                        <Legend
                            verticalAlign="bottom"
                            align="center"
                            wrapperStyle={{ color: "#E5E7EB", fontSize: 12 }}
                        />

                        <PolarAngleAxis
                            dataKey="subject"
                            stroke="#F3F4F6"
                            tickLine={false}
                            tick={<RadarAngleTick />}
                        />

                        <PolarRadiusAxis
                            domain={[0, 100]}
                            stroke="#9CA3AF"
                        />

                        {products
                            .filter(p => selected.includes(p.id))
                            .map(p => (
                                <Radar
                                    key={p.id}
                                    name={p.name}
                                    dataKey={`product${p.id}`}
                                    stroke={p.color}
                                    fill={p.color}
                                    strokeOpacity={hovered && hovered !== p.id ? 0.2 : 1}
                                    fillOpacity={hovered && hovered !== p.id ? 0.05 : 0.25}
                                    isAnimationActive
                                    animationDuration={400}
                                    onPointerEnter={(e) => {
                                        if (e.pointerType === "mouse") {
                                        setHovered(p.id);
                                        }
                                    }}
                                    onPointerLeave={() => setHovered(null)}
                                />
                        ))}
                    </RadarChart>
                </ResponsiveContainer>
            </motion.div>
        </div>
    );
}