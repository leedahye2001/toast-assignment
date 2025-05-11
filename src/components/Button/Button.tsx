import { twMerge } from "tailwind-merge";

interface ButtonProps {
  _buttonProps?: React.ComponentProps<"button">;
  _node?: React.ReactNode;
}

const buttonClasses = {
  default: "bg-[#1163DF] px-4 py-2 rounded-[5px]",
  "default-font": "text-[13px] text-white",
};

const Button = ({ _buttonProps, _node }: ButtonProps) => {
  return (
    <button
      {..._buttonProps}
      className={twMerge(
        buttonClasses.default,
        buttonClasses["default-font"],
        _buttonProps?.className
      )}
    >
      {_node && <div className="flex items-center">{_node}</div>}
    </button>
  );
};

export default Button;
