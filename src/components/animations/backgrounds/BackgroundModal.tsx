"use client";

import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { BackgroundPreview } from "./BackgroundPreview";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function BackgroundModal({ animationKey, onClose }: Props) {
    return (
        <Dialog open={!!animationKey} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl w-[80%]">
                <DialogHeader>
                    <DialogTitle>
                        {animationKey ?? "BackgroundPreview"}
                    </DialogTitle>
                    <DialogDescription>
                        プレビューを確認できます
                    </DialogDescription>
                </DialogHeader>

                {animationKey && <BackgroundPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}