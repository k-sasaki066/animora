import { useEffect, useRef } from "react";

interface Options {
    onNext: () => void;
    onPrev: () => void;
    delay?: number;
}

export function useWheelNavigation({
  onNext,
  onPrev,
  delay = 1200,
}: Options) {
  const isLocked = useRef(false);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isLocked.current) return;

      if (e.deltaY > 0) {
        onNext();
      } else if (e.deltaY < 0) {
        onPrev();
      }

      isLocked.current = true;
      setTimeout(() => {
        isLocked.current = false;
      }, delay);
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [onNext, onPrev, delay]);
}