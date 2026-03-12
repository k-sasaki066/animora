import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { TextAnimationPreview } from "./TextAnimationPreview";
import { textAnimationData } from "./textAnimationData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function TextAnimationModal({ animationKey, onClose }: Props) {
    const animationTitle = textAnimationData.find((s) => s.key === animationKey)?.title ?? "Animation Preview";

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

                {animationKey && <TextAnimationPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}