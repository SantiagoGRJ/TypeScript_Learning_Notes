/////  TEMA 1 /////


// Enums (utilizar enum´s si es un componentes hacia el exterior)

/* Para una colección de datos 
Finita (Datos finitos (5,10,15 max 20)) */

/*
enum ERROR_TYPES {
  NOT_FOUND, 
  UNAUTHORIZED,
  FORBIDDEN,
}

function mostrarMensaje(tipoDeError : ERROR_TYPES) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log("No tienes Permiso para acceder");
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("No tienes permisos para acceder");
  }
}
*/

/*
enum ERROR_TYPES {
  NOT_FOUND = 'notFound' , 
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden',
}

function mostrarMensaje(tipoDeError : ERROR_TYPES) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log("No tienes Permiso para acceder");
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("No tienes permisos para acceder");
  }
}
*/

// const Enums (Utilizar const para no generar codigo de mas)

/*
const enum ERROR_TYPES {
    NOT_FOUND, 
    UNAUTHORIZED,
    FORBIDDEN,
  }
  
  function mostrarMensaje(tipoDeError : ERROR_TYPES) {
    if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
      console.log("No se encuentra el recurso");
    } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
      console.log("No tienes Permiso para acceder");
    } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
      console.log("No tienes permisos para acceder");
    }
  }
*/



/////  TEMA 2 /////

// Aserciones de tipos

/*
const canvas = document.getElementById('canvas') as HTMLCanvasElement

/*
 null si no lo encuentra
 HTMLELEMENT si lo encuentra

 ??? como sabe que esta recuperando un elemento canvas?


    const ctx = canvas?.getContext('2d')

/*

const canvas = document.getElementById('canvas')

if(canvas != null ){
    const ctx = (canvas as HTMLCanvasElement ).getContext('2d')
}
*/


// buena
/*
const canvas = document.getElementById('span')

// inferencia -> TypeScript se da cuenta que dentro del if
// ya solo el canvas va poder ser un HTMLCanvasElement

if(canvas instanceof HTMLCanvasElement ){ // <-- ✅  deduce si es tipo canvas
  //aqui no entra
    const ctx = canvas.getContext('2d')
}
*/

// typeof -> para tipos (string, number, boolean)

// instanceof -> para instancias (date)



