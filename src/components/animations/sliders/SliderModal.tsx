"use client";

import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription} from "@/components/ui/dialog";
import { SliderPreview } from "./SliderPreview";

interface SliderModalProps {
    sliderKey: string | null;
    onClose: () => void;
}

export function SliderModal({ sliderKey, onClose }: SliderModalProps) {
    return (
        <Dialog open={!!sliderKey} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl w-[75%] max-h-[75vh] h-auto overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>
                        {sliderKey ?? "Slider Preview"}
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