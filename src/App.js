import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import { Route } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
