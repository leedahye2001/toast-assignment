import { useEffect, useState } from "react";

interface InputProps {
  _value?: string;
  _onChange: (value: string | null) => void;
}

const Input = ({ _value = "", _onChange }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>(_value);

  useEffect(() => {
    setInputValue(_value);
  }, [_value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value === "") {
      _onChange(null);
    } else if (!isNaN(Number(value))) {
      _onChange(value);
    } else {
      alert("숫자를 입력해주세요.");
    }
  };

  return (
    <div className="w-full p-6">
      <h3 className="pb-2 text-[16px] font-[700]">Delay (ms)</h3>
      <div className="grid mb-8">
        <input
          type="text"
          value={_value || ""}
          onChange={handleChange}
          className="text-[14px] focus-within:bg-[#f1f1f1] ring-1 ring-black text-end"
        />
      </div>
    </div>
  );
};
export default Input;
