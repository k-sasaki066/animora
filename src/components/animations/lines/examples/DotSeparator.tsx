"use client";

import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 420;
const DOT_COUNT = 5;

export default function DotSeparator() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1)
        : 1;

    return (
        <div ref={ref} className="w-full h-full overflow-y-auto no-scrollbar">
        <motion.article className="h-full max-w-[38em] mx-auto text-lg font-serif leading-relaxed origin-top" animate={{scale}}>
            <h1 className="text-3xl my-[0.6em] font-semibold">
                The Day the Wind Stopped
            </h1>

            <p className="text-xl mb-6 text-gray-600">
                It happened on a quiet afternoon, the kind where the sky feels endless
                and time moves a little slower than usual.
            </p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex justify-center my-10"
            >
                <div className="flex items-center gap-2 text-gray-400">
                    {Array.from({ length: DOT_COUNT }).map((_, i) => (
                        <span
                        key={i}
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                        />
                    ))}
                </div>
            </motion.div>

            <p className="mt-6">
                Mara was sitting by the window when she noticed it. The trees outside,
                which had been whispering all morning, suddenly fell still. The curtains
                no longer swayed. Even the birds seemed to pause mid-song.
            </p>

            <p className="mt-4">
                She held her breath, as if the world itself were listening. In that
                delicate silence, she felt something shift — not outside, but within.
                A quiet understanding that sometimes, when everything stops moving,
                it is not an ending, but an invitation to begin again.
            </p>
            </motion.article>
        </div>
    );
}
