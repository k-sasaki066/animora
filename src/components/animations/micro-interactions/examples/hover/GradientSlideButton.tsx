import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function GradientSlideButton({
    speed = 0.5,
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="w-40 h-12 cursor-pointer flex justify-center items-center rounded-lg text-white font-semibold bg-size-[200%_auto] bg-linear-to-r from-[#fbc2eb] via-[#a6c1ee] to-[#fbc2eb]"
            {...bind}
            initial={{
                backgroundPosition: "0% center"
            }}
            animate={{
                backgroundPosition: active ? "100% center" : "0% center"
            }}
            transition={{
                duration: speed,
                ease: "easeInOut"
            }}
        >
            BUTTON
        </motion.div>
    );
}