import { useParticles } from "./useParticles";
import { ParticleLayer } from "./ParticleLayer";
import { ConnectionLayer } from "./ConnectionLayer";

export default function ParticlesBackground() {
    const particles = useParticles(25);

    return (
        <div className="relative w-full aspect-video bg-[#28385e] overflow-hidden rounded-lg">
            <ConnectionLayer particles={particles} />
            <ParticleLayer particles={particles} />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
                <h1 className="text-[4vw] font-bold">3D Animated</h1>
            </div>
        </div>
    );
}