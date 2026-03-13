import { Invader } from "./Invader";
import { Text } from "./Text";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function InvaderPart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const BASE = 228;
    const scale = width
        ? Math.min(Math.max(width / BASE, 0.6), 1.5)
        : 1;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <div
                className="relative w-fit h-full flex flex-col justify-center items-center font-mono font-bold leading-[1.4]"
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "center",
                }}
            >
                <Text />
                <Invader />
            </div>
        </div>
    );
}