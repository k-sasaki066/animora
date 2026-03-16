import { motion } from "framer-motion";
import { useRef } from "react";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function HoverVideoImage() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const { active, setActive } = useToggleHover();

    const handleHoverStart = () => {
        setActive(true);
        videoRef.current?.play();
    };

    const handleHoverEnd = () => {
        setActive(false);

        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const handleClick = () => {
        setActive(prev => {
            const next = !prev;

            if (videoRef.current) {
                if (next) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                }
            }

            return next;
        });
    };

    return (
        <motion.div
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden"
            initial="rest"
            animate={active ? "hover" : "rest"}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            onPointerDown={handleClick}
        >
            {/* 静止画 */}
            <motion.img
                src="/images/samples/sample-18.webp"
                alt=""
                className="w-full h-full object-cover"
                variants={{
                    rest: { opacity: 1 },
                    hover: { opacity: 0 },
                }}
                transition={{ duration: 0.4 }}
            />

            {/* 動画 */}
            <motion.video
                className="absolute top-0 left-0 w-full h-full object-cover"
                ref={videoRef}
                src="/videos/sun.mp4"
                muted
                loop
                playsInline
                variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
            />
        </motion.div>
    );
}