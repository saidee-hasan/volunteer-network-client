import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "./../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Events from "../components/Events/Events";
import Admin from "../components/Admine/Admin";
import Donation from "../components/Donation/Donation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/register",
        element: (
          <PrivateRoute>
            <Register />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/events", element: <PrivateRoute><Events/></PrivateRoute>},
      { path: "/donation", element: <Donation /> },
    
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
