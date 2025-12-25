"use client";

import Cloud from "./Cloud";

export default function CloudLayer() {
    return (
        <div className="absolute inset-0">
            <Cloud size="clamp(120px, 30vw, 360px)" top="10%" duration={13.5} z={9} />
            <Cloud size="clamp(80px, 20vw, 200px)" top="25%" duration={9.2} opacity={0.7} />
            <Cloud size="clamp(100px, 25vw, 300px)" top="40%" duration={8} />
            <Cloud size="clamp(150px, 35vw, 400px)" top="5%" duration={20.5} opacity={0.5} />
            <Cloud size="clamp(120px, 28vw, 280px)" top="55%" duration={11.2} />
    </div>
    );
}