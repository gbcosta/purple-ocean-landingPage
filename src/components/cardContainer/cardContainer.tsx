import Card from "../card/card";
import vscodeImage from "../../assets/images/vscode.png";

const CardContainer = (): JSX.Element => {
  return (
    <div className="flex justify-center mt-16">
      <Card imageSrc={vscodeImage} />
    </div>
  );
};

export default CardContainer;
