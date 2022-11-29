import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";

function App() {
  return (
    <div className="App text-center">
      <RouterProvider router={routes} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
