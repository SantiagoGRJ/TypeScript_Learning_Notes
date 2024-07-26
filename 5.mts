///// Tema 5 /////

// Types vs interface

type HeroId = `${number}-${string}`

interface Hero {
    id: HeroId,
    name: string,
    age:number
}


// interface no puede
const RGB=[0,0,0] 
