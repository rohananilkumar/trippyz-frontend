
import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Budget from "./pages/Budget";
import Parameters from "./pages/Parameters";
import Routeresult from "./pages/Routeresult";
import Welcome from "./pages/Welcome";
import Routeone from "./pages/Routeone";
import Routetwo from "./pages/Routetwo";
import Routethree from "./pages/Routethree";

//import { Route } from "react-router-dom";

import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Successlogin from "./pages/Successlogin";
import { useState } from "react";
import axiosInstance from "./utils/axios";
import { getObjectFromLocalStorage } from "./utils/localStorage";
import { useEffect } from "react";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  const [data, setData] = useState({
    dest: undefined,
    start: undefined,
    duration: undefined,
    radius: undefined,
    budget: "23423",
    considerations: ["food", "stay"],
    restaurantRatingPreference: 4,
    roomForError: 40,
    routeType: "normal-scheduled",
    peopleCount: 2,
  });
  const [serverResponse, setServerResponse] = useState();

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
      path: "/dashboard",
      element: (
        <Dashboard
          submit={(data) => {
            setData((x) => {
              console.log(x);
              return {
                ...x,
                dest: data.destination,
                start: data.startingPoint,
                duration: data.duration,
                radius: data.radius,
              };
            });
          }}
        />
      ),
    },
    {
      path: "/budget_details",
      element: <Budget />,
    },
    {
      path: "/parameters",
      element: (
        <Parameters
          submit={async () => {
            console.log("sending server request");
            const response = await axiosInstance.post(
              "routes/get-route",
              data,
              {
                headers: {
                  ["x-auth-token"]: getObjectFromLocalStorage("token"),
                },
              }
            );
            setServerResponse(response.data);
          }}
        />
      ),
    },
    {
      path: "/route_results",
      element: <Routeresult />,
    },
    {
      path: "/welcome",
      element: <Welcome />,
    },
    {
      path: "/successfull_login",
      element: <Successlogin />,
    },
    {
      path: "/route_result_one",
      element: <Routeone route={serverResponse} />,
    },
    {
      path: "/route_result_two",
      element: <Routetwo />,
    },
    {
      path: "/route_result_three",
      element: <Routethree />,
    },
    {
      path: "/final",
      element: <MainLayout />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;