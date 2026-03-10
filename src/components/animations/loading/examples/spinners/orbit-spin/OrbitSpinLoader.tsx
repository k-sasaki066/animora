import { Ring } from "./Ring";

interface Props {
    paused?: boolean;
}

export default function OrbitSpinLoader({ paused = false }: Props) {

    return (
        <div
            className="relative w-14 h-14"
            style={{ perspective: 780 }}
            >
            <Ring
                color="#5C5EDC"
                rotateX={35}
                rotateY={-45}
                duration={1.15}
                paused={paused}
            />
            <Ring
                color="rgba(76, 70, 101, 0.99)"
                rotateX={50}
                rotateY={10}
                duration={1.15}
                paused={paused}
            />
            <Ring
                color="rgb(233, 144, 138)"
                rotateX={35}
                rotateY={55}
                duration={1.15}
                paused={paused}
            />
        </div>
    );
}