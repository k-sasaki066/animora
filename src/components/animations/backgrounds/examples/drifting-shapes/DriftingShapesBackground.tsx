import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { shapesComponents } from "./Shapes";
import { useContainerSize } from "@/hooks/useContainerSize";

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
    const { ref, width, height } = useContainerSize<HTMLDivElement>();
    const idRef = useRef(0);

    useEffect(() => {
        if (!width || !height) return;

        let animationFrame: number;

        function spawnParticle() {
            const Component =
                shapesComponents[Math.floor(Math.random() * shapesComponents.length)];

            setParticles((prev) => [
                ...prev,
                {
                    id: idRef.current++,
                    x: Math.random() * width,
                    y: height,
                    size: 0.5 + Math.random(),
                    Component,
                    speed: 1 + Math.random() * 3,
                    rotation: Math.random() > 0.5 ? 1 : -1,
                },
            ]);
        }

        function animate() {
            setParticles((prev) =>
                prev
                    .map((p) => ({ ...p, y: p.y - p.speed }))
                    .filter((p) => p.y > -80)
            );
            animationFrame = requestAnimationFrame(animate);
        }

        const interval = setInterval(spawnParticle, 200);
        animate();

        return () => {
            clearInterval(interval);
            cancelAnimationFrame(animationFrame);
        };
    }, [width, height]);

    return (
        <div ref={ref} className="relative w-full aspect-video overflow-hidden pointer-events-none">
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