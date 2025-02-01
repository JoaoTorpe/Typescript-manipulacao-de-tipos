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

console.log(result)//its true


//É utilizado para limitar os tipos que serão passados para o tipo genérico
type isString<T> = T extends string ? "Yes" : "No";
type result1 = isString<"String">//Yes
type result2 = isString<10>//No

//Exemplo 
type ApiResponse<T extends "success" | "error"> = T extends "success" ? { status: "success"; data: string } : { status: "error"; message: string };

type SuccessResponse = ApiResponse<"success">; // Resulta em: { status: "success"; data: string }

type ErrorResponse = ApiResponse<"error">; // Resulta em: { status: "error"; message: string }


const successResponse: SuccessResponse = {
    status: "success",
    data: "This is the response data",
};

const errorResponse: ErrorResponse = {
    status: "error",
    message: "Something went wrong",
};


















