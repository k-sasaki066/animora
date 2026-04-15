import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ButtonAnimationPreview } from "./ButtonAnimationPreview";
import { buttonAnimationData } from "./buttonAnimationData";
import { buttonAnimationMap } from "./buttonAnimationMap";
import type { ButtonParams } from "./button-animation";
import { useState, useEffect } from "react";
import { ParamSlider } from "@/components/ui/ParamSlider";
import { sliders } from "@/components/animations/core/sliderField";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

const FALLBACK: Required<ButtonParams> = {
    speed: 0.6,
    size: 160,
    color: "#7c3aed",
    delayStep: 0.16,
    scale: 1.2,
    xRange: 10,
    yRange: 10,
    rotate: 4,
    boxCount: 3,
};

export function ButtonAnimationModal({ animationKey, onClose }: Props) {
    const animationTitle = buttonAnimationData.find((s) => s.key === animationKey)?.title ?? "Button Preview";

    const [params, setParams] = useState<ButtonParams>(FALLBACK);
    const [isAdjusting, setIsAdjusting] = useState(false);

    const meta = animationKey ? buttonAnimationMap[animationKey] : null;
    const defaults = meta?.defaultParams;

    useEffect(() => {
        if (!animationKey) return;

        setParams({
            ...FALLBACK,
            ...defaults,
        });
    }, [animationKey]);

    const getValue = <K extends keyof typeof FALLBACK>(
        key: K
    ): (typeof FALLBACK)[K] => {
        return (params[key] ?? defaults?.[key] ?? FALLBACK[key]) as (typeof FALLBACK)[K];
    };

    return (
        <Dialog open={!!animationKey} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl w-[80%]">
                <DialogHeader>
                    <DialogTitle>
                        {animationTitle}
                    </DialogTitle>
                    <DialogDescription>
                        プレビューを確認できます
                    </DialogDescription>
                </DialogHeader>

                {animationKey &&
                    <ButtonAnimationPreview
                        animationKey={animationKey}
                        params={{
                            ...params,
                        }}
                    />
                }

                <div className="flex flex-wrap justify-center gap-8 mt-4">
                    {sliders
                        .filter((s) => defaults?.[s.key] !== undefined)
                        .map((s) => (
                            <ParamSlider
                                key={s.key}
                                label={s.label}
                                value={getValue(s.key)}
                                onChange={(v) => {
                                    if (s.key === "color") {
                                        setParams((prev) => ({
                                            ...prev,
                                            [s.key]: v,
                                        }));
                                    } else {
                                        setIsAdjusting(true);
                                        setParams((prev) => ({
                                            ...prev,
                                            [s.key]: v,
                                        }));
                                    }
                                }}
                                onCommit={() => {
                                    setIsAdjusting(false);
                                }}
                                {...("type" in s && s.type === "color"
                                    ? { type: "color" as const }
                                    : {
                                        min: s.min,
                                        max: s.max,
                                        step: s.step,
                                        suffix: s.suffix,
                                        format: s.format,
                                    })}
                            />
                        ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}