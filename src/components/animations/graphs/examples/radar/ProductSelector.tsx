import { motion } from "framer-motion";
import { Product } from "./products";

type Props = {
    products: Product[];
    selected: number[];
    toggleProduct: (id: number) => void;
};

export default function ProductSelector({
    products,
    selected,
    toggleProduct,
}: Props) {
    return (
        <div className="flex justify-center items-center gap-4 overflow-x-auto px-2">
            {products.map((p) => {
                const active = selected.includes(p.id);

                return (
                    <button
                        type="button"
                        key={p.id}
                        onClick={() => toggleProduct(p.id)}
                        className="flex flex-col items-center w-16 sm:w-20 aspect-square transition"
                    >
                        <motion.img
                            src={p.image}
                            className="w-full h-full object-cover rounded-sm"
                            animate={{
                                scale: active ? 1 : 0.9,
                                filter: active ? "grayscale(0%)" : "grayscale(100%)",
                                opacity: active ? 1 : 0.6,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                        />
                    </button>
                );
            })}
        </div>
    );
}