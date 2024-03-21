"use client";
import React, { useEffect, useState } from "react";
const KEYS = "qazwsxedcrfvtgbyhnujmiklop".split("");

interface KeyboardProps {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled: boolean;
}

const Keyboard: React.FC<KeyboardProps> = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,_1fr))] gap-2 ">
      {KEYS.map((key, index) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`p-1 bg-white border-black border-4 aspect-square cursor-pointer font-semibold text-3xl hover:bg-[#507fe5] transition ${
              isActive
                ? " bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white"
                : ""
            } ${isInactive ? " opacity-30  bg-gray-400 text-gray-700" : ""}`}
            key={index}
            disabled={isActive || isInactive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
