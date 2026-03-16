import CloudLayer from "./CloudLayer";
import Plane from "./Plane";

export default function PaperPlaneBackground() {
    return (
        <div className="relative w-full aspect-video bg-sky-200 overflow-hidden rounded-lg">
            <CloudLayer />
            <Plane />
        </div>
    );
}