import { useRecoilState } from "recoil";
import {
  toastPositionAtom,
  type ToastPosition,
} from "../../atoms/toastPositionAtom";

const positions: ToastPosition[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

const RoundOption = () => {
  const [selected, setSelected] = useRecoilState(toastPositionAtom);

  return (
    <div className="p-6 w-full">
      <div className="flex flex-col">
        <h3 className="pb-2 text-[16px] font-[700]">Position</h3>
        <div className="grid grid-cols-1 gap-3">
          {positions.map((pos) => (
            <label
              key={pos}
              className={`flex items-center gap-2 cursor-pointer transition ${
                selected === pos
              }`}
            >
              <input
                type="radio"
                name="position"
                value={pos}
                checked={selected === pos}
                onChange={() => setSelected(pos as ToastPosition)}
                className="accent-blue-500"
              />
              <span className="text-[14px]">{pos}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoundOption;
