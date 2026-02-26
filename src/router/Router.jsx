import { createBrowserRouter } from "react-router-dom";
import App from "../layout/AppLayout";
import About from "../pages/AboutPage";
import Contact from "../pages/ContactPage";
import HeroSection from "../components/HeroSec";
import Playground from "../layout/Playground";

import PlaygroundHome from "../components/PlaygroundContent";
import { categoryRoutes } from "../../Utils/categoryRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HeroSection />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "playground",
        element: <Playground />,
        children: [
          {
            index: true,
            element: <PlaygroundHome />,
          },
          ...categoryRoutes,
        ],
      },
    ],
  },
]);
