import { HeroConfig } from "@/lib/responsive/heroConfig";

type Props = {
    slide: {
        subtitle: string;
        title: string;
        description: string;
        image: string;
        button: string;
    };
    active: boolean;
    config: HeroConfig
};

export function HeroSlide({ slide, active, config }: Props) {
    return (
        <div className={`absolute inset-0 flex flex-col md:flex-row bg-wh transition-opacity duration-700 ${active ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
            {/* テキスト */}
            <div className={`w-full md:w-2/5 flex flex-col justify-center ${config.textPadding}`}>
                <p className={`text-xs tracking-widest uppercase text-gray-500 transition-all duration-700 ${active ? "translate-y-0 opacity-1" : "translate-y-6 opacity-0"}`}
                >
                    {slide.subtitle}
                </p>

                <h2 className={`mt-3 font-bold transition-all duration-700 ${config.titleClass} ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    {slide.title}
                </h2>

                <p className={`text-gray-500 transition-all duration-700 ${config.descriptionClass} ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    {slide.description}
                </p>

                <button className={`uppercase text-xs font-bold tracking-widest w-fit transition-all duration-700 ${config.buttonMargin} ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    {slide.button}
                </button>
            </div>

            {/* 画像 */}
            <div
                className={`w-full md:w-3/5 h-full bg-cover bg-center transition-transform duration-700 ${active ? "translate-x-0" : "translate-x-full"}`}
                style={{ backgroundImage: `url(${slide.image})` }}
            />
        </div>
    );
}