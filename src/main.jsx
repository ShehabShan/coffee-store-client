import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Componenet/AddCoffee.jsx";
import UpdateCoffee from "./Componenet/UpdateCoffee.jsx";
import SingIn from "./Componenet/SingIn.jsx";
import SingUp from "./Componenet/SingUp.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Users from "./Componenet/Users.jsx";
import UserEdit from "./Componenet/UserEdit.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/addCoffee"),
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/addCoffee/${params.id}`),
  },
  {
    path: "singin",
    element: <SingIn></SingIn>,
  },
  {
    path: "singup",
    element: <SingUp></SingUp>,
  },
  {
    path: "users",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "editusers/:id",
    element: <UserEdit></UserEdit>,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
