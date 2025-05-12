import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import RoundOption from "./components/Input/RoundOption";
import ToastContainer from "./components/Toast/ToastContainer";
import { showToastMessage } from "./components/Toast/useToast";
import { useRecoilValue } from "recoil";
import { toastPositionAtom } from "./atoms/toastPositionAtom";

const Index = () => {
  const position = useRecoilValue(toastPositionAtom);
  const [delay, setDelay] = useState("3000");

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <div className="w-[50%]">
        <h1 className="text-[26px] font-[800] text-black">Options</h1>
        <div className="flex border border-black my-2">
          <RoundOption />
          <Input _value={Number(delay)} _onChange={setDelay} />
        </div>
        <Button _node="Toast Button" />
        <button
          onClick={() =>
            showToastMessage("Your Message", Number(delay), position)
          }
        >
          동작 버튼
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Index;
