import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import RoundOption from "./components/Input/RoundOption";

const Index = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <div className="w-[50%]">
        <h1 className="text-[26px] font-[800] text-black">Options</h1>
        <div className="flex border border-black my-2">
          <RoundOption />
          <Input />
        </div>
        <Button _node={"Toast Button"} />
      </div>
    </div>
  );
};

export default Index;
