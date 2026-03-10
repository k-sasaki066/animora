interface Props {
    paused?: boolean;
}

export default function DotsLoader({ paused = false }: Props) {

    return (
        <div className="flex items-center space-x-2 w-12 h-12 text-purple-600">
            {[0, 160, 320].map((delay, i) => (
                <div
                    key={i}
                    className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"
                    style={{
                        animationDelay: `${delay}ms`,
                        animationPlayState: paused ? "paused" : "running"
                    }}
                />
            ))}
        </div>
    );
}