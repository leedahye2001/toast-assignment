import { useRecoilValue, useSetRecoilState } from "recoil";
import { toastAtom } from "../../atoms/toastAtom";
import { type ToastPosition } from "../../atoms/toastPositionAtom";
import Toast from "./Toast";
import { useEffect } from "react";

const ToastContainer = () => {
  const setToasts = useSetRecoilState(toastAtom);
  const toasts = useRecoilValue(toastAtom);

  useEffect(() => {
    const handleToast = (e: CustomEvent) => {
      setToasts((prev) => [...prev, e.detail]);
    };

    window.addEventListener("add-toast", handleToast as EventListener);

    return () =>
      window.removeEventListener("add-toast", handleToast as EventListener);
  }, [setToasts]);

  const positionMap: Record<ToastPosition, string> = {
    "top-left": "top-4 left-4 items-start",
    "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
    "top-right": "top-4 right-4 items-end",
    "bottom-left": "bottom-4 left-4 items-start",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center",
    "bottom-right": "bottom-4 right-4 items-end",
  };

  // 위치별로 그룹 나눠 렌더링 실행
  const grouped = toasts.reduce((acc, toast) => {
    if (!acc[toast.position]) acc[toast.position] = [];
    acc[toast.position].push(toast);
    return acc;
  }, {} as Record<string, typeof toasts>);

  return (
    <>
      {(Object.entries(grouped) as [ToastPosition, typeof toasts][]).map(
        ([position, items]) => (
          <div
            key={position}
            className={`fixed z-50 flex flex-col gap-2 ${positionMap[position]}`}
          >
            {items.map((toast) => (
              <Toast key={toast.id} {...toast} />
            ))}
          </div>
        )
      )}
    </>
  );
};

export default ToastContainer;
