import type { ToastGroupMap, ToastItem } from "../../atoms/toastAtom";

export const groupToast = (toasts: ToastItem[]): ToastGroupMap => {
  return toasts.reduce<ToastGroupMap>((acc, toast) => {
    if (!acc[toast.position]) acc[toast.position] = [];
    acc[toast.position].push(toast);
    return acc;
  }, {} as ToastGroupMap);
};
