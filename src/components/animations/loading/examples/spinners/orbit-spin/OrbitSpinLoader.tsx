import { Ring } from "./Ring";
import type { LoaderProps } from "../../../loader";

export default function OrbitSpinLoader({
    paused = false,
    speed = 1.15,
    size = 56,
}: LoaderProps) {

    return (
        <div
            className="relative"
            style={{
                width: size,
                height: size,
                perspective: 780
            }}
            >
            <Ring
                color="#5C5EDC"
                rotateX={35}
                rotateY={-45}
                duration={speed}
                paused={paused}
            />
            <Ring
                color="rgba(76, 70, 101, 0.99)"
                rotateX={50}
                rotateY={10}
                duration={speed}
                paused={paused}
            />
            <Ring
                color="rgb(233, 144, 138)"
                rotateX={35}
                rotateY={55}
                duration={speed}
                paused={paused}
            />
        </div>
    );
}