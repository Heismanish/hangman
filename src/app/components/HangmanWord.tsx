"use client";
import React, { useEffect, useState } from "react";

interface HangmanWordProps {
  reveal: boolean;
  guessedLetters: string[];
  wordToGuess: string;
}

const HangmanWord: React.FC<HangmanWordProps> = ({
  reveal,
  guessedLetters,
  wordToGuess,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }
  return (
    <div className="flex gap-[0.25em] uppercase font-mono text-[5rem] font-bold">
      {wordToGuess?.split("").map((letter, index) => (
        <p className="border-b-[0.1em] border-black " key={index}>
          <span
            className={`${
              !guessedLetters.includes(letter) ? "text-red-500" : ""
            } ${
              guessedLetters?.includes(letter) || reveal
                ? "visible"
                : "invisible"
            }`}
          >
            {letter}
          </span>
        </p>
      ))}
    </div>
  );
};

export default HangmanWord;
