// declaration - function statement - declaração da função

function createPhrases() {
  console.log('Frase 01')
  console.log('Frase 02')
  console.log('Frase 03')
}

//execute, run, call, invoke - rodar a função
createPhrases()

//function expression - function anonymous
// arguments - parâmetros
const sum = function (number1, number2) {
  let total = number1 + number2
  return total
}

sum(5, 9) // arguments - argumentos

let number1 = 40
let number2 = 11

sum(number1, number2)

let total = 0;

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a  soma é ${sum(number1, number2)}`)

console.log(total)

// function scope
let subject = 'create video'

function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(createThink(subject))
console.log(subject)

// function hoisting

sayMyName()

function sayMyName() {
  console.log('Nildo')
}

// arrow function
// geralmente associada a constantes
const sayMyName2 = (name) => {
  console.log(name)
}

sayMyName2('Nilds')

// callback function
// passar uma função como argumento
function sayMyName3(name) {
  name()
}

sayMyName3(
  () => {
    console.log('teste callback')
  }
)

// Function() constructor

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + " está andando"
  }
}

const nildo = new Person('Nildo')
console.log(nildo)
console.log(nildo.walk())

// Protype


// Ambos fazem a alteração de um tipo de dados para o outro
// Type conversion (typecasting) - dev que faz


// Type coersion - javascript que faz

console.log('9' + '5')
console.log(Number('9') + 5)

// Manipulando Strings e Números

let string = '123'
console.log(Number(string))
let number01 = 321
console.log(String(number01))

let word = 'bananabananabanana'
console.log(word.length)
let number02 = '1234'
console.log(String(number02).length)

let number03 = 456468743.22468
console.log(number03.toFixed(2))
// .replace retorna uma string, por isso não se pode usar diretamente o replace em um number
console.log(number03.toFixed(2).replace('.', ','))
console.log(String(number03).replace('.', ','))

let word02 = 'bananaBananaBanana'
console.log(word02.toUpperCase())
console.log(word02.toLowerCase())

let phrase = "Bora bill e filho do bill"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join("")
console.log(phraseWithUnderscore)
let phraseWithUnderscore2 = myArray.join("_")
console.log(phraseWithUnderscore2.toLocaleLowerCase())

let billPhrase = "Bora bill e filho do bill e mulher do bill"
console.log(billPhrase.includes("bill"))

let myArray2 = new Array('a', 'b', 'c')
let myArray3 = new Array(10)
console.log(myArray2.length)

console.log([
  'a',
  { type: "array" },
  function () { return "alo" },
][2])

let word03 = "manipulacao"
console.log(Array.from(word03))

let techs = ["html", "css", "js"]

// adiciona no fim
techs.push("react js")
// adiciona no começo
techs.unshift("sql")
//remove do fim
//techs.pop()
// remove do começo
//techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
//remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1)
// encontrar a posição de um elemtno no rray
let index = techs.indexOf('css')
techs.splice(index, 1)
console.log(techs)

// Expressões e Operadores

//let 

// Estruturas de repetição
for (let i = 0; i < 10; i++) {
  console.log(i)
}

let i = 0
while (i < 10) {
  console.log(i)

  i++
}

// throw

function sayName(name = '') {
  if (name === '') {
    throw 'Insira um nome'
  }

  console.log('passou o throw')
  console.log(name)
}

// try ... catch

try {
  sayName('Nildo')
} catch (e) {
  console.log(e)
}

// for...of
// acessar dados dentros de arrays, loops ou estruturas
let name1 = "Nildo"

let name2 = ["Rafa", "Maico", "Tenorio"]

for (let char of name1) {
  console.log(char)
}
for (let name of name2) {
  console.log(name)
}

// for...in
// acessar propriedades dentro de objetos
let person1 = {
  name: 'Maico',
  age: 30,
  weight: 70.4
}

for (let property in person1) {
  console.log(property)
  console.log(person1[property])
}