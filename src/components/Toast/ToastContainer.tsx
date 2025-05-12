import { useRecoilValue, useSetRecoilState } from "recoil";
import { toastAtom } from "../../atoms/toastAtom";
import Toast from "./Toast";
import { useEffect } from "react";
import { positionMap } from "./toastPositionMap";
import { addToastListener } from "./toastEventHandler";
import { groupToast } from "./groupToast";

const ToastContainer = () => {
  const setToasts = useSetRecoilState(toastAtom);
  const toasts = useRecoilValue(toastAtom);

  useEffect(() => {
    const removeListener = addToastListener(setToasts);
    return () => removeListener();
  }, [setToasts]);

  // 위치별로 그룹 나눠 렌더링 실행
  const grouped = groupToast(toasts);

  return (
    <>
      {Object.entries(grouped).map(([position, items]) => (
        <div
          key={position}
          className={`fixed z-50 flex flex-col gap-2 ${
            positionMap[position as keyof typeof positionMap]
          }`}
        >
          {items.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </div>
      ))}
    </>
  );
};

export default ToastContainer;
