import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/main/MainLayout";
import DashboardLayout from "../../layout/dashboard/DashboardLayout";
import Home from "../../pages/MainPages/home/Home";
import About from "../../pages/MainPages/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);
