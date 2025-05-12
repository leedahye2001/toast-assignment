interface InputProps {
  _value?: string;
  _onChange: (value: string | null) => void;
}

const Input = ({ _value = "", _onChange }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      _onChange(null);
    } else if (/^\d+$/.test(value)) {
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
          value={_value}
          onChange={handleChange}
          className="text-[14px] focus-within:bg-[#f1f1f1] ring-1 ring-black text-end"
        />
      </div>
    </div>
  );
};
export default Input;
