const onClick = (): void => {
  window.open(
    "https://marketplace.visualstudio.com/items?itemName=gbcostasant.purple-ocean"
  );
};

const Card = (props: { imageSrc: string }): JSX.Element => {
  return (
    <figure
      className="bg-purple-600 w-full flex justify-center items-center rounded-md cursor-pointer justify-self-center flex-col lg:py-12  sm:py-8  max-sm:py-4 "
      onClick={onClick}
    >
      <img src={props.imageSrc} className="w-20 h-20" />
      <p className="text-white">VSCODE</p>
    </figure>
  );
};

export default Card;
