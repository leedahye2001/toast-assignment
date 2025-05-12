import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  _node?: React.ReactNode;
}

const buttonClasses = {
  default: "bg-[#1163DF] px-4 py-2 rounded-[5px]",
  "default-font": "text-[13px] text-white",
};

const Button = ({ _node, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={twMerge(
        buttonClasses.default,
        buttonClasses["default-font"],
        className
      )}
    >
      {_node && <div className="flex items-center">{_node}</div>}
    </button>
  );
};

export default Button;
