import { Slider } from "@/components/ui/slider";
import type { ParamField } from "@/components/animations/core/sliderField";

type BaseProps = {
    label: string;
    value: number | string;
    onChange: (v: any) => void;
    onCommit?: () => void;
};

type SliderProps = Extract<ParamField<string>, { type?: "slider" | undefined }> & BaseProps;
type ColorProps = Extract<ParamField<string>, { type: "color" }> & BaseProps;

type Props = SliderProps | ColorProps;

export function ParamSlider(props: Props) {
    const { label, value, onChange, onCommit } = props;

    if ("type" in props && props.type === "color") {
        return (
            <div className="w-60">
                <label className="h-full flex items-center gap-4 text-sm">
                    <span>{label}</span>
                    <input
                        type="color"
                        value={value as string}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <span className="text-gray-600 font-mono">{value}</span>
                </label>
            </div>
        );
    }

    return (
        <div className="w-60">
            <label className="flex gap-4 text-sm mb-2">
                <span>{label}</span>
                <span className="text-gray-600 font-mono">{value}</span>
            </label>

            <Slider
                value={[Number(value)]}
                min={props.min}
                max={props.max}
                step={props.step}
                onValueChange={([v]) => onChange(v)}
                onValueCommit={() => onCommit?.()}
            />
        </div>
    );
}