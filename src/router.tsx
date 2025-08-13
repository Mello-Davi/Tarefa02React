import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import RootLayout from "./RootLayout";
import home from "./pages/Home";
import genero from "./pages/Genero";
import livro from "./pages/Livro";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/app",
        element: <RootLayout />,
        children: [
            { path: "home", element: <Home />},
            { path: "genero", element: <Genero />},
            { path: "livro", element: <Livro />}
        ]
    }
])