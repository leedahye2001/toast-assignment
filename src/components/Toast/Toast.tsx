import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { toastAtom } from "../../atoms/toastAtom";

const Toast = ({ id, message, delay }: any) => {
  const setToasts = useSetRecoilState(toastAtom);

  useEffect(() => {
    if (delay !== null) {
      const timer = setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay, id, setToasts]);

  return (
    <div className="bg-[#151619] text-[14px] text-white px-6 py-4 shadow flex justify-between items-center min-w-[200px]">
      <span>{message}</span>
      <button
        className="ml-4"
        onClick={() => setToasts((prev) => prev.filter((t) => t.id !== id))}
      >
        ×
      </button>
    </div>
  );
};

export default Toast;
