"use client"

import { useState, useEffect } from "react"
import { SkewedPage } from "./SkewedPage"
import { skewedPages } from "./data"
import { useWindowSize } from "@/lib/responsive/useWindowSize";
import { getSkewedSliderConfig } from "@/lib/responsive/skewedConfig"

export function SkewedScrollSlider() {
    const [page, setPage] = useState(0)
    const [locked, setLocked] = useState(false)

    const windowWidth = useWindowSize()
    const { width, height } = getSkewedSliderConfig(windowWidth)

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
        if (locked) return

        setLocked(true)
        setPage((prev) => {
            if (e.deltaY > 0) return Math.min(prev + 1, skewedPages.length - 1)
            return Math.max(prev - 1, 0)
        })

        setTimeout(() => setLocked(false), 1000)
        }

        window.addEventListener("wheel", onWheel)
        return () => window.removeEventListener("wheel", onWheel)
    }, [locked])

    return (
        <div
            className="relative mx-auto overflow-hidden"
            style={{ width, height }}
            >
            {skewedPages.map((data, i) => (
                <SkewedPage key={i} data={data} isActive={i === page} />
            ))}
        </div>
    )
}