import React from "react";

const HEAD = (
  <div className="w-[50px] h-[50px] border-[10px] border-black  rounded-full absolute top-[50px] right-[-20px] "></div>
);

const BODY = (
  <div className="w-[10px] h-[100px] bg-black absolute top-[95px] right-0"></div>
);
const RIGHTARM = (
  <div className="w-[10px] h-[50px] bg-black absolute top-[125px] right-[-15px] rotate-[140deg]"></div>
);
const LEFTARM = (
  <div className="w-[10px] h-[50px] bg-black absolute top-[125px] right-[15px] rotate-[-140deg]"></div>
);
const RIGHTLEG = (
  <div className="w-[10px] h-[50px] bg-black absolute top-[180px] right-[-16px] rotate-[140deg]"></div>
);
const LEFTLEG = (
  <div className="w-[10px] h-[50px] bg-black absolute top-[180px] right-[16px] rotate-[-140deg]"></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHTARM, LEFTARM, RIGHTLEG, LEFTLEG];

interface HangmanDrawingProps {
  numberOfGuesses: number;
}

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ numberOfGuesses }) => {
  console.log(numberOfGuesses);
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="h-[51px] w-[10px] bg-black absolute top-0 right-0"></div>
      <div className="h-[10px] w-[200px] bg-black ml-[120px]"></div>
      <div className="w-[10px] h-[400px] bg-black ml-[120px]"></div>
      <div className="h-[10px] w-[250px] bg-black"></div>
    </div>
  );
};

export default HangmanDrawing;
