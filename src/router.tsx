// router.tsx
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Genero from "./pages/Genero";
import Livro from "./pages/Livro";
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/app",
    element: <RootLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "genero", element: <Genero /> },
      { path: "livro", element: <Livro /> },
    ],
  },
]);

export default router;