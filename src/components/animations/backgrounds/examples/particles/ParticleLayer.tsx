import { motion } from "framer-motion";
import { Particle } from "./useParticles";

export function ParticleLayer({ particles }: { particles: Particle[] }) {
    return (
        <>
            {particles.map(p => (
                <motion.div
                    key={p.id}
                    className="absolute w-1.5 h-1.5 bg-white rounded-full"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}
        </>
    );
}