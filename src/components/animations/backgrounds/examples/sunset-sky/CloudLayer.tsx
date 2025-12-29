"use client";

import Cloud, { CloudProps } from "./Cloud";
import { useContainerSize } from "@/hooks/useContainerSize";

interface CloudLayerProps {
    layer: "Foreground" | "Background";
    count?: number;
}

function generateClouds(
    count: number,
    isForeground: boolean,
    containerWidth: number
): CloudProps[] {
    const clouds: CloudProps[] = [];

    const baseDuration = isForeground ? 40 : 55;

    for (let i = 0; i < count; i++) {
        const widthRatio = isForeground
        ? 0.1 + i * 0.01
        : 0.06 + i * 0.008;

        const size = containerWidth * widthRatio;

        clouds.push({
            size,
            top: 35 + i * 6,
            duration: baseDuration - i * 4,
            delay: -(baseDuration / 6.5) * i,
            opacity: isForeground ? 0.8 : 0.5,
            z: isForeground ? 2 : 1,
            xStart: containerWidth + i * (containerWidth / count),
            containerWidth,
        });
    }

    return clouds;
}

export default function CloudLayer({
    layer,
    count = 7,
}: CloudLayerProps) {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const clouds = width
        ? generateClouds(count, layer === "Foreground", width)
        : [];

    return (
        <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
            {clouds.map((props, i) => (
                <Cloud key={i} {...props} />
            ))}
        </div>
    );
}