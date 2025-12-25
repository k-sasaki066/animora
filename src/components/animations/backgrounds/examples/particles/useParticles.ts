import { useEffect, useState } from "react";

export interface Particle {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
}

// デフォルト値15
export function useParticles(count = 15) {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const init = Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            vx: (Math.random() - 0.5) * 0.05,
            vy: (Math.random() - 0.5) * 0.05,
        }));
        setParticles(init);
    }, [count]);

    useEffect(() => {
        const interval = setInterval(() => {
            setParticles(p =>
                p.map(pt => ({
                ...pt,
                x: (pt.x + pt.vx + 100) % 100,
                y: (pt.y + pt.vy + 100) % 100,
                }))
            );
        }, 16);

        return () => clearInterval(interval);
    }, []);

    return particles;
}