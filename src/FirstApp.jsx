//segundo componente. Las funciones a utilizar se recomienda que vayan fuera del functional component.

const myObject = {
  nombre: 'Tierra', 
  civilizacion: 'Humanos'
}
 
const newArray = [1,2,3,4,5]; 

const HolaFrank = () => {
  console.log('Hola Frank')
  return 4+4; 
}

//componente 
export function FirtsApp() {  

    return (
      
     //inicio de fragmento (fragment)
      <>                                                                  
        <h1> { newArray } </h1>                              {/* imprime arreglo */}
        <p> {HolaFrank()} </p>                                 {/* imprime el returno de la funcion y muestra el console.log */}
        <code> { JSON.stringify(myObject) } </code>            {/* Imprime el objeto tal cual en el HTML */}
        <p>Soy un subtitulo</p>                                {/* Subtitulo normal */}
      </> //fin de fragmento
      
    )
  }







  /*
  FRAGMENTO:
  Un fragmento es un agrupador de elementos html o jsx.
  Permite tener dos o más elementos xml dentro de un mismo nivel jerárquico
  
  */