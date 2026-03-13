import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ImagePreview } from "./ImagePreview";
import { imageData } from "./imageData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function ImageModal({ animationKey, onClose }: Props) {
    const animationTitle = imageData.find((s) => s.key === animationKey)?.title ?? "Image Preview";

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

                {animationKey && <ImagePreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}