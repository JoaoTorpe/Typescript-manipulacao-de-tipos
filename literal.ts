//Estrutura base

type hello = "Hello"

const greeting: hello = "Hello"
const greeting2: hello = "Hi" // Tipo 'Hi' não pode ser do tipo 'Hello'


//Utilizando junto com union types
type Size = "small" | "medium" | "large";
type ButtonVariant = `btn-${Size}`; // "btn-small" | "btn-medium" | "btn-large"

const btn1: ButtonVariant = "btn-small";
const btn2: ButtonVariant = "btn-huge";   //"huge" não está definido


//Exemplo 01 criando nome para arquivos
type FileType = "jpg" | "png" | "gif" ;
type FileName = `${string}.${FileType}`;

const file1: FileName = "image.jpg"; // Válido
const file2: FileName = "image.pdf"; //Erro, 'pdf' não é uma extensão válida


//Exemplo 02 url dinâmica
type ApiVersion = "v1" | "v2";
type ApiEndpoint = `/users/send/${ApiVersion}`;

const endpoint: ApiEndpoint = "/users/send/v1"; //Válido

const invalidEndpoint: ApiEndpoint = "/users/send/v3"; //corresponde ao formato
