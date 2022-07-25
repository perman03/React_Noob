import { useState } from 'react'; 
import PropTypes from 'prop-types';


//functional component
export function CounterApp ({value}) {                   //value fue declarado en el main

     //primer hook
    const [ counter, setCounter] = useState(value);      //value = 0 


    function handleAdd() {                                                   //añade +1 a la cuenta
        setCounter(counter + 1);              //cambia el valor de counter
        //setCounter((c) => c +1);           //otra forma de hacerlo...
    }

    function handleSubtract(){                                              //resta -1 a la cuenta
        setCounter(counter - 1); 
    }

    function handleReset(){                                                //reinicia la cuenta
        setCounter(value); 
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSubtract}> -1 </button>
            <button id="btnreset" onClick={handleReset}> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}



/* NOTAS: 

CUANDO LOS ESTADOS CAMBIAN, SE VUELVE A LEER EL FUNCTIONAL COMPONENT. SE PUEDE COMPROBAR COLOCANDO UN CONSOLE.LOG AL INICIO DEL COMPONENTE


*/

