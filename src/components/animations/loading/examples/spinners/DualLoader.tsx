"use client"

export default function DualLoader() {

    return (
        <div className="relative w-12 h-12 rounded-full text-purple-600">
            <div className="absolute top-0 left-0 w-6 h-6 border-4 border-t-purple-600 rounded-full animate-spin" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-4 border-t-purple-400 rounded-full animate-spin animate-reverse" />
        </div>
    );
}