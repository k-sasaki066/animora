import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { LinePreview } from "./LinePreview";
import { lineData } from "./lineData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function LineModal({ animationKey, onClose }: Props) {
    const animationTitle = lineData.find((s) => s.key === animationKey)?.title ?? "Line Preview";

    return (
        <Dialog open={!!animationKey} onOpenChange={onClose}>
            <DialogContent className="pt-8 max-w-3xl w-[80%]">
                <DialogHeader>
                    <DialogTitle>
                        {animationTitle}
                    </DialogTitle>
                    <DialogDescription>
                        プレビューを確認できます
                    </DialogDescription>
                </DialogHeader>

                {animationKey && <LinePreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}