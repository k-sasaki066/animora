import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 420;

type RecipeStep = {
    title: string;
    details: string[];
    image?: string;
};

const steps: RecipeStep[] = [
    {
        title: "具材を切る",
        details: [
            "玉ねぎは薄切りにする",
            "にんじんとじゃがいもは一口サイズに切る",
            "鶏肉は食べやすい大きさに切る",
        ],
        image: "https://picsum.photos/id/292/574/322",
    },
    {
        title: "スパイスを準備する",
        details: [
            "クミン、コリアンダー、ターメリック、ガラムマサラを用意する",
            "スパイスは小皿に量り分けておくと炒めやすい",
        ],
        image: "https://picsum.photos/id/429/574/322",
    },
    {
        title: "玉ねぎを炒める",
        details: [
            "鍋に油を熱し、玉ねぎを中火でじっくり炒める",
            "透明感が出てきて軽く色づくまで炒める",
        ],
        image: "https://picsum.photos/id/488/574/322",
    },
    {
        title: "にんじん・じゃがいも・鶏肉を炒める",
        details: [
            "鍋ににんじんとじゃがいもを加えて軽く炒める",
            "鶏肉を入れて表面が白くなるまで炒める",
        ],
        image: "https://picsum.photos/id/493/574/322",
    },
    {
        title: "スパイスを加える",
        details: [
            "クミン、コリアンダー、ターメリックを加えて香りが立つまで炒める",
            "辛さを調整したい場合はチリパウダーも少量加える",
        ],
        image: "https://picsum.photos/id/835/574/322",
    },
    {
        title: "トマトと水を加える",
        details: [
            "カットトマト缶を入れて混ぜる",
            "水を具材がひたひたになる程度に加える",
            "沸騰したら弱火にして10分ほど煮込む",
        ],
        image: "https://picsum.photos/id/999/574/322",
    },
    {
        title: "味を整える",
        details: [
            "塩で味を調整する",
            "最後にガラムマサラを加えて香りをつける",
            "必要に応じて砂糖やヨーグルトでコクを加える",
        ],
        image: "https://picsum.photos/id/1080/574/322",
    },
    {
        title: "盛り付ける",
        details: [
            "ご飯にカレーをかける",
            "好みでパクチーや福神漬けを添える",
        ],
        image: "https://picsum.photos/id/1060/574/322",
    },
];


export default function RecipeTimelineList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.7), 1)
        : 1;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-start overflow-y-auto no-scrollbar py-[8%]">
            <motion.div className="relative min-h-full w-[60%] min-w-55 origin-top" animate={{scale}}>
                <ol className="space-y-9">
                    <div className="absolute h-full left-0 top-0 bottom-0 w-1 bg-[#9c8c6f]" />
                    {steps.map((step, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-14 text-left list-none"
                        >
                            {/* 丸いマーカー */}
                            <span className="absolute -left-2 top-0 w-5 aspect-square rounded-full bg-[#9c8c6f] z-10" />

                            {/* タイムラインマーカー */}
                            <span className="absolute left-4 -top-2 text-4xl text-[#57483a] font-bold leading-none ">
                                {index + 1}
                            </span>

                            {/* 手順タイトル */}
                            <h3 className="text-lg font-semibold">
                                {step.title}
                            </h3>

                            {/* 手順詳細 */}
                            <ul className="mt-2 list-inside text-gray-600 list-none">
                                {step.details.map((detail, i) => (
                                    <li key={i} className="text-sm">
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            {/* ステップ画像 */}
                            {step.image && (
                                <div className="mt-3 w-full max-w-md rounded-sm shadow-md overflow-hidden">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                        </motion.li>
                    ))}
                </ol>
            </motion.div>
        </div>
    );
}
