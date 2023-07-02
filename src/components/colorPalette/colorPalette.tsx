const ColorBall = (props: { color: string }): JSX.Element => {
  return <div className={`${props.color} rounded-full w-10 h-10`}></div>;
};

const ColorPalette = (): JSX.Element => {
  return (
    <div className="mt-32">
      <h2 className="text-white text-4xl text-center font-bold">
        Color Palette
      </h2>
      <div className="flex items-center justify-center flex-col max-sm:flex-row gap-6 mt-16">
        <div className="flex gap-6 flex-row max-sm:flex-col">
          <ColorBall color="bg-yellow" />
          <ColorBall color="bg-palePurple" />
          <ColorBall color="bg-red" />
          <ColorBall color="bg-green" />
          <ColorBall color="bg-lightGreen" />
          <ColorBall color="bg-lightBlue" />
          <ColorBall color="bg-white" />
        </div>
        <div className="flex gap-6 flex-row max-sm:flex-col">
          <ColorBall color="bg-primary" />
          <ColorBall color="bg-darkPurple" />
          <ColorBall color="bg-secondary" />
          <ColorBall color="bg-terciary" />
          <ColorBall color="bg-quaternary" />
          <ColorBall color="bg-lightPurple" />
          <ColorBall color="bg-pink" />
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
