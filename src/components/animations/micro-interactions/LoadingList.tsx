import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ButtonHover } from "@/components/animations/micro-interactions/ButtonHover";
import { ButtonAnimation } from "@/components/animations/micro-interactions/ButtonAnimation";
import { ButtonDesign } from "@/components/animations/micro-interactions/ButtonDesign";
import { motion } from "framer-motion";

const buttonAnimationTypes = [
    "Floating",
    "Bulbul",
    "Thump",
    "Swaying",
    "Shaky",
    "Sparkling",
    "Ripples",
    "Skew",
    "Spin",
    "Jiggly",
    "ClickMove",
    "GradientMove"
];

const buttonHoverTypes = [
    "ExtendLeft",
    "DiagonalSwipe",
    "DoubleSwipe",
    "StopSwipe",
    "Passing",
    "CircleOut",
    "ArrowExtend",
    "Click",
    "Flip",
    "ColorCycle",
    "ColorIntoCenter",
    "ChangeShape",
    "SideBrackets",
    "HiddenText",
    "ColorFlow",
    "TransformShape",
    "HoverLine",
    "Rotate"
];

const buttonDesignTypes = [
    "Test",
];

const componentMap = {
    buttonAnimation: buttonAnimationTypes,
    buttonHover: buttonHoverTypes,
    buttonDesign: buttonDesignTypes,
};

const loadingItems = Object.entries(componentMap).flatMap(([comp, types]) =>
    types.map((type) => ({
        title: type.charAt(0).toUpperCase() + type.slice(1),
        component:
        comp === "buttonAnimation" ? (
            <ButtonAnimation type={type as any} />
        ) : comp === "buttonHover" ? (
            <ButtonHover type={type as any} />
        ) : (
            <ButtonDesign type={type as any} />
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
            className="w-70 h-60 flex flex-col border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
            >
                <CardHeader>
                    <CardTitle className="text-center text-2xl">{item.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex items-center justify-center space-y-4">
                    {item.component}
                </CardContent>
            </Card>
        ))}
        </motion.div>
    );
}