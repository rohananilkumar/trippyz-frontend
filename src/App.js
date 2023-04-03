import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import { Route } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
