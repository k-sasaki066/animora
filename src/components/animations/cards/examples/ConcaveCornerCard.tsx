import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

const cards = [
    {
        title: "trust & co.",
        description:
            "Fill out the form and the algorithm will offer the right team of experts",
        image:
            "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop",
        tags: [
            { label: "branding", bg: "#d3b19a", text: "#5a4032" },
            { label: "packaging", bg: "#70b3b1", text: "#1f4f4e" },
        ],
        accent: "#d3b19a",
    },
    {
        title: "tonic",
        description:
            "Fill out the form and the algorithm will offer the right team of experts",
        image:
            "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop",
        tags: [
            { label: "branding", bg: "#d3b19a", text: "#5a4032" },
            { label: "marketing", bg: "#d05fa2", text: "#5a1f44" },
        ],
        accent: "#70b3b1",
    },
    {
        title: "shower gel",
        description:
            "Fill out the form and the algorithm will offer the right team of experts",
        image:
            "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop",
        tags: [
            { label: "branding", bg: "#d3b19a", text: "#5a4032" },
            { label: "packaging", bg: "#70b3b1", text: "#1f4f4e" },
            { label: "marketing", bg: "#d05fa2", text: "#5a1f44" },
        ],
        accent: "#d05fa2",
    },
];

const CORNER_SIZE = 90;
const SMALL = CORNER_SIZE * 0.2;

const CORNER_SHADOW = "absolute w-[200%] h-[200%] top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[20px_20px_0_0_white]";

export default function ConcaveCornerCard() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.75), 1)
        : 1;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-start overflow-y-auto no-scrollbar">
            <section className="py-8 w-[min(70rem,90%)] mx-auto text-neutral-900 origin-top" style={{scale}}>
                <h2 className="text-3xl capitalize tracking-wide">
                    leading companies <br /> have trusted us
                </h2>

                <div className="mt-16 grid gap-8 grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            {/* Image Card */}
                            <div className="relative w-full h-70 rounded-xl rounded-br-none overflow-hidden bg-white">
                                <div className="relative w-full h-full">
                                    <img
                                        src={card.image}
                                        alt={card.image}
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                    <div
                                        className="absolute right-0 bottom-0 aspect-square bg-white rounded-tl-[50%] z-10"
                                        style={{ width: CORNER_SIZE }}
                                    >
                                        {/* 左下のえぐれ */}
                                        <span
                                            className="absolute left-0 bottom-0 aspect-square -translate-x-full"
                                            style={{ width: SMALL }}
                                        >
                                            <span className={CORNER_SHADOW} />
                                        </span>

                                        {/* 上側のえぐれ */}
                                        <span
                                            className="absolute aspect-square -translate-x-1/2"
                                            style={{
                                                width: SMALL,
                                                right: -SMALL / 2,
                                                bottom: CORNER_SIZE,
                                            }}
                                        >
                                            <span className={CORNER_SHADOW} />
                                        </span>

                                        <motion.div
                                            whileHover="hover"
                                            initial="rest"
                                            animate="rest"
                                            className="absolute w-[88%] aspect-square right-0 bottom-0 rounded-full flex items-center justify-center text-white text-xl z-50 cursor-pointer"
                                            style={{ background: card.accent }}
                                        >
                                            <motion.span
                                                variants={{
                                                    rest: { scale: 1 },
                                                    hover: { scale: 1.2 },
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                ↗
                                            </motion.span>
                                        </motion.div>
                                        </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="pt-4 px-2">
                                <h3 className="text-2xl capitalize">
                                    {card.title}
                                </h3>
                                <p className="text-neutral-500 mt-2 mb-4">
                                    {card.description}
                                </p>

                                <ul className="flex flex-wrap gap-2">
                                    {card.tags.map((tag, index) => (
                                        <li
                                            key={index}
                                            className="text-xs font-bold uppercase px-3 py-1 rounded"
                                            style={{
                                                background: tag.bg,
                                                color: tag.text,
                                            }}
                                        >
                                            {tag.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}