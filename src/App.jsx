import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="text-3xl">
          <Header />
          <Body />
        </div>
      ),
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "/watch", element: <Watchpage /> },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
