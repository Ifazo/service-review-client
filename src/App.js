import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";

function App() {
  return (
    <div className="App text-center">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
