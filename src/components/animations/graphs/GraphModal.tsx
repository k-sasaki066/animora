import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { GraphPreview } from "./GraphPreview";
import { graphData } from "./graphData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function GraphModal({ animationKey, onClose }: Props) {
    const graphTitle = graphData.find((s) => s.key === animationKey)?.title ?? "Graph Preview";

    return (
        <Dialog open={!!animationKey} onOpenChange={onClose}>
            <DialogContent className="pt-8 max-w-3xl w-[80%] overflow-hidden">
                <DialogHeader>
                    <DialogTitle>
                        {graphTitle}
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