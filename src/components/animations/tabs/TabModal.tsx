import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { TabPreview } from "./TabPreview";
import { tabData } from "./tabData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function TabModal({ animationKey, onClose }: Props) {
    const animationTitle = tabData.find((s) => s.key === animationKey)?.title ?? "Tab Preview";

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

                {animationKey && <TabPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}