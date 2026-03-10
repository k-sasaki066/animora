import { useEffect, useRef } from "react";

interface Props {
    paused?: boolean;
}

export default function BarProgressLoader({ paused = false }: Props) {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        if (paused) {
            svgRef.current.pauseAnimations();
        } else {
            svgRef.current.unpauseAnimations();
        }
    }, [paused]);

    return (
        <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 6"
            width="120"
            height="6"
        >
            {/* 背景バー */}
            <rect x="0" y="0" rx="2" ry="2" width="120" height="6" fill="#f2f2f2" />

            {/* 青バー 1 */}
            <rect x="0" y="0" rx="2" ry="2" width="150" height="6" fill="#9333EA" transform="scale(0,1)">
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="-75,0;-20,0;50,0;250,0"
                    keyTimes="0;.3;.5;1"
                    keySplines="0 0 1 1;.3 .3 .8 .7;.4 .6 .6 .9"
                    dur="2s"
                    repeatCount="indefinite"
                    calcMode="spline"
                />
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    values=".1,1;.5,1;.7,1;.1,1"
                    keyTimes="0;.4;.8;1"
                    keySplines="0 0 1 1;.3 .1 .8 1;.1 .1 .6 1"
                    dur="2s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    additive="sum"
                />
            </rect>

            {/* 青バー 2 */}
            <rect x="0" y="0" rx="2" ry="2" width="150" height="6" fill="#9333EA" transform="scale(0,1)">
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="-50,0;-50,0;-50,0;165,0"
                    keyTimes="0;.2;.6;1"
                    keySplines="0 0 1 1;.5 0 .7 .5;.3 .4 .6 1"
                    dur="2s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    begin=".5s"
                />
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    values=".1,1;.1,1;.7,1;.1,1"
                    keyTimes="0;.4;.7;1"
                    keySplines="0 0 1 1;.3 .1 .8 1;.1 .1 .6 1"
                    dur="2s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    additive="sum"
                    begin=".5s"
                />
            </rect>
        </svg>
    );
}