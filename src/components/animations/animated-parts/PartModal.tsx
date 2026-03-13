import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PartPreview } from "./PartPreview";
import { partData } from "./partData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function PartModal({ animationKey, onClose }: Props) {
    const animationTitle = partData.find((s) => s.key === animationKey)?.title ?? "Animated Part Preview";

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

                {animationKey && <PartPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}