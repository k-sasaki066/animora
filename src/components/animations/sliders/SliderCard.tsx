
import { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CiCirclePlus } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

interface SliderCardProps {
    title: string;
    video: string;
    onClick: () => void;
}

export function SliderCard({
    title,
    video,
    onClick,
}: SliderCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <Card className="relative max-w-140 mx-auto">
            <button
                type="button"
                onClick={onClick}
                className="absolute top-2 right-2 text-3xl text-[#464861] p-1.5 cursor-pointer"
            >
                <CiCirclePlus />
            </button>

            <CardHeader>
                <CardTitle className="text-center">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
                <div className="relative w-full h-full">
                    <video
                        ref={videoRef}
                        src={video}
                        muted
                        loop
                        playsInline
                        className="w-full aspect-video object-cover"
                        onMouseEnter={(e) => {
                            e.currentTarget.play();
                            setIsPlaying(true);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            setIsPlaying(false);
                        }}
                        onTouchStart={(e) => {
                            e.currentTarget.play();
                            setIsPlaying(true);
                        }}
                        onTouchEnd={(e) => {
                            e.currentTarget.pause();
                            setIsPlaying(false);
                        }}
                    />

                    {/* 再生ボタン */}
                    <AnimatePresence>
                        {!isPlaying && (
                            <motion.button
                                type="button"
                                onClick={togglePlay}
                                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 m-auto w-12 h-12 bg-white/80 rounded-full flex items-center justify-center text-black text-2xl hover:bg-white/90"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                ▶
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>
            </CardContent>
        </Card>
    );
}