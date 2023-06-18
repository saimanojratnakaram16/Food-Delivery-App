import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Help from "./components/Help";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import Profile from "./components/Profile";
import UserDataContext from "./contexts/UserDataContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const RestaurentDetails = lazy(() => import("./components/RestaurentDetails"));

const AppLayout = () => {
  const [userData, setUserData] = useState({
    name: "Sai",
    email: "sai@gmail.com",
    address: "123 Main St",
    phone: "9912991299",
  });
  return (
    <div className="app-layout">
      <Provider store={store}>
      <UserDataContext.Provider value={{userData:userData,setUserData:setUserData}}>
        <HeaderComponent />
        <Outlet />
      </UserDataContext.Provider>
      </Provider>
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "help",
        element: <Help />,
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
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
