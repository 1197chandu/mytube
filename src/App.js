import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./redux/appStore.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./components/WatchPage.jsx";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
