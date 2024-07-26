///// Tema 4 ////

// Interfaces


// La intefaz puede extends de otra 
/*
type Heroe = {
    id: string,
    name: string,
    age: number 
}
*/


/*
interface Heroe  {
    id: string,
    name: string,
    age: number ,
    saludar: () => void
}

const hero : Heroe = {
    id:'1',
    name:'Spiderman',
    age: 12,
    saludar: () => {
        console.log('Hola')
    }
}
*/


interface Producto  {
    id: number,
    nombre: string,
    precio: number
    quantity:number
}

interface Zapatilla extends Producto{
   talla: number
}


interface CarritoDeCompras {
    totalprice: number,

    productos: (Producto | Zapatilla)[]
}

const carrito : CarritoDeCompras = {
    totalprice:100,
    productos:[
        {
            id:1,
            nombre:'producto',
            precio:100,
            quantity:1,
            talla:5
        }
    ]
}


interface CarritoOps {
    add: (product: Producto) => void,
    remove: (id: number) => void,
 
}

interface CarritoOps {
    clear () : void 
}

const ops: CarritoOps ={
    add: (product: Producto) => {},
    remove: (id:number) => {},
    clear: () => {},

}

// We can write in two kinds of ways and it's the same thing

/*
interface CarritoOps {
    add: (product: Producto) => void,
    remove: (id: number) => void,
    clear: () => void 
}



interface CarritoOps {
    add(product: Producto) : void,
    remove (id: number) : void,
    clear () : void 
}
*/