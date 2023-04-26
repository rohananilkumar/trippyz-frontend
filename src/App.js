import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard"
import Budget from "./pages/Budget"
import Parameters from "./pages/Parameters"
import Routeresult from "./pages/Routeresult"
import Welcome from "./pages/Welcome"
import Routeone from "./pages/Routeone"
import Routetwo from "./pages/Routetwo"
import Routethree from "./pages/Routethree"
//import { Route } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Successlogin from "./pages/Successlogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path:"/dashboard",
    element:<Dashboard />
  },
  {
    path:"/budget_details",
    element:<Budget />
  },
  {
    path:"/parameters",
    element:<Parameters/>
  },
  {
    path:"/route_results",
    element:<Routeresult />
  },
  {
    path:"/welcome",
    element:<Welcome/>
  },
  {
    path:"/successfull_login",
    element:<Successlogin/>
  },
  {
    path:"/route_result_one",
    element:<Routeone />
  },
  {
    path:"/route_result_two",
    element:<Routetwo/>
  },
  {
    path:"/route_result_three",
    element:<Routethree/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
