import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { shapesComponents } from "./Shapes";

interface Shapes {
    id: number;
    x: number;
    y: number;
    size: number;
    Component: React.FC;
    speed: number;
    rotation: number;
}

export default function DriftingShapesBackground() {
    const [particles, setParticles] = useState<Shapes[]>([]);
    const [counter, setCounter] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });
    const idRef = useRef(0);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new ResizeObserver((entries) => {
            const rect = entries[0].contentRect;
            setSize({
                width: rect.width,
                height: rect.height,
            });
        });

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (size.height === 0) return;

        let animationFrame: number;
        let idCounter = counter;

        function spawnParticle() {
            const Component = shapesComponents[Math.floor(Math.random() * shapesComponents.length)];
            const newParticle: Shapes = {
                id: idRef.current++,
                x: Math.random() * size.width,
                y: size.height,
                size: 0.5 + Math.random(),
                Component,
                speed: 1 + Math.random() * 3,
                rotation: Math.random() > 0.5 ? 1 : -1,
            };
            setParticles((prev) => [...prev, newParticle]);
            setCounter(idCounter);
        }

        function animate() {
            setParticles((prev) =>
                prev
                .map((p) => ({ ...p, y: p.y - p.speed }))
                .filter((p) => p.y > -50)
            );
            animationFrame = requestAnimationFrame(animate);
        }

        const interval = setInterval(spawnParticle, 200);
        animate();

        return () => {
            clearInterval(interval);
            cancelAnimationFrame(animationFrame);
        };
    }, [size.height, size.width]);

    return (
        <div ref={containerRef} className="relative w-full aspect-video overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    style={{
                        position: "absolute",
                        top: p.y,
                        left: p.x,
                        scale: p.size,
                    }}
                    animate={{
                        rotate: p.rotation * 360,
                        x: [0, 30, -30, 0],
                    }}
                    transition={{
                        rotate: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        x: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                    }}
                >
                    <p.Component />
                </motion.div>
            ))}
        </div>
    );
}