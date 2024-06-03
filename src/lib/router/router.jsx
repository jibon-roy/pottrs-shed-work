import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../pages/DashboardLayout/dashboard/Dashboard";
import Home from "../../pages/MainLayout/home/Home";
import About from "../../pages/MainLayout/about/About";
import MainLayout from "../../pages/MainLayout/MainLayout";

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
    element: <Dashboard />,
  },
]);
