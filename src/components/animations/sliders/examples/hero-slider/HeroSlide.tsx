type Props = {
    slide: {
        subtitle: string;
        title: string;
        description: string;
        image: string;
        button: string;
    };
    active: boolean;
};

export function HeroSlide({ slide, active }: Props) {
    return (
        <div
        className={`
            absolute inset-0 flex bg-white transition-opacity duration-500
            ${active ? "opacity-100 z-10" : "opacity-0 z-0"}
        `}
        >
            {/* テキスト */}
            <div className="w-2/5 px-10 flex flex-col justify-center">
                <p
                className={`
                    text-xs tracking-widest uppercase text-gray-500
                    transition-all duration-500
                    ${active ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                `}
                >
                {slide.subtitle}
                </p>

                <h2
                className={`
                    mt-4 text-4xl font-bold tracking-widest
                    transition-all duration-700
                    ${active ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                `}
                >
                {slide.title}
                </h2>

                <p
                className={`
                    mt-6 text-sm text-gray-500 leading-6
                    transition-all duration-700
                    ${active ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                `}
                >
                {slide.description}
                </p>

                <button
                className={`
                    mt-8 text-xs tracking-widest font-bold uppercase w-fit
                    transition-all duration-700
                    ${active ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                `}
                >
                {slide.button}
                </button>
            </div>

            {/* 画像 */}
            <div
                className={`
                w-3/5 bg-cover bg-center transition-transform duration-700
                ${active ? "translate-x-0" : "translate-x-full"}
                `}
                style={{ backgroundImage: `url(${slide.image})` }}
            />
        </div>
    );
}