interface Props {
    paused?: boolean;
}

export default function DefaultLoader({ paused = false }: Props) {

    return (
        <div
            className="animate-spin border-4 border-t-[#ff7e5f] border-gray-200 rounded-full w-12 h-12"
            style={{ animationPlayState: paused ? "paused" : "running" }}
        />
    );
}