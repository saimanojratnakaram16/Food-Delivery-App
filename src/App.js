import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";

const RestaurentDetails = lazy(() => import("./components/RestaurentDetails"));

const AppLayout = () => {
  return (
    <div className="app-layout">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "restaurent/:restaurentId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurentDetails />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<RouterProvider router={AppRouter} />);
