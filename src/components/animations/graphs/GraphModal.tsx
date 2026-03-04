"use client";

import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { GraphPreview } from "./GraphPreview";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function GraphModal({ animationKey, onClose }: Props) {
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

                {animationKey && <GraphPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}