"use client"

export default function ZoomImage() {
    return (
        <div className="w-full aspect-video max-w-sm mx-auto overflow-hidden">
            <img
                src="/flower.jpg"
                alt="opacity hover"
                className="
                w-full h-full object-cover
                hover:scale-110 transition-transform duration-300
                "
            />
        </div>
    );
}