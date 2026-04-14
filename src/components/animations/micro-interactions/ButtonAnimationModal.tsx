import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ButtonAnimationPreview } from "./ButtonAnimationPreview";
import { buttonAnimationData } from "./buttonAnimationData";
import { buttonAnimationMap } from "./buttonAnimationMap";
import type { ButtonParams } from "./button-animation";
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

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
};

export function ButtonAnimationModal({ animationKey, onClose }: Props) {
    const animationTitle = buttonAnimationData.find((s) => s.key === animationKey)?.title ?? "Button Preview";

    const [params, setParams] = useState<ButtonParams>(FALLBACK);

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
                    {defaults?.speed !== undefined && (
                        <div className="w-60">
                            <label className="flex gap-4 text-sm mb-2">
                                <span>Speed</span>
                                <span className="text-gray-600 font-mono">{getValue("speed")}s</span>
                            </label>
                            <Slider
                                value={[getValue("speed")]}
                                min={0.2}
                                max={5}
                                step={0.1}
                                onValueChange={([v]) => {
                                    setParams(prev => ({ ...prev, speed: v }))
                                }}
                            />
                        </div>
                    )}

                    {defaults?.delayStep !== undefined && (
                        <div className="w-60">
                            <label className="flex gap-4 text-sm mb-2">
                                <span>Delay</span>
                                <span className="text-gray-600 font-mono">
                                    {getValue("delayStep").toFixed(2)}s
                                </span>
                            </label>
                            <Slider
                                value={[getValue("delayStep")]}
                                min={0}
                                max={1}
                                step={0.01}
                                onValueChange={([v]) => {
                                    setParams(prev => ({ ...prev, delayStep: v }))
                                }}
                            />
                        </div>
                    )}

                    {defaults?.size !== undefined && (
                        <div className="w-60">
                            <label className="flex gap-4 text-sm mb-2">
                                <span>Size</span>
                                <span className="text-gray-600 font-mono">
                                    {getValue("size")}px
                                </span>
                            </label>
                            <Slider
                                value={[getValue("size")]}
                                min={6}
                                max={150}
                                step={1}
                                onValueChange={([v]) => {
                                    setParams(prev => ({ ...prev, size: v }))
                                }}
                            />
                        </div>
                    )}

                    {defaults?.scale !== undefined && (
                        <div className="w-60">
                            <label className="flex gap-4 text-sm mb-2">
                                <span>Scale</span>
                                <span className="text-gray-600 font-mono">
                                    {getValue("scale")}
                                </span>
                            </label>
                            <Slider
                                value={[getValue("scale")]}
                                min={1}
                                max={5}
                                step={0.1}
                                onValueChange={([v]) => {
                                    setParams(prev => ({ ...prev, scale: v }));
                                }}
                            />
                        </div>
                    )}

                    {defaults?.xRange !== undefined && (
                        <div className="w-60">
                            <label className="flex gap-4 text-sm mb-2">
                                <span>xRange</span>
                                <span className="text-gray-600 font-mono">
                                    {getValue("xRange")}
                                </span>
                            </label>
                            <Slider
                                value={[getValue("xRange")]}
                                min={-50}
                                max={50}
                                step={1}
                                onValueChange={([v]) => {
                                    setParams(prev => ({ ...prev, xRange: v }));
                                }}
                            />
                        </div>
                    )}

                    {defaults?.yRange !== undefined && (
                        <div className="w-60">
                            <label className="flex gap-4 text-sm mb-2">
                                <span>yRange</span>
                                <span className="text-gray-600 font-mono">
                                    {getValue("yRange")}
                                </span>
                            </label>
                            <Slider
                                value={[getValue("yRange")]}
                                min={-50}
                                max={50}
                                step={1}
                                onValueChange={([v]) => {
                                    setParams(prev => ({ ...prev, yRange: v }));
                                }}
                            />
                        </div>
                    )}

                    {defaults?.rotate !== undefined && (
                        <div className="w-60">
                            <label className="flex gap-4 text-sm mb-2">
                                <span>Rotate</span>
                                <span className="text-gray-600 font-mono">{getValue("rotate")}</span>
                            </label>
                            <Slider
                                value={[getValue("rotate")]}
                                min={-90}
                                max={360}
                                step={5}
                                onValueChange={([v]) => {
                                    setParams(prev => ({ ...prev, rotate: v }))
                                }}
                            />
                        </div>
                    )}

                    {defaults?.color !== undefined && (
                        <div className="w-60">
                            <label className="flex gap-4 items-center text-sm mb-2">
                                <span>Color</span>
                                <input
                                    type="color"
                                    value={getValue("color")}
                                    onChange={(e) =>
                                        setParams(prev => ({ ...prev, color: e.target.value }))
                                    }
                                />
                                <span className="text-gray-600 font-mono">
                                    {getValue("color")}
                                </span>
                            </label>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}