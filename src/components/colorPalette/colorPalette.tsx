const ColorBall = (props: { color: string }): JSX.Element => {
  return <div className={`${props.color} rounded-full w-8 h-8`}></div>;
};

const ColorPalette = (): JSX.Element => {
  return (
    <div className="flex items-center flex-col gap-4 mt-32">
      <h2 className="text-white text-4xl">Color Palette</h2>
      <div className="flex gap-4 mt-16">
        <ColorBall color="bg-yellow" />
        <ColorBall color="bg-palePurple" />
        <ColorBall color="bg-red" />
        <ColorBall color="bg-green" />
        <ColorBall color="bg-lightGreen" />
        <ColorBall color="bg-lightBlue" />
        <ColorBall color="bg-white" />
      </div>
      <div className="flex gap-4">
        <ColorBall color="bg-primary" />
        <ColorBall color="bg-darkPurple" />
        <ColorBall color="bg-secondary" />
        <ColorBall color="bg-terciary" />
        <ColorBall color="bg-quaternary" />
        <ColorBall color="bg-lightPurple" />
        <ColorBall color="bg-pink" />
      </div>
    </div>
  );
};

export default ColorPalette;
