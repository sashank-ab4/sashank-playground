import { createBrowserRouter } from "react-router-dom";
import App from "../AppLayout";
import About from "../pages/AboutPage";
import Contact from "../pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
