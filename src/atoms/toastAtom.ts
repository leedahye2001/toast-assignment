import { atom } from "recoil";
import type { ToastPosition } from "./toastPositionAtom";

export interface ToastItem {
  id: string;
  message: string;
  delay: number | null;
  position: ToastPosition;
}

export const toastAtom = atom<ToastItem[]>({
  key: "toastAtom",
  default: [],
});

export type ToastGroupMap = Record<ToastPosition, ToastItem[]>;
