//Mapped Types 
//Ser para criar tipos a partir de tipos já existentes

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

type dataType = {
    response: string,
    status: number,
}
let data: dataType = {
    response: "ok",
    status: 200
}
console.log(data)// { response: 'ok', status: 200 }

data.response = "Created"
data.status = 201

type makeReadOnly<T> = {
    readonly [P in keyof T]: T[P]
}

let anotherData: makeReadOnly<dataType> = {
    response: "Created",
    status: 201
}

anotherData.response = "ok"
anotherData.status = 200

//Exemplo 03 removendo propriedade especifica
type RemovePlateField<Type> = {
    [Property in keyof Type as Exclude<Property, "plate">]: Type[Property]
};

interface Car {
    id: number;
    year: number;
    brand: string,
    plate: string
}


let car: Car = {
    id: 1,
    year: 2020,
    brand: "Toyota",
    plate: "ABC-1234"
}

console.log(car) // { id: 1, year: 2020, brand: 'Toyota', plate: 'ABC-1234' }

type CarWithoutPlate = RemovePlateField<Car>;

let carWithoutPlate: CarWithoutPlate = {
    id:1,    
    year: 2020,
    brand: "Toyota"
}

console.log(carWithoutPlate) // { id: 1, year: 2020, brand: 'Toyota' }






