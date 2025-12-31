type SlideIndicatorProps = {
    total: number;
    current: number;
    onSelect?: (index: number) => void;
}

export function SlideIndicator({
    total,
    current,
    onSelect,
    }: SlideIndicatorProps) {
    return (
        <div className="flex items-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onSelect?.(i)}
                    className={`
                        w-2.5 h-2.5 rounded-full transition-all
                        ${i === current
                        ? "bg-white scale-125"
                        : "bg-white/40 hover:bg-white/70"}
                    `}
                />
            ))}
        </div>
    )
}