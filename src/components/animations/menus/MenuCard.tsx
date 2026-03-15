import { Card, CardHeader, CardTitle, CardContent,
} from "@/components/ui/card";
import { VideoSource } from "./menuData";
import { PlusButton } from "@/components/ui/PlusButton";
import { useInView } from "@/hooks/useInView";
import { useEffect, useRef } from "react";

interface Props {
    title: string;
    video: VideoSource;
    onClick: () => void;
    paused?: boolean;
}

export function MenuCard({ title, video, onClick, paused }: Props) {
    const { ref, inView } = useInView<HTMLDivElement>();
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const shouldPause = paused || !inView;

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        if (shouldPause) {
            v.pause();
        } else {
            v.play().catch(() => {});
        }
    }, [shouldPause]);

    return (
        <Card ref={ref} className="relative">
            <PlusButton onClick={onClick} />

            <CardHeader>
                <CardTitle className="text-center">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="px-2 w-full flex items-center justify-center overflow-hidden">
                <video
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    preload={paused ? "metadata" : "none"}
                    className="w-full aspect-video object-cover"
                >
                    <source src={video.mobile} media="(max-width:768px)" />
                    <source src={video.pc} media="(min-width:769px)" />
                </video>
            </CardContent>
        </Card>
    );
}