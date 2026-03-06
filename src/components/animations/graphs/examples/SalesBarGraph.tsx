"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

export default function SalesBarGraph() {

    const data = [
        { month: "Jan", sales: 4200, lastYear: 3800, target: 4500 },
        { month: "Feb", sales: 3900, lastYear: 3500, target: 4200 },
        { month: "Mar", sales: 5200, lastYear: 4700, target: 5000 },
        { month: "Apr", sales: 4800, lastYear: 4300, target: 4600 },
        { month: "May", sales: 6100, lastYear: 5600, target: 6000 },
        { month: "Jun", sales: 5700, lastYear: 5200, target: 5800 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full max-w-150 overflow-auto no-scrollbar **:focus:outline-none"
        >
            <h2 className="text-xl font-bold mb-4">
                売上比較
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    {/* グラデーション定義 */}
                    <defs>
                        <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#60a5fa" stopOpacity={1} />
                            <stop offset="100%" stopColor="#1d4ed8" stopOpacity={1} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                    />

                    <YAxis
                        axisLine={false}
                        tickLine={false}
                    />

                    <Legend height={60}/>

                    <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />

                    {/* 今年の売上 */}
                    <Bar
                        dataKey="sales"
                        radius={[4, 4, 0, 0]}
                        barSize={42}
                        animationDuration={800}
                        animationEasing="ease-out"
                        fill="url(#salesGradient)"
                        className="focus:outline-none"
                    />

                    {/* 目標ライン */}
                    <Line
                        type="linear"
                        dataKey="target"
                        stroke="#f59e0b"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r:4 }}
                    />

                    {/* 去年 */}
                    <Line
                        type="linear"
                        dataKey="lastYear"
                        stroke="#c9d1db"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={false}
                        activeDot={{ r: 4 }}
                    />
                </BarChart>
            </ResponsiveContainer>
        </motion.div>
    );
}