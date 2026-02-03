"use client";

import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MenuPreview } from "./MenuPreview";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function MenuModal({ animationKey, onClose }: Props) {
    return (
        <Dialog open={!!animationKey} onOpenChange={onClose}>
            <DialogContent className="pt-8 max-w-3xl w-[80%]  overflow-x-auto no-scrollbar">
                <DialogHeader>
                    <DialogTitle>
                        {animationKey ?? "LoadingPreview"}
                    </DialogTitle>
                    <DialogDescription>
                        プレビューを確認できます
                    </DialogDescription>
                </DialogHeader>

                {animationKey && <MenuPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}