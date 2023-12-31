import PurpleOceanImage from "../../assets/images/PurpleOceanImage.jpeg";

const HomeImage = (): JSX.Element => {
  return (
    <div className="flex justify-center ">
      <img className="max-width w-max shadow-2xl" src={PurpleOceanImage}></img>
    </div>
  );
};

export default HomeImage;
