//Mapped Types 
//Ser para criar tipos a partir de tipos já existentes

//Estrutura básica
interface NewType{}

type MappedType<Type> = {
    [Property in keyof Type]: NewType;
};

//Exemplo 01 deixando todas as propriedades como opcionais

type User = {
    name: string;
    age: number;
}

type PartialUser = {
    [Property in keyof User]?: User[Property];
};

// type PartialUser ={
//     name?: string;
//     age?: number;
// }


//Exemplo 02 deixando todas as propriedades como read-only

type dataType ={
    response:string,
    status:number,
}
let data: dataType = {
    response:"ok",
    status:200
}
console.log(data)// { response: 'ok', status: 200 }

type makeReadOnly<T> = {
    readonly [P in keyof T] : T[P]
} 

let anotherData: makeReadOnly<dataType>={
    response:"Created",
    status:201
}


//Exemplo 03 removendo propriedade especifica

type RemoveIdField<Type> = {
    [Property in keyof Type as Exclude<Property, "id">]: Type[Property]
};

interface Car {
    id: number;
    year: number;
    brand:string
}


let car : Car ={
     id:1,
     year:2020,
     brand:"Toyota"
}

console.log(car) // { id: 1, year: 2020, brand: 'Toyota' }

type CarWithoutId = RemoveIdField<Car>;

let carWithoutId: CarWithoutId ={
    year:2020,
    brand:"Toyota"
}

console.log(carWithoutId) // { year: 2020, brand: 'Toyota' }






