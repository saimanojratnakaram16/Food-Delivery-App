import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";

rootElement = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = ()=>{
    console.log(<HeaderComponent/>)
    return (
        <div className="app-layout">
           <HeaderComponent/>
           <BodyComponent/>
            </div>
    )
}

rootElement.render(<AppLayout/>)