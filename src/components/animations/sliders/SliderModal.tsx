import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription} from "@/components/ui/dialog";
import { SliderPreview } from "./SliderPreview";
import { sliderData } from "./sliderData";

interface SliderModalProps {
    sliderKey: string | null;
    onClose: () => void;
}

export function SliderModal({ sliderKey, onClose }: SliderModalProps) {
    const sliderTitle = sliderData.find((s) => s.key === sliderKey)?.title ?? "Slider Preview";

    return (
        <Dialog open={!!sliderKey} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl w-[75%] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>
                        {sliderTitle}
                    </DialogTitle>
                    <DialogDescription>
                        プレビューを確認できます
                    </DialogDescription>
                </DialogHeader>

                {sliderKey && <SliderPreview sliderKey={sliderKey} />}
            </DialogContent>
        </Dialog>
    );
}