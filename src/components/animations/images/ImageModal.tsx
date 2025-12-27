"use client";

import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ImagePreview } from "./ImagePreview";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function ImageModal({ animationKey, onClose }: Props) {
    return (
        <Dialog open={!!animationKey} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl w-[80%]">
                <DialogHeader>
                    <DialogTitle>
                        {animationKey ?? "TextAnimationPreview"}
                    </DialogTitle>
                    <DialogDescription>
                        プレビューを確認できます
                    </DialogDescription>
                </DialogHeader>

                {animationKey && <ImagePreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}