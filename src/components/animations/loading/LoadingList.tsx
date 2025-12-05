import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/animations/loading/Spinner";
import { Bounce } from "@/components/animations/loading/Bounce";
import { LoadingText } from "@/components/animations/loading/LoadingText";
import { motion } from "framer-motion";


const spinnerTypes = [
    "default",
    "dual",
    "fade",
    "rotate-scale",
    "slices",
    "clocks",
    "waves",
    "square",
    "ease-spin",
];

const bounceTypes = [
    "dots",
    "pulse",
    "bounce",
    "cloud",
    "3balls-scale",
    "cubeMetronome",
    "bouncy",
    "grow-bars",
    "gridBuildUp",
    "bar-progress",
];

const loadingTextTypes = [
    "loadingText",
    "textSlide"
];

const componentMap = {
    spinner: spinnerTypes,
    bounce: bounceTypes,
    text: loadingTextTypes
};

const loadingItems = Object.entries(componentMap).flatMap(([comp, types]) =>
    types.map((type) => ({
        title: type.charAt(0).toUpperCase() + type.slice(1),
        component:
        comp === "spinner" ? (
            <Spinner type={type as any} />
        ) : comp === "bounce" ? (
            <Bounce type={type as any} />
        ) : (
            <LoadingText type={type as any} />
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