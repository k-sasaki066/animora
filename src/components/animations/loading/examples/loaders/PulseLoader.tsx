import type { LoaderProps } from "../../loader";

export default function PulseLoader({
    paused = false,
    speed = 2,
    size = 48,
    color = "#43c6ac",
}: LoaderProps) {

    return (
        <div
            className="rounded-full animate-pulse"
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                animationDuration: `${speed}s`,
                animationPlayState: paused ? "paused" : "running"
            }}
        />
    );
}