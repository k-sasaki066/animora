import type { LoaderProps } from "../../loader";

export default function DotsLoader({
    paused = false,
    speed = 0.6,
    size = 12,
    color = "#7c3aed",
    delayStep = 0.16
}: LoaderProps) {

    return (
        <div className="flex items-center space-x-2">
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className="rounded-full animate-bounce"
                    style={{
                        width: size,
                        height: size,
                        backgroundColor: color,
                        animationDelay: `${i * delayStep}s`,
                        animationDuration: `${speed}s`,
                        animationPlayState: paused ? "paused" : "running"
                    }}
                />
            ))}
        </div>
    );
}