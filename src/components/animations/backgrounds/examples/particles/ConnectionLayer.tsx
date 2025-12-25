import { Particle } from "./useParticles";

export function ConnectionLayer({ particles }: { particles: Particle[] }) {
    return (
        <svg className="absolute inset-0 w-full h-full">
        {particles.map((p, i) =>
            particles.slice(i + 1).map(p2 => {
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist > 20) return null; //画面幅の約20%以内

                return (
                    <line
                        key={`${p.id}-${p2.id}`}
                        x1={`${p.x}%`}
                        y1={`${p.y}%`}
                        x2={`${p2.x}%`}
                        y2={`${p2.y}%`}
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="1"
                    />
                );
            })
        )}
        </svg>
    );
}