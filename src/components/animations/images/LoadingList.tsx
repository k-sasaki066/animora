import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ImageHover } from "@/components/animations/images/ImageHover";
import { ImageCaption } from "@/components/animations/images/ImageCaption";
import { motion } from "framer-motion";

const imageHoverTypes = [
    "Opacity",
    "Zoom",
    "border",
    "DashedBorder",
    "Float",
    "Grayscale",
    "Blur",
    "Flip",
    "Overlay",
    "Blink",
    "HoverText",
    "ChangeImage",
    "ChangeText",
    "HoverLine",
    "Spin",
    "SlideImage",
    "Tilt3d",
    "HoverVideo",
    "Follow"
];

const imageCaptionTypes = [
    "Mosaic",
    "Layer",
    "Stretch",
    "HiddenText",
    "Skew",
    "SpreadsOut",
    "SubMenu",
    "Reduction",
    "Tile",
    "Caption"
];

const componentMap = {
    imageHover: imageHoverTypes,
    imageCaption: imageCaptionTypes,
};

const loadingItems = Object.entries(componentMap).flatMap(([comp, types]) =>
    types.map((type) => ({
        title: type.charAt(0).toUpperCase() + type.slice(1),
        component:
        comp === "imageHover" ? (
            <ImageHover type={type as any} />
        ) :  (
            <ImageCaption type={type as any} />
        ),
    }))
);

export default function LoadingList() {
    return (
        <motion.div
        className="flex flex-wrap gap-6 p-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
        {loadingItems.map((item) => (
            <Card
            key={item.title}
            className="w-70 h-60 flex flex-col hover:shadow-lg transition-shadow rounded-none border-none"
            >
                <CardContent className="flex-1 flex items-center justify-center p-0">
                    {item.component}
                </CardContent>

                <CardHeader>
                    <CardTitle className="text-center text-2xl">{item.title}</CardTitle>
                </CardHeader>
            </Card>
        ))}
        </motion.div>
    );
}