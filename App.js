import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import RestaurantMenu from "./src/RestaurantMenu";
import Body from "./src/Body";
import Error from "./src/Error";
import AppLayout from "./src/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// code splitting
// code chunking
// lazy loading
// on-demand loading
const Grocery = lazy(() => import("./src/Grocery"));
const About = lazy(() => import("./src/About"));
const Contact = lazy(() => import("./src/Contact"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurant-menu/:resid",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
