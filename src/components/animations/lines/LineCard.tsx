import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";
import { useEffect, useRef } from "react";
import { PlusButton } from "@/components/ui/PlusButton";

interface Props {
    title: string;
    onClick: () => void;
    video: string;
    paused?: boolean;
}

export function LineCard({ title, onClick, video, paused }: Props) {
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
        <Card ref={ref} className="relative w-70">
            <PlusButton onClick={onClick} />

            <CardHeader>
                <CardTitle className="text-center">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="px-2 w-full flex items-center justify-center overflow-hidden">
                <video
                    ref={videoRef}
                    src={video}
                    muted
                    loop
                    playsInline
                    preload={paused ? "metadata" : "none"}
                    className="w-full aspect-video object-cover"
                />
            </CardContent>
        </Card>
    );
}