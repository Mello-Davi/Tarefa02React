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
    path: "/livraria",
    element: <RootLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "genero/:genero", element: <Genero /> },
      { path: "livro/:idLivros", element: <Livro key={location.pathname} /> },
      //{ path: "cart", element: }
    ],
  },
]);

export default router;