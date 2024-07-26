/*
function saludar(name: string){
     console.log(`Hola${name}`);
 }
 saludar('pepe');
*/

/*
 function saludar({name,age}:{name:string,age:number}) {
   console.log(`Hola ${name}, tiene ${age} años`);
 }
 saludar({ name: "hola", age: 12 });
*/


/*
function saludar({ name, age }: { name: string; age: number }) {
   console.log(`Hola ${name}, tiene ${age} años`);
   return age;
 }
*/

/*
 const say = (fn) => {
      fn('Miguel')
}

 say((name) => {
     console.log(`Hola ${name}`)
 })
 */


// manera de crear una funcion tipada 
/*

 const sumar = (a:number,b:number): number =>{
     return a+b
 }

 const restar: (a:number, b:number) => number = (a,b) => {
     return a-b
 }

 function logMessage(message:string):void {
     console.log(message)

 }
*/


/*
 const avengers =['Spider','Huak','Avengers']

 avengers.forEach(function (avergers){
     console.log(avergers.toLocaleUpperCase())
 })

*/


/*
// Type Alias

 type Hero = {
    name:string,
     age:number
 }


 let hero: Hero={
     name:'thor',
     age:1500
 }

 function createHero(hero: Hero):Hero{
     const {name,age}= hero
     return {name,age}
 }
 
 const thor = createHero({name:'Thor',age:1500})
*/


/*
// optional properties

 type HeroId =`${string}-${string}-${string}-${string}-${string}`
 type HeroPowerScale = 'local' | 'planetary' | 'universal'

 type Hero = {
    readonly id?:HeroId,
      name:string,
      age:nume?: boolean
      powerSber,
      isActivcale?: HeroPowerScale
  }


 let hero: Hero={
      name:'thor',
      age:1500
  }

  function createHero(hero: Hero):Hero{
      const {name,age}= hero
      return {
         id:crypto.randomUUID(),
         name,
         age,
          isActive:true}
  }
 const thor =createHero({name:'Thor',age:1500})
 thor.powerScale="planetary"
*/


/*
// intersection Types

 type HeroId =`${string}-${string}-${string}-${string}-${string}`
 type HeroPowerScale = 'local' | 'planetary' | 'universal'


 type HeroBasicInfo= {
     name:string,
     age:number,
 }

 type HeroProperties= {
    readonly id?:HeroId,
      isActive?: boolean
      powerScale?: HeroPowerScale
  }

  type Hero = HeroBasicInfo & HeroProperties

  let hero: Hero={
      name:'thor',
     age:1500
 }

  function createHero(input: HeroBasicInfo):Hero{
      const {name,age}= input
      return {
         id:crypto.randomUUID(),
         name,
         age,
          isActive:true}
  }
 const thor =createHero({name:'Thor',age:1500})
 thor.powerScale="planetary"
*/

/*
//Type indexing

 type HeroProperties = {
     isActive: boolean,
     address:{
         planet:string,
         city: string
     }
 }

 const addressHero: HeroProperties['address'] ={
     planet: 'Earth',
     city:'Madrid'

 }
*/



/*
// type from value

 const address= {
     planet: 'Earth',
     city: 'Madrid'
 }



 type Address = typeof address

 const addressTwich: Address = {
     planet:'Mars',
     city: 'Twich'
 }
*/
 

/*
// Type From function return

 function createAddress(){
     return {
         planet: 'Tierra',
         city:'Barcelona'
     }
 }

 type Address = ReturnType<typeof createAddress>
*/


/*
// Arrays

 const languages :  (string | number | boolean)[] = []

 languages.push('JavaScript')
 languages.push(2)
 languages.push(true)


 */


 /*
 // new top, declaration Array 
  type HeroId =`${string}-${string}-${string}-${string}-${string}`
  type HeroPowerScale = 'local' | 'planetary' | 'universal'


  type HeroBasicInfo= {
     id?: HeroId,
     name:string,
      age:number,
  }

 const heroWithBasicInfo : HeroBasicInfo[] =[]
*/


/*
[
    ['X','O','X'], // string[]
    ['O','X','O'], // string[]
    ['X','','O']   // string[]
]
*/

/*
type CellValue = 'X' | 'O' | ''

type GameBoard = [
    [ CellValue, CellValue, CellValue],
    [ CellValue, CellValue, CellValue],
    [ CellValue, CellValue, CellValue]
]

const gameBoard : GameBoard = [
    ['X','O','X'], // string[]
    ['O','X','O'], // string[]
    ['X','','O'],   // string[]
]
gameBoard[0][1]='X'
*/



/*
 type State =[string,(name:string) => void]

 const [hero,setHero] : State =useState('thor')
*/

/*
type RGB = [number,number,number]

const rgb: RGB =[2,5,4]
*/



