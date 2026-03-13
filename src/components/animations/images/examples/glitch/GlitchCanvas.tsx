import { useEffect, useRef } from "react";
import p5 from "p5";
import { glitchSketch } from "./glitchSketch";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function GlitchCanvas() {
    const { ref, width, height } = useContainerSize<HTMLDivElement>();
    const p5Ref = useRef<p5 | null>(null);

    useEffect(() => {
        if (!ref.current || !width || !height) return;

        if (!p5Ref.current) {
            p5Ref.current = new p5(
                glitchSketch({ width, height, imgSrc: "/underpass.jpg" }),
                ref.current
            );
            return;
        }

        // サイズ変更時にリアルタイム更新
        (p5Ref.current as any).glitch?.resizeCanvasAndImage(width, height);
    }, [width, height]);

    useEffect(() => {
        return () => {
            p5Ref.current?.remove();
            p5Ref.current = null;
        };
    }, []);

    return (
        <div
            ref={ref}
            className="w-full aspect-video flex items-center justify-center overflow-hidden max-w-sm mx-auto"
        />
    );
}