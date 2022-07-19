// JSX = XML + JS (REACT)

import React from "react";                     //importacion de react
import ReactDOM from "react-dom/client";       //render de react
import { FirtsApp } from "./FirstApp";
import { HelloWorldApp } from './HelloWorldApp'            //importamos componente

 


ReactDOM.createRoot(document.getElementById('root')).render(       //renderizacion de componente en el DOM
    <React.StrictMode>
        <FirtsApp/>
    </React.StrictMode>
)
