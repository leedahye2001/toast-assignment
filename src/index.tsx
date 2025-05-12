import Button from "./components/Button/Button";
import RoundOption from "./components/Input/RoundOption";

const Index = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <h1 className="text-[20px] font-[800] text-black">홈</h1>

      <div>
        <RoundOption />
      </div>
      <Button _node={"Toast Button"} />
    </div>
  );
};

export default Index;
