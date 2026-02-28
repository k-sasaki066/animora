"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListPreview } from "./ListPreview";

interface Props {
    title: string;
    animationKey: string;
    onClick: () => void;
}

export function ListCard({ title, animationKey, onClick }: Props) {
    return (
        <Card
            onClick={onClick}
            className="cursor-pointer hover:shadow-lg transition"
        >
            <CardHeader>
                <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>

            <CardContent className="px-2 w-full flex items-center justify-center overflow-hidden">
                {/* 一覧でアニメーションを再生 */}
                <ListPreview animationKey={animationKey} />
            </CardContent>
        </Card>
    );
}