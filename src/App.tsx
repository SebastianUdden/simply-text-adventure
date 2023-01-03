import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Adventure from "./stories/pages/adventure/Adventure";
import StartPage from "./stories/pages/start-page/StartPage";
import { GAMES } from "./text-adventure-objects/games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: GAMES[0].slug,
    element: <Adventure {...GAMES[0]} />,
  },
  {
    path: GAMES[1].slug,
    element: <Adventure {...GAMES[1]} />,
  },
  {
    path: GAMES[2].slug,
    element: <Adventure {...GAMES[2]} />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
