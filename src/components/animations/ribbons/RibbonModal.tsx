import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { RibbonPreview } from "./RibbonPreview";
import { ribbonData } from "./ribbonData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function RibbonModal({ animationKey, onClose }: Props) {
    const animationTitle = ribbonData.find((s) => s.key === animationKey)?.title ?? "Button Preview";

    return (
        <Dialog open={!!animationKey} onOpenChange={onClose}>
            <DialogContent className="pt-8 max-w-3xl w-[80%] overflow-hidden">
                <DialogHeader>
                    <DialogTitle>
                        {animationTitle}
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