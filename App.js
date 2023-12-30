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

// Lazy loading is a technique for waiting to load certain parts of a webpage — especially images — until they are needed. Instead of loading everything all at once, known as "eager" loading, the browser does not request certain resources until the user interacts in such a way that the resources are needed.

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
