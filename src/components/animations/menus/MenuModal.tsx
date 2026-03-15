import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MenuPreview } from "./MenuPreview";
import { menuData } from "./menuData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function MenuModal({ animationKey, onClose }: Props) {
    const animationTitle = menuData.find((s) => s.key === animationKey)?.title ?? "Hamburger Preview";

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

                {animationKey && <MenuPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}