import { useState } from "react";

interface InputProps {
  _value?: number;
  _onChange?: (value: string) => void;
}

const Input = ({ _value, _onChange }: InputProps) => {
  const [isText, setIstext] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setIstext(true);

    if (_onChange) {
      _onChange(value);
    }
  };

  return (
    <div className="w-full p-6">
      <h3 className="pb-2 text-[16px] font-[700]">Delay (ms)</h3>
      <div className="grid mb-8">
        <input
          value={_value}
          onChange={handleChange}
          className="text-[14px] focus-within:bg-[#f1f1f1] ring-1 ring-black text-end"
        />
      </div>
    </div>
  );
};
export default Input;
