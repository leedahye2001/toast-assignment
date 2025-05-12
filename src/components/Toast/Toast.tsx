import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { toastAtom } from "../../atoms/toastAtom";
import ProgressBar from "../ProgressBar/ProgressBar";

interface ToastProps {
  id: string;
  message: string;
  delay?: number | null;
  onClose?: () => void;
}

const Toast = ({ id, message, delay, onClose }: ToastProps) => {
  const setToasts = useSetRecoilState(toastAtom);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (delay !== null) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay, onClose]);

  return visible ? (
    <div className="relative bg-[#151619] px-6 py-4 shadow flex justify-between items-center min-w-[200px]">
      <p className="text-white text-[14px]">{message}</p>
      <button
        className="ml-4 text-[#5A5B5D]"
        onClick={() => setToasts((prev) => prev.filter((t) => t.id !== id))}
      >
        ×
      </button>
      {delay !== null && delay !== undefined && <ProgressBar delay={delay} />}
    </div>
  ) : null;
};

export default Toast;
