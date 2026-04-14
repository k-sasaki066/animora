import type { LoaderProps } from "../../loader";

export default function DefaultLoader({
    paused = false,
    speed = 1,
    size = 48,
    color = "#ff7e5f",
}: LoaderProps) {

    return (
        <div
            className="animate-spin border-4 border-gray-200 rounded-full"
            style={{
                width: size,
                height: size,
                borderTopColor: color,
                animationDuration: `${speed}s`,
                animationPlayState: paused ? "paused" : "running"
            }}
        />
    );
}