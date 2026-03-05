"use client";

import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
    avg: number;
    today: number;
    diff: number;
    diffPercent: string;
    isMobile: boolean;
};

type KPI = {
    label: string;
    value: number | string;
    color: string;
    animate: boolean;
};

function CountUp({ value }: { value: number }) {
    const motionValue = useMotionValue(0);
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const controls = animate(motionValue, value, {
            duration: 1.2,
            ease: "easeOut"
        });

        const unsubscribe = motionValue.on("change", (latest) => {
            setDisplay(Math.round(latest));
        });

        return () => {
            controls.stop();
            unsubscribe();
        };
    }, [value]);

    return <span>{display}</span>;
}

export function KpiCards({
    avg,
    today,
    diff,
    diffPercent,
    isMobile
}: Props) {
    const kpis: KPI[] = [
        {
            label: "今日",
            value: today,
            color: "text-black",
            animate: true
        },
        {
            label: "平均",
            value: Math.round(avg),
            color: "text-black",
            animate: true
        },
        {
            label: "前日比",
            value: `${diff >= 0 ? "+" : ""}${diff} (${diffPercent}%)`,
            color: diff >= 0 ? "text-green-500" : "text-red-500",
            animate: false
        }
    ];

    return (
        <div className={`gap-4 mb-6 ${isMobile ? "grid grid-rows-3" : "grid grid-cols-3"}`}>
            {kpis.map((kpi) => (
                <div
                    key={kpi.label}
                    className={`p-3 rounded-sm bg-gray-100 shadow-sm ${isMobile ? "w-60 flex justify-center items-center gap-3 mx-auto" : "flex flex-col" }`}
                >
                    <p className="text-sm text-gray-500">
                        {kpi.label}
                    </p>

                    <p className={`text-xl font-bold ${kpi.color}`}>
                        {kpi.animate ? (
                            <CountUp value={kpi.value as number} />
                        ) : (
                            kpi.value
                        )}
                    </p>
                </div>
            ))}
        </div>
    );
}