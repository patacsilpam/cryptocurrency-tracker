import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { FetchCoins } from "./hooks/fetch";
function App() {
  FetchCoins();
  return (
    <div className="relative flex flex-col justify-center overflow-hidden max-w-7xl w-full mx-auto px-10  text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
