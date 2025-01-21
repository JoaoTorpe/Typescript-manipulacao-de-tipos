// O que é um type ? R: Uma forma de definir uma estrutura

type car ={
    brand:string,
    year:number,
}

let  myCar: car = { brand: "Toyota", year: 2020 }

console.log(myCar) //{ brand: 'Toyota', year: 2020 }

// É parecido com interface

interface Motorcycle {
    brand: string;
    year: number;
}

let myBike: Motorcycle = { brand: "Honda", year: 2021 };

console.log(myBike); // { brand: 'Honda', year: 2021 }


//Qual é a diferença entre interface e type ?
    //Reabertura
interface Motorcycle {
    color?: string;
  }
  
const myOtherBike: Motorcycle = { brand: "Kawasaki", year: 2022, color: "Red" };

console.log(myOtherBike) // { brand: "Kawasaki", year: 2022, color: "Red" }


//Tipos condicionais


    //Estrutura basica

        //Composto por um ternario

         let result = true ? 'its true' : 'its false'

        //  if(true){
        //     result = 'its true'
        //  }
        //  else{
        //     result = 'its false'
        //  }

         console.log(result)

    //Exemplo ruim
    type isString<T> = T extends string ? "Yes" : "No";

    type result1 = isString<"String">//Yes
    type result2 = isString<10>// No

    //Exemplo menos ruim
    type ApiResponse<T extends "success" | "error"> = T extends "success" ? { status: "success"; data: string } : { status: "error"; message: string };
  
    type SuccessResponse = ApiResponse<"success">; // Resulta em: { status: "success"; data: string }
  
    type ErrorResponse = ApiResponse<"error">; // Resulta em: { status: "error"; message: string }
   
    


//Constraints

//Infer

//Distributive conditional types


interface Id{
id:number;
}

interface Name{
name:string;
}

type NameOrId<T extends string | number>= T extends number  ? Id : Name;


const user1 = createObject('Joao');

const user2 = createObject(1);


function createObject<T extends string | number>(identificacao:T):NameOrId<T>{
    if(typeof identificacao === 'string'){
        return {name: identificacao} as NameOrId<T>;
    }
    else{
        return {id:identificacao} as NameOrId<T>;
    }
}







