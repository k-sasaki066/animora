import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function StepRotateLoader({ paused = false }: Props) {
    const size = 50;
    const steps = 10;

    const rotateFrames = Array.from({ length: steps + 1 }, (_, i) => (360 / steps) * i);

    return (
        <motion.div
            className="relative rounded-full p-px"
            style={{
                width: size,
                aspectRatio: "1",
                background: "conic-gradient(#0000 10%, #f03355)",
                WebkitMaskImage: `
                    repeating-conic-gradient(#0000 0deg,#000 1deg 20deg,#0000 21deg 36deg),
                    radial-gradient(farthest-side,#0000 calc(100% - 8px - 1px),#000 calc(100% - 8px))
                `,
                WebkitMaskComposite: "destination-in",
                maskComposite: "intersect",
            }}
            animate={
                paused
                    ? {}
                    : { rotate: rotateFrames }
            }
            transition={
                paused
                    ? { duration: 0 }
                    : {
                        repeat: Infinity,
                        duration: 1.2,
                        ease: "linear",
                    }
            }
        />
    );
}