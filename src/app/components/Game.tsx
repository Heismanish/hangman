"use client";

import React, { useCallback, useEffect, useState } from "react";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
import { getRandomWord } from "../lib/words";

const Game = () => {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters?.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isLoser = incorrectLetters.length >= 6;

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters?.includes(letter)) return;

      setGuessedLetters((currentLetter) => [...currentLetter, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key != "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getRandomWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  console.log(wordToGuess);

  return (
    <div className="flex flex-col items-center gap-4 max-w-[800px] mx-auto my-0">
      <h1 className="text-xl text-center">
        {isWinner && "Winner!! Refresh to play again"}
        {isLoser && "Nice try!!  Refresh to play again"}
      </h1>
      <HangmanDrawing numberOfGuesses={incorrectLetters?.length || 0} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div className="self-stretch">
        <Keyboard
          activeLetters={
            guessedLetters?.filter((l) => wordToGuess.includes(l)) || []
          }
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={isWinner || isLoser}
        />
      </div>
    </div>
  );
};

export default Game;
