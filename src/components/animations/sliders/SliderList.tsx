"use client";

import { useState } from "react";
import { SliderCard } from "./SliderCard";
import { SliderModal } from "./SliderModal";
import { sliderData } from "./sliderData";

export default function SliderList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                {sliderData.map((slider) => (
                    <SliderCard
                        key={slider.key}
                        title={slider.title}
                        video={slider.video}
                        onClick={() => setActiveKey(slider.key)}
                    />
                ))}
            </div>

            {/* Modal */}
            <SliderModal
                sliderKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}