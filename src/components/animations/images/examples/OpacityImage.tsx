"use client"

export default function OpacityImage() {
    return (
        <div className="w-full aspect-video max-w-sm mx-auto overflow-hidden">
            <img
                src="./fruits.jpg"
                alt="zoom hover"
                className="
                w-full h-full object-cover
                transition-opacity duration-300 ease-in-out
                hover:opacity-60
                "
            />
        </div>
    );
}