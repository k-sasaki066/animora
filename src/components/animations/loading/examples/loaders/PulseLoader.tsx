interface Props {
    paused?: boolean;
}

export default function PulseLoader({ paused = false }: Props) {

    return (
        <div
            className="w-12 h-12 bg-[#43c6ac] rounded-full animate-pulse"
            style={{ animationPlayState: paused ? "paused" : "running" }}
        />
    );
}