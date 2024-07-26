/// Tema 7 ///

// Narrowing (hacer embudo o mezcla)

/*
function mostrarLongitud(objeto: number | string){
    if (typeof objeto === 'string'){
        return objeto.length
    }
    return objeto.toString().length
}
mostrarLongitud('1')

*/

/*
interface Mario {
    company: 'Nintendo',
    nombre: string,
    saltar: () => void
}

interface Sonic {
    company: 'Sega',
    nombre: string,
    correr: () => void
}

type Personaje = Mario | Sonic

function jugar (personaje : Personaje){
   
    if(personaje.company === 'Nintendo'){
     personaje.saltar()
     return
    }
    // Seguro que solo llega a Sonic
    personaje.correr()

    
     if(typeof personaje.company === 'function'){
    personaje.correr()
   }
    
     
}
*/


interface Mario {
  nombre: string;
  saltar() : void
}

interface Sonic {
  nombre: string;
  correr() : void;
}

type Personaje = Mario | Sonic;

//type guard (hay que evitar esto)

// Comprueba si el Personaje es Sonic
function checkIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined;
}

function play(personaje: Personaje) {
  if (checkIsSonic(personaje)) {
    personaje.correr();
  } else if (!checkIsSonic(personaje)) {
    personaje.saltar();
  } else {
    personaje
  }
}

