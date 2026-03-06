"use client";

import { motion } from "framer-motion";
import { LineChart, Line, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Legend } from "recharts";
import { useContainerSize } from "@/hooks/useContainerSize";
import { AccessAnalytics } from "./accessAnalytics";
import { KpiCards } from "./KpiCards";
import { accessData } from "./accessData";

export default function AccessLineGraph() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const isMobile = width <= 530;

    const {
        avg,
        niceMax,
        today,
        diff,
        diffPercent
    } = AccessAnalytics(accessData);

    const renderDot = (props: any) => {
        const { cx, cy, index } = props;
        const isLast = index === accessData.length - 1;

        if (isLast) {
            return (
                <circle cx={cx} cy={cy} r={8} fill="#3b82f6" stroke="#fff" strokeWidth={3}/>
            );
        }

        return (
            <circle cx={cx} cy={cy} r={4} fill="#3b82f6"/>
        );
}

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full max-w-150 overflow-auto no-scrollbar **:focus:outline-none"
        >
            <h2 className="text-lg font-semibold mb-4">
                アクセス推移
            </h2>

            {/* KPIカード */}
            <KpiCards
                avg={avg}
                today={today}
                diff={diff}
                diffPercent={diffPercent}
                isMobile={isMobile}
            />

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={accessData}>
                    <ReferenceLine
                        y={avg}
                        stroke="#ef4444"
                        strokeDasharray="4 4"
                        label="AVG"
                    />

                    <Legend />

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis
                        dataKey="date"
                        tickLine={false}
                        padding={{ left: 20, right: 20 }}
                    />

                    <YAxis
                        tickLine={false}
                        domain={[0, niceMax]}
                    />

                    <Tooltip
                        contentStyle={{
                            borderRadius: "10px",
                            border: "none",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                        }}
                    />

                    <Line
                        type="monotone"
                        dataKey="access"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={renderDot}
                        activeDot={{ r: 7 }}
                        animationDuration={1200}
                    />
                </LineChart>
            </ResponsiveContainer>
        </motion.div>
    );
}