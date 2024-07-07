import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import HockeySchool from "./pages/HockeySchool";
import News, { loader as newsLoader } from "./pages/News";
import Schedule from "./pages/Schedule";
import Shop, { loader as productsLoader } from "./pages/Shop";
import ProductDetail, { loader as productLoader } from "./pages/ProductDetail";
import Stats from "./pages/Stats";
import Team, { loader as coachesLoader } from "./pages/Team";
import Tickets from "./pages/Tickets";
import NotFound from "./pages/NotFound";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "news", element: <News />, loader: newsLoader },
      { path: "team", element: <Team />, loader: coachesLoader },
      { path: "shop", element: <Shop />, loader: productsLoader },
      { path: "shop/:id", element: <ProductDetail />, loader: productLoader },
      { path: "schedule", element: <Schedule /> },
      { path: "community", element: <Community /> },
      { path: "school", element: <HockeySchool /> },
      { path: "events", element: <Events /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "stats", element: <Stats /> },
      { path: "tickets", element: <Tickets /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
