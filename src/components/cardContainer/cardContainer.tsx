import Card from "../card/card";
import vscodeImage from "../../assets/images/vscode.png";

const CardContainer = (): JSX.Element => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2  mt-32 gap-8 place-content-center">
      <Card imageSrc={vscodeImage} />
      <Card imageSrc={vscodeImage} />
      <Card imageSrc={vscodeImage} />
      <Card imageSrc={vscodeImage} />
      <Card imageSrc={vscodeImage} />
      <Card imageSrc={vscodeImage} />
      <Card imageSrc={vscodeImage} />
      <Card imageSrc={vscodeImage} />
    </div>
  );
};

export default CardContainer;
