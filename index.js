/*questao01
let frase = prompt("Entre a primeira frase");
console.log(frase);
console.log(typeof(frase))*/
/*questao02
let string = "123";
console.log(typeof Number(string));
let number = 321;
console.log(typeof String(number))*/
/*questao03
//input para resultados
let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");

let resultado = Number(numero1) + Number(numero2);
console.log(resultado)*/
/*questao04
let string1 = "Estudar ";
let string2 = "é bom!";
console.log(string1 + string2);

let numero3 = 48;
console.log(string1 + string2 + " " + numero3)*/
/*questao05
let nomeUsuario = prompt("Digite seu nome: ");
console.log("Olá! Seja Bem-vindo(a) " + nomeUsuario + ".")*/
/*questao06
let idadeUsuario = prompt("Informe sua idade: ");
console.log(typeof Number(idadeUsuario))*/
/*questao07
const numero = prompt("Digite um número:");
if(numero !== null) {
    parseFloat(numero);
}*/
/*questao08
let primeiroNumint = prompt("Digite um número inteiro:");
let segundoNumint = prompt("Digite outro número inteiro:");
let resultado = Number(primeiroNumint) + Number(segundoNumint);
console.log(resultado)*/
/*questao09
let numDecimal = prompt("Digite um número decimal: ");
let quadradoNumdecimal = Number(numDecimal) **2;
console.log(quadradoNumdecimal)*/
/*questao10
let anoNascimento = Number(prompt("Informe seu ano de nascimento:"));
let anoAtual = 2024;
let idade = anoAtual - anoNascimento;
console.log(idade)*/
/*questao11
function getFullName() {
    const firstName = prompt("Digite seu primeiro nome:");
    const lastName = prompt("Digite seu sobrenome:");
    const fullName = `${firstName} ${lastName}`;
    console.log(`Nome completo: ${fullName}`)
}*/
/*questao12
function countNumbers() {
    const numbers = prompt("Digite uma sequência de números separados por espaço:").split(' ');
    console.log(`Você digitou ${numbers.length} números.`)*/
