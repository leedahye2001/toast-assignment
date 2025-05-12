import { useRecoilState } from "recoil";
import {
  toastPositionAtom,
  type ToastPosition,
} from "../../atoms/toastPositionAtom";

const positions = [
  { label: "Top Left", value: "top-left" },
  { label: "Top Center", value: "top-center" },
  { label: "Top Right", value: "top-right" },
  { label: "Bottom Left", value: "bottom-left" },
  { label: "Bottom Center", value: "bottom-center" },
  { label: "Bottom Right", value: "bottom-right" },
];

const RoundOption = () => {
  const [selected, setSelected] = useRecoilState(toastPositionAtom);

  return (
    <div className="relative h-[400px] border rounded-xl p-6">
      <div className="flex flex-col">
        <h3 className="pb-2 text-[16px] font-[700]">Position</h3>
        <div className="grid grid-cols-1 gap-3 mb-8">
          {positions.map((pos) => (
            <label
              key={pos.value}
              className={`flex items-center gap-2 cursor-pointer transition ${
                selected === pos.value
              }`}
            >
              <input
                type="radio"
                name="position"
                value={pos.value}
                checked={selected === pos.value}
                onChange={() => setSelected(pos.value as ToastPosition)}
                className="accent-blue-500"
              />
              <span className="text-sm">{pos.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoundOption;
