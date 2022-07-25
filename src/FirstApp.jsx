import PropTypes from 'prop-types'; 

//segundo componente. Las funciones a utilizar se recomienda que vayan fuera del functional component.

const myObject = {
  nombre: 'Tierra', 
  civilizacion: 'Humanos'
}
 
const newArray = [1,2,3,4,5]; 

const HolaFrank = () => {
  console.log('Hola Frank')

}

//componente 
export function FirtsApp( {title, subtitle, name} ) {                  //({title}) = detestructuracion del props
  // console.log(props); 

    return (
     //inicio de fragmento (fragment)
      <>     
      <h1>{title}</h1>                                                             
        {/* <h1> { newArray } </h1>                              imprime arreglo */}
        <p> {HolaFrank()} </p>                                 {/* imprime el returno de la funcion y muestra el console.log */}
        {/* <code> { JSON.stringify(myObject) } </code>            Imprime el objeto tal cual en el HTML */}
        <p>{subtitle}</p>                                {/* Subtitulo normal */}
        <p>{name}</p>
      </> //fin de fragmento
      
    )
  }


// Definiendo PropTypes en nuestro componente
  FirtsApp.propTypes = {
    title: PropTypes.string.isRequired, 
    subtitle: PropTypes.string
  }

// Definiendo los valores por Deafult de las propiedades
  FirtsApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo',
    name: 'Franco'
  }







  /*
  FRAGMENTO:
  Un fragmento es un agrupador de elementos html o jsx.
  Permite tener dos o más elementos xml dentro de un mismo nivel jerárquico
  

  PROPTYPES: TIPOS DE PROPS O PROPIEDADES. Funciona para que otras personas identifiquen 
  como funciona un componente
  */