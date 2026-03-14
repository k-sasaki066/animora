import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

type StepItem = {
    title: string;
    description: string;
};

const steps: StepItem[] = [
    {
        title: "Getting Started",
        description:
            "Begin by setting up your environment and installing all necessary dependencies. Make sure everything is configured correctly before moving forward.",
    },
    {
        title: "Planning the Structure",
        description:
            "Outline the overall structure of your project, including components, layout, and data flow. A clear plan will help you build more efficiently.",
    },
    {
        title: "Building the Components",
        description:
            "Create reusable components and implement the core functionality. Focus on clean, maintainable code and consistent styling.",
    },
    {
        title: "Adding Interactions",
        description:
            "Enhance the user experience by adding animations and interactive elements. Smooth transitions and feedback improve usability.",
    },
    {
        title: "Final Review",
        description:
            "Test your application thoroughly, fix any issues, and optimize performance. Once everything looks good, you're ready to launch.",
    },
];

const BASE_WIDTH = 420;

export default function StepsList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.78), 1)
        : 1;

    return (
        <div ref={ref} className="w-full h-full overflow-y-auto no-scrollbar">
            <motion.ol
                className="relative w-full h-full pl-20 py-4 space-y-12 origin-top"
                animate={{ scale }}
            >
                {steps.map((step, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative text-left ${dancing.className}`}
                    >
                        {/* Number Circle */}
                        <div className="absolute -left-20 top-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#1e2939] text-white font-bold text-lg shadow-md">
                            {index + 1}
                        </div>

                        {/* Content */}
                        <h2 className="text-2xl font-bold mb-2">
                            {step.title}
                        </h2>
                        <p className="text-[#4a5565] leading-relaxed">
                            {step.description}
                        </p>
                    </motion.li>
                ))}
            </motion.ol>
        </div>
    );
}
