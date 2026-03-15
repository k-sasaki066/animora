import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { HamburgerPreview } from "./HamburgerPreview";
import { hamburgerData } from "./hamburgerData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function HamburgerModal({ animationKey, onClose }: Props) {
    const animationTitle = hamburgerData.find((s) => s.key === animationKey)?.title ?? "Hamburger Preview";

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

                {animationKey && <HamburgerPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}