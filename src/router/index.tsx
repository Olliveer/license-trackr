import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/pages/_layouts/app";
import { NotFound } from "@/pages/404";
import Error from "@/pages/error";
import Dashboard from "@/pages/app/dashboard/dashboard";
import Licenses from "@/pages/app/licenses/licenses";
import Home from "@/pages/app/home/home";
import Equipments from "@/pages/app/equipments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/app", element: <Dashboard /> },
      {
        path: "licenses",
        element: <Licenses />,
      },
      {
        path: "equipments",
        element: <Equipments />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
