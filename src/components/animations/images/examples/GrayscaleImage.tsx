"use client"

export default function GrayscaleImage() {
    return (
        <div className="w-full aspect-video max-w-sm mx-auto overflow-hidden">
            <img
                src="/leading.jpg"
                className="w-full h-full object-cover hover:grayscale transition-all duration-300 ease-in-out" //グレースケールからホバー時にカラーにする場合はgrayscale hover:grayscale-0
            />
        </div>
    );
}