/*const nombre = "Xicotencatl";

function getName( nombre ){
  return 'Hola ' + nombre;
}

const persona = {
  nombere: 'David',
  apellido: 'Xicotencatl'
}


console.log(  ` -> ${ getName(nombre) } `  )
console.log(  {persona}  )
console.table(  {persona}  )


let arreglo = [ 1,2,3,4 ];

let arreglo2 = arreglo.map( function(number){
    return number * 2;
} )


console.log( {arreglo} )
console.log( {arreglo2} )



const saludar2 = ( nombre) => {
  return `Hola, ${ nombre }`;
}

const saludar3 = () => `Hola, Elian`;
console.log( saludar2("david") );
console.log( saludar3() );



const getUser = () => {
  return({
    uid: "asd",
    username: "david"
  });
}

const getUser2 = ( nombre ) => ({
    uid: "asd",
    username: nombre
  });



console.log( getUser );
console.log( getUser2("Elian") );



// desestructuracion 
// asignacion desestructutante


const personaObj = {
  nombreP: "Davi",
  edad: 12
};

const personaObj2 = {
  nombreP: "Davi",
  edad: 12,
  rango: "dir"
};



const { nombreP, edad } = personaObj;


console.log( nombreP )
console.log( edad )

const retornaPersona = ( usuario ) => {
  const { nombreP, edad } = usuario;

  console.log( nombreP, edad )
}

const dataContext = ( { nombreP, edad, rango = "cap" } ) => {
  console.log( nombreP, edad, rango )
  return{
    nombreClave: nombre,
    anios: edad,
    tipo: rango,
    ubicacion: {
        lat: 90,
        lng: 45
    }
  }
};




retornaPersona( personaObj )
const { nombreClave, ubicacion:{ lat, lng } } = dataContext( personaObj );
const data2 = dataContext( personaObj2 );

console.log( nombreClave )
console.log( data2 )
console.log( lat, lng )



const personajes = [ "A", "B", "C"];

const [ t1 ] = personajes;
const [ ,t2 ] = personajes;

const arregloe = () => {
  return ['ACV',23];
}

const [ letras, numeros ] = arregloe();

console.log( t1 )
console.log( t2 )
console.log( letras )
console.log( numeros )*/


//import { heroes } from './data/heroes'
//import heroes, { owners } from './data/heroesd'
import heroes from './data/heroesd'

//const [ d1 ] = heroes;

const getHeroeId = ( id ) => heroes.find( ( heroes ) => heroes.id === id )
//const getHeroeOwner = ( owner ) => heroes.filter( ( heroes ) => heroes.owner === owner )


/*console.log( heroes )
console.log( d1 )
console.log( getHeroeId( 3 ) )
console.log( getHeroeOwner( 'DC' ) )
console.log( owners)*/


/*const promesa = new Promise( ( resolve, reject )  => {

  setTimeout( () => {
    const her = getHeroeId( 1 );
    console.log( her );
    resolve( her );
    //reject( ' Error de promesa ' );
  }, 2000)

});

promesa.then( ( h ) => {
  console.log( ' then promesa, ', h)
} )
.catch( err => console.log( err ) )*/



const getHeroByIdAsync  = ( id ) => {
  return new Promise( ( resolve, reject )  => {

    setTimeout( () => {
      const her = getHeroeId( id );
      console.log( her );
      her !== undefined ? resolve( her ) : reject( 'No existe ese herore' )
      //resolve( her );
      //reject( ' Error de promesa ' );
    }, 2000)
  
  });

};

/*getHeroByIdAsync( 2 )
  .then( heroe => console.log( 'Herore', heroe ) )
  .catch( err => console.log( err ));*/

//getHeroByIdAsync( 2 )
  //.then( console.log )
  //.catch( console.warn );


  // FETCH API

const apiKey = "kcyjtZHJEHCVxxNWa2x3xE5qIbGmwGSE"
// api.giphy.com/v1/gifs/random

const peticion = fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` );

/*peticion.then( response => {
  response.json().then( data => {
    console.log( data )
  } )
}).catch( console.warn )*/

peticion
  .then( response => response.json() )
  .then( ({ data }) => {
    const { url } = data.images.original;

    console.log( data.images.original.url )

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );

  } )
  .catch( console.warn )