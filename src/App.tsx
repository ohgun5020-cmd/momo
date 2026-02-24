import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DivWrapper } from "./screens/DivWrapper";
import { Element } from "./screens/Element";
import { ElementScreen } from "./screens/ElementScreen";
import { ElementWrapper } from "./screens/ElementWrapper";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { Screen6 } from "./screens/Screen6";
import { Screen8 } from "./screens/Screen8";
import { Screen9 } from "./screens/Screen9";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Element />,
  },
  {
    path: "/x1",
    element: <Element />,
  },
  {
    path: "/x5",
    element: <ElementScreen />,
  },
  {
    path: "/x10",
    element: <ElementWrapper />,
  },
  {
    path: "/x7",
    element: <DivWrapper />,
  },
  {
    path: "/x3",
    element: <Screen4 />,
  },
  {
    path: "/x6",
    element: <Screen5 />,
  },
  {
    path: "/x8",
    element: <Screen6 />,
  },
  {
    path: "/x9",
    element: <DivWrapper initialSelectOpen />,
  },
  {
    path: "/x2",
    element: <Screen8 />,
  },
  {
    path: "/x4",
    element: <Screen9 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
