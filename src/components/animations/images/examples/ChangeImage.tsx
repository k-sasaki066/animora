import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function ChangeImage() {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
        >
            {/* 通常画像 */}
            <motion.img
                src="/images/samples/sample-11.webp"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                variants={{
                    rest: { opacity: 1 },
                    hover: { opacity: 0 },
                }}
                transition={{ duration: 0.4 }}
            />

            {/* ホバー時像 */}
            <motion.img
                src="/images/samples/sample-12.webp"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
            />
        </motion.div>
    );
}