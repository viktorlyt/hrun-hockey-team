import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home, { loader as latestNewsLoader } from "./pages/Home";
import Cart from "./pages/Cart";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import HockeySchool from "./pages/HockeySchool";
import News, { loader as newsLoader } from "./pages/News";
import Schedule, { loader as scheduleLoader } from "./pages/Schedule";
import Shop, { loader as productsLoader } from "./pages/Shop";
import ProductDetail, { loader as productLoader } from "./pages/ProductDetail";
import StatsLayout from "./components/StatsLayout";
import Dashboard from "./pages/Stats/Dashboard";
import StatsSummary from "./pages/Stats/StatsSummary";
import StatsTeams from "./pages/Stats/StatsTeams";
import StatsGlossary from "./pages/Stats/StatsGlossary";
import Team, { loader as coachesLoader } from "./pages/Team";
import TeamHistory, { loader as milestonesLoader } from "./pages/TeamHistory";
import Tickets from "./pages/Tickets";
import NotFound from "./pages/NotFound";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home />, loader: latestNewsLoader },
      { path: "news", element: <News />, loader: newsLoader },
      { path: "team", element: <Team />, loader: coachesLoader },
      { path: "history", element: <TeamHistory />, loader: milestonesLoader },
      {
        path: "stats/",
        element: <StatsLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "skaters", element: <StatsSummary playerType="skater" /> },
          { path: "goalies", element: <StatsSummary playerType="goalie" /> },
          { path: "teams", element: <StatsTeams /> },
          { path: "glossary", element: <StatsGlossary /> },
        ],
      },
      { path: "shop", element: <Shop />, loader: productsLoader },
      { path: "shop/:id", element: <ProductDetail />, loader: productLoader },
      { path: "schedule", element: <Schedule />, loader: scheduleLoader },
      { path: "community", element: <Community /> },
      { path: "school", element: <HockeySchool /> },
      { path: "events", element: <Events /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "tickets", element: <Tickets /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
