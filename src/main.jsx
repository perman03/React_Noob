// JSX = XML + JS (REACT)

import React from "react";                     //importacion de react
import ReactDOM from "react-dom/client";       //render de react
import { CounterApp } from "./CounterApp";
import { FirtsApp } from "./FirstApp";
import { HelloWorldApp } from './HelloWorldApp'            //importamos componente
import './styles.css'

 


ReactDOM.createRoot(document.getElementById('root')).render(       //renderizacion de componente en el DOM
    <React.StrictMode>
        <CounterApp value = {0}/>
    </React.StrictMode>
)
