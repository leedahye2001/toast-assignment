import { useEffect, useRef } from "react";

interface ProgressBarProps {
  delay: number;
}

const ProgressBar = ({ delay }: ProgressBarProps) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = "100%";
      progressRef.current.style.transition = `width ${delay}ms linear`;
    }

    requestAnimationFrame(() => {
      if (progressRef.current) {
        progressRef.current.style.width = "0%";
      }
    });
  }, [delay]);

  return (
    <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-200">
      <div ref={progressRef} className="h-full bg-blue-500" />
    </div>
  );
};

export default ProgressBar;
