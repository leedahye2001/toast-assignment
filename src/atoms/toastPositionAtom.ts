import { atom } from "recoil";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export const toastPositionAtom = atom<ToastPosition>({
  key: "toastPosition",
  default: "top-right",
});
