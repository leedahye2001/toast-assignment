import type { SetterOrUpdater } from "recoil";
import type { ToastItem } from "../../atoms/toastAtom";

export const addToastListener = (setToasts: SetterOrUpdater<ToastItem[]>) => {
  const handleToast = (e: Event) => {
    const customEvent = e as CustomEvent;
    setToasts((prev) => [...prev, customEvent.detail]);
  };

  window.addEventListener("add-toast", handleToast);

  return () => {
    window.removeEventListener("add-toast", handleToast);
  };
};
