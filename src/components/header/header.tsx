const Header = (props: { className: string }): JSX.Element => {
  return (
    <div className={`${props.className} flex flex-col text-center mt-24`}>
      <h1 className="text-6xl text-yellow mb-4">Purple Ocean</h1>
      <p className="text-xl text-white">
        A purple ocean theme for Visual Studio Code
      </p>
    </div>
  );
};

export default Header;
