import Image from "next/image";
import Game from "./components/Game";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <h1 className="text-center text-2xl ">Hangman Game</h1>
      <Game />
    </main>
  );
}
