import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import RoundOption from "./components/Input/RoundOption";
import ToastContainer from "./components/Toast/ToastContainer";
import { showToastMessage } from "./components/Toast/useToast";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { toastPositionAtom } from "./atoms/toastPositionAtom";
import { toastAtom } from "./atoms/toastAtom";

const Index = () => {
  const position = useRecoilValue(toastPositionAtom);
  const resetToasts = useResetRecoilState(toastAtom);
  const [delay, setDelay] = useState<number | null>(3000);

  const handleInputChange = (newDelay: string | null) => {
    if (newDelay && isNaN(Number(newDelay))) {
      alert("숫자를 입력해주세요.");
    } else {
      setDelay(newDelay ? Number(newDelay) : null);
    }
  };

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <div className="w-[50%]">
        <h1 className="text-[26px] font-[800] text-black">Options</h1>
        <div className="flex border border-black my-2">
          <RoundOption />
          <Input
            _value={delay === null ? "" : delay.toString()}
            _onChange={handleInputChange}
          />
        </div>
        <Button
          _node="Toast Button"
          onClick={() => showToastMessage("Your Message", delay, position)}
        />
        <Button
          _node="Clear all"
          onClick={resetToasts}
          className="bg-white text-red-500 font-[700]"
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Index;