/*questao13
let animal = prompt("Digite o nome de um animal: ");
alert("O animal digitado foi" + animal)*/
/*questao14
function getInvertedName() {
    const firstName = prompt("Digite seu primeiro nome:");
    const lastName = prompt("Digite seu sobrenome:");
    const invertedName = `${lastName}, ${firstName}`;
    console.log(`Nome completo invertido: ${invertedName}`)
}*/
/*questao15
let frase = prompt("Digite uma frase:");
let tamanhoFrase = frase.length;
console.log('tamanhoFrase: ', typeof(tamanhoFrase));
console.log('A frase tem ${tamanhoFrase} caracteres')*/
/*questao16
function checkEvenOdd() {
    const num = parseInt(prompt("Digite um número inteiro:"));
    const result = num % 2 === 0 ? "par" : "ímpar";
    console.log(`O número ${num} é ${result}.`);
}*/
/*questao17
let numero = Number(prompt("Digite um número inteiro positivo ou negativo:"));
if(numero > 0) {
    console.log("Número positivo.");
} else {
    console.log("Número negativo.")
}*/
/*questao18
function getLargerNumber() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const larger = num1 > num2 ? num1 : num2;
    console.log(`O maior número é: ${larger}`);
}*/
/*questao19
let peso = Number(prompt("Digite o seu peso: "));
let altura = Number(prompt("Digite sua altura: "));
let imc: number = peso/(altura**2);
console.log("O seu IMC é " + imc)*/
/*questao20
function checkNameLength() {
    const name = prompt("Digite seu nome:");
    const hasMoreThanFiveChars = name.length > 5;
    console.log(`Seu nome ${hasMoreThanFiveChars ? "tem" : "não tem"} mais de 5 caracteres.`);
}*/
/*questao21
let estadoCivil = prompt(`Qual é o seu estado civil?
  a) Solteiro(a)
  b) Casado(a)
  c) Viúvo(a)`
);

if (estadoCivil === 'a' || estadoCivil === 'A'){
  alert('Você é solteiro aproveite a vida!');

} else if (estadoCivil === 'b' || estadoCivil === 'B'){
  alert('Você é casado, tá lascado!');

} else if (estadoCivil === 'c' || estadoCivil === 'C'){
  alert('Você é viúvo, vê se não vai errar denovo!')

} else {
  alert('Digite somente uma das opções.')

}*/
/*questao22
function calculateRectangleArea() {
    const base = parseFloat(prompt("Digite a base do retângulo:"));
    const height = parseFloat(prompt("Digite a altura do retângulo:"));
    const area = base * height;
    console.log(`A área do retângulo é: ${area}`);
}*/
/*questao23
let cidade = prompt('Digite o nome de uma cidade: ');
let primeiraLetra = cidade[0];
console.log(`A primeira letra da cidade digitada é: ${primeiraLetra}`)*/
/*questao24
function calculateRemainder() {
    const num1 = parseFloat(prompt("Digite o primeiro número decimal:"));
    const num2 = parseFloat(prompt("Digite o segundo número decimal:"));
    const remainder = num1 % num2;
    console.log(`O resto da divisão é: ${remainder}`);
}*/
/*questao25
let decimal = Number(prompt('Digite um número decimal'));
let inteiro = Math.round(decimal);
alert(inteiro)*/
/*questao26
function addTenToStringNumber() {
    const numString = prompt("Digite um número inteiro:");
    const num = parseInt(numString);
    const result = num + 10;
    console.log(`O resultado é: ${result.toString()}`);
}*/
/*questao27
const dataString: string = prompt("Digite uma data no formato dd/mm/aaaa: ");

// Validar se data esta correta
if (dataString.length !== 10 || dataString[2] !== "/" || dataString[5] !== "/") {
  console.error("Erro: Formato de data inválido.");
  
}

// Separar os componentes da data em um array
const dataComponentes: string[] = dataString.split("/");
console.log(dataComponentes);

const dia: number = parseInt(dataComponentes[0]);
const mes: number = parseInt(dataComponentes[1]);
const ano: number = parseInt(dataComponentes[2]);
console.log(dia + ' ' + typeof(dia));
console.log(mes + ' ' + typeof(mes));
console.log(ano + ' ' + typeof(ano));*/
/*questao28
function getCityStateMessage() {
    const city = prompt("Digite o nome da cidade:");
    const state = prompt("Digite o nome do estado:");
    console.log(`Você mora em ${city}, ${state}.`);
}*/
/*questao29
const anoNascimento = prompt("Digite o ano do seu nascimento com 4 dígitos: ")
const salute = `Bem vindo ao nosso programa, nascido em ${anoNascimento}`;
console.log(salute)*/
/*questao30
function concatNumberAndString() {
    const num = parseInt(prompt("Digite um número inteiro:"));
    const str = prompt("Digite uma string:");
    const result = `${num} ${str}`;
    console.log(`Resultado: ${result}`);
}*/
/*questao31
const nomeDoProduto = prompt('Digite o nome um produto: ')
const precoDoProduto: string = '15,10';
const produtoTotal: string = nomeDoProduto + ' R$ '+ precoDoProduto

console.log(produtoTotal)*/
/*questao32
function doubleNumber() {
    const num = parseInt(prompt("Digite um número inteiro:"));
    const double = num * 2;
    console.log(`O dobro de ${num} é ${double}.`);
}*/
/*questao33
const email = prompt('Cadastre o seu email: ');
const saudacao: string = 'Boas vindas!';

const emailConcatenado = `email ${email} cadastradado com sucesso!`;
console.log(emailConcatenado)*/
/*questao34
function arithmeticOperations() {
    const num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    const num2 = parseInt(prompt("Digite o segundo número inteiro:"));
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = Math.floor(num1 / num2);
    console.log(`Soma: ${sum}, Diferença: ${difference}, Produto: ${product}, Quociente: ${quotient}`);
}*/
/*questao35
const base = Number(prompt('Digite um valor para base do triângulo: '));
const altura1 = Number(prompt("Digite uma valor para a altura do triângulo: "));
const areaDoTriangulo = (base*altura1)/2;
console.log(areaDoTriangulo)*/
/*questao36
function calculateCircumferencePerimeter() {
    const radius = parseFloat(prompt("Digite o raio da circunferência:"));
    const perimeter = 2 * Math.PI * radius;
    console.log(`O perímetro da circunferência é: ${perimeter}`);
}*/
/*questao37
const base2 = Number(prompt("Digite a base do triângulo: "));
const altura2 = Number(prompt("Digite a altura do triangulo: "));

// Para triangulo retângulo
const hipotenusa2 = Math.sqrt(Math.pow(base2, 2) + Math.pow(altura2, 2));
const perimetro2 = base2 + altura2 + hipotenusa2;
console.log('Triângulo retângulo: ', perimetro2);


// Para triângula isósceles
const ladosIguais = Math.sqrt(Math.pow(base2/2, 2) + Math.pow(altura2, 2));
const perimetro2__= 2 * ladosIguais + base2;
console.log('Triângulo isósceles: ', perimetro2__)*/
/*questao38
function calculateAverage() {
    const num1 = parseFloat(prompt("Digite o primeiro número decimal:"));
    const num2 = parseFloat(prompt("Digite o segundo número decimal:"));
    const num3 = parseFloat(prompt("Digite o terceiro número decimal:"));
    const average = (num1 + num2 + num3) / 3;
    console.log(`A média aritmética é: ${average}`);
}*/
/*questao39
let idade = Number(prompt("Digite a sua idade: "));
let meses = idade * 12;
let dias = 365 * idade;

console.log(`Você já viveu ${meses} meses.`);
console.log(`Você já viveu ${dias} dias.`)*/
/*questao40
function convertReaisToDollars() {
    const reais = parseFloat(prompt("Digite o valor em reais:"));
    const exchangeRate = parseFloat(prompt("Digite a cotação do dólar:"));
    const dollars = reais / exchangeRate;
    console.log(`O valor em dólares é: ${dollars}`);
}*/
/*questao41
const numeroDecimal2 = Number(prompt("Digite um número decimal: "));
const numeroInteiro = Math.round(numeroDecimal2);
console.log(numeroInteiro)*/
/*questao42
function calculateOperation() {
    const num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    const num2 = parseInt(prompt("Digite o segundo número inteiro:"));
    const num3 = parseInt(prompt("Digite o terceiro número inteiro:"));
    const result = (num1 + num2) * num3;
    console.log(`O resultado da operação (n1 + n2) * n3 é: ${result}`);
}*/
/*questao43
const celsius = Number(prompt("Digite uma temperatura em graus Celsius: "));
const Fahrenheit = ((celsius * 9/5) + 32);
console.log(Fahrenheit)*/ 
