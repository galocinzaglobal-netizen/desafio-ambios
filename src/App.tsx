import { Background } from "./components/Background";
import { RouletteGame } from "./components/RouletteGame";

export default function App() {
  return <div className="app-shell"><div className="game-frame"><Background /><RouletteGame /></div></div>;
}
