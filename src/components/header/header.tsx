import HomeImage from "../homeImage/homeImage";
const Header = (props: { className?: string }): JSX.Element => {
  return (
    <div className={`${props.className} flex flex-col text-center`}>
      <h1 className="text-6xl text-lightBlue mb-4">Purple Ocean</h1>
      <p className="text-xl text-white mb-32">
        A purple ocean theme for Visual Studio Code
      </p>
      <HomeImage />
    </div>
  );
};

export default Header;
