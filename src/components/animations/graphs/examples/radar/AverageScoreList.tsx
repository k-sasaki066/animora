import { motion } from "framer-motion";

type Average = {
    id: number;
    name: string;
    avg: number;
    color: string;
};

type Props = {
    averages: Average[];
};

export default function AverageScoreList({ averages }: Props) {
    return (
        <div className="flex justify-center items-center gap-6 sm:gap-8 min-h-15 px-2">
            {averages.map((a) => (
                <div key={a.id} className="text-center">
                    <p className="text-gray-400 text-[10px] sm:text-sm">
                        {a.name}
                    </p>

                    <motion.p
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-base sm:text-2xl font-bold"
                        style={{ color: a.color }}
                    >
                        {a.avg.toFixed(1)}
                    </motion.p>
                </div>
            ))}
        </div>
    );
}