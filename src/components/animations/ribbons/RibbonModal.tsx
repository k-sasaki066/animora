"use client";

import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { RibbonPreview } from "./RibbonPreview";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function RibbonModal({ animationKey, onClose }: Props) {
    return (
        <Dialog open={!!animationKey} onOpenChange={onClose}>
            <DialogContent className="pt-8 max-w-3xl w-[80%] overflow-hidden">
                <DialogHeader>
                    <DialogTitle>
                        {animationKey ?? "LoadingPreview"}
                    </DialogTitle>
                    <DialogDescription>
                        プレビューを確認できます
                    </DialogDescription>
                </DialogHeader>

                {animationKey && <RibbonPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}