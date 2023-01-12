import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import SignIn from "./routes/SignIn";
import Dashboard from "./routes/Dashboard";
import TopNav from "./Components/TopNav/TopNav";
import Nav from "./Components/Nav/Nav";
import UFC from "./Components/UFC/UFC";
import Soccer from "./Components/Soccer/Soccer";
import Bitcoin from "./Components/Bitcoin/Bitcoin";
import Tennis from "./Components/Tennis/Tennis";
import Golf from "./Components/Golf/Golf";
import Basketball from "./Components/Basketball/Basketball";
import Boxing from "./Components/Boxing/Boxing";
import Football from "./Components/Football/Football";
import Cricket from "./Components/Cricket/Cricket";
import Banner from "./Components/Banner/Banner";
import Baseball from "./Components/Baseball/Baseball";
import Volleyball from "./Components/Volleyball/Volleyball";
import Hockey from "./Components/Hockey/Hockey";
import Snooker from "./Components/Snooker/Snooker";
import Darts from "./Components/Darts/Darts";
import HorseRace from "./Components/HorseRace/HorseRace";
import Politics from "./Components/Politics/Politics";
import EventHistoryDisplay from "./Components/EventHistoryDisplay/EventHistory";
import EditDetails from "./Components/Edit/EditDetails";
import ETH from "./Components/ETH/ETH";
import Airdrop from "./Components/Airdrop/Airdrop";

const token = localStorage.getItem("token");
const router = createBrowserRouter([
  {
    path: "/admin",
    element: !token ? <SignIn /> : <Navigate to="/admin/Dashboard" />,
  },
  {
    path: "/admin/Dashboard",
    element: token ? <Dashboard /> : <Navigate to="/admin" />,
    children: [
      {
        path: "uploadBanner/",
        element: <Banner />,
      },
      {
        path: "admin/",
        element: <h2>Admin</h2>,
      },
      {
        path: "admin/TopNav",
        element: <TopNav />,
      },
      {
        path: "admin/Nav",
        element: <Nav />,
      },
      {
        path: "admin/Airdrop",
        element: <Airdrop />,
      },
      {
        path: "admin/UFC",
        element: <UFC />,
      },
      {
        path: "admin/Soccer",
        element: <Soccer />,
      },
      {
        path: "admin/BTC",
        element: <EventHistoryDisplay />,

        children: [
          {
            path: "EditDetails",
            element: <Bitcoin edit={true} />,
          },
          {
            path: "create",
            element: <Bitcoin />,
          },
        ],
      },
      {
        path: "admin/Tennis",
        element: <Tennis />,
      },
      {
        path: "admin/Golf",
        element: <Golf />,
      },
      {
        path: "admin/Basket-ball",
        element: <Basketball />,
      },
      {
        path: "admin/Boxing",
        element: <Boxing />,
      },
      {
        path: "admin/AmericanFootball",
        element: <Football />,
      },
      {
        path: "admin/Cricket",
        element: <Cricket />,
      },
      {
        path: "admin/Baseball",
        element: <Baseball />,
      },
      {
        path: "admin/Volleyball",
        element: <Volleyball />,
      },
      {
        path: "admin/Hockey",
        element: <Hockey />,
      },
      {
        path: "admin/Snooker",
        element: <Snooker />,
      },
      {
        path: "admin/Darts",
        element: <Darts />,
      },
      {
        path: "admin/Horse-Race",
        element: <HorseRace />,
      },
      {
        path: "admin/Politics",
        element: <Politics />,
      },
      {
        path: "admin/EventHistory",
        element: <EventHistoryDisplay />,
      },
      {
        path: "admin/EventHistory/EditDetails",
        element: <EditDetails />,
      },
      {
        path: "admin/ETH",
        element: <ETH />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
