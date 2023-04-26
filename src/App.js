import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";


const AppLayout = ()=>{
    return (
        <div className="app-layout">
           <HeaderComponent/>
           <BodyComponent/>
            </div>
    )
}

const AppRouter = createBrowserRouter([{
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
},
{
    path:"/about",
    element:<About/>
}])



rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(<RouterProvider router={AppRouter} />);