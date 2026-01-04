"use client";

import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PartPreview } from "./PartPreview";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function PartModal({ animationKey, onClose }: Props) {
    return (
        <Dialog open={!!animationKey} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl w-[80%]">
                <DialogHeader>
                    <DialogTitle>
                        {animationKey ?? "LoadingPreview"}
                    </DialogTitle>
                    <DialogDescription>
                        プレビューを確認できます
                    </DialogDescription>
                </DialogHeader>

                {animationKey && <PartPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}