import "./App.css";
import Adventure from "./stories/pages/Adventure";
import { BOSS_ADVENTURE } from "./text-adventure-objects/boss-adventure";

function App() {
  return (
    <div className="App">
      <Adventure {...BOSS_ADVENTURE} />
    </div>
  );
}

export default App;
