import { v4 as uuidv4 } from "uuid";
import type { ToastPosition } from "../../atoms/toastPositionAtom";

export const showToastMessage = (
  message: string,
  delay: number | null = 3000,
  position: ToastPosition
) => {
  const id = uuidv4();

  window.dispatchEvent(
    new CustomEvent("add-toast", {
      detail: { id, message, delay, position },
    })
  );
};
