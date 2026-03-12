import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ActionButtonPreview } from "./ActionButtonPreview";
import { actionButtonData } from "./actionButtonData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function ActionButtonModal({ animationKey, onClose }: Props) {
    const animationTitle = actionButtonData.find((s) => s.key === animationKey)?.title ?? "Action Button Preview";

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

                {animationKey && <ActionButtonPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}