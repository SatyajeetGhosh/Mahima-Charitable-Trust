import Layout from "../Layout/Layout";
import About from "../Pages/About/About";
import Causes from "../Pages/Causes/Causes";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";

export const navbarLinks = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/causes",
        element: <Causes />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]