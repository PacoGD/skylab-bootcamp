//a) Puedes contar cuantas letras tiene tu nombre?

var myName = "Paco";
console.log("My Name has " + myName.length + " letters");

// Esta forma es incorrecta, por qué?

function showLetters(name) {
	console.log("My Name has " + name.length + " letters");
}
showLetters("Paco");

//b) Añade tu apellido e indica en que posición se encuentra

function showFirstName(name) {
	console.log("Your first last name starts on position " + name.indexOf("G"));
}
showFirstName("Paco Gala");

//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.

function showName(name) {
	console.log("My Name is " + name.substring(0,4));
}
showName("Paco Gala");

//d) Ahora, solo tu apellido.

function showSurName(name) {
	console.log("My Name is " + name.substring(5,9));
}
showSurName("Paco Gala");

//d1) Iguala el resultado a una variable nueva e imprímela por pantalla.

function showSurName(name) {
	var surName=name.substring(5,9)
	
	console.log( name +", " + surName);
}
showSurName("Paco Gala");

//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.

function showSurName(name) {
	var surName=name.substring(5,9);
	var name = "Mr. ";
	console.log( "Hello"+", "+ name  + surName);
}
showSurName("Paco Gala");

//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

function showSurName(name) {
	console.log("My lastname is " + name.substring(5,9).toUpperCase());
}
showSurName("Paco Gala");

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.

var name = "Paco";
var howIs = name + " is awesome";
console.log(howIs);

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?

function showInitials(name) {
	console.log(name.charAt(0)+". " + name.charAt(5)+". ");
}
showInitials("Paco Gala");

//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

var myNameComplet = "PACOGALA";
var myName = myNameComplet.split("");
function showCapitalLetters(name) {
   
		console.log(name.join("/"));
   
	
}
showCapitalLetters(myName);

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

var myNameComplet = "PACOGALA";
var myName = myNameComplet.split("");
var surName = myName.slice(4,8);
function showCapitalLetters(name) {
       
		console.log(name.join("|"));
   
	
}
showCapitalLetters(surName);

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)

var myNameComplet = "PACOGALA";
var myName = myNameComplet.split("");
var surName = myName.slice(0,4);
function showCapitalLetters(name) {
       
		for(i=0;i<name.length;i++)

		console.log((i+1)+"º "+name[i]);
	
}
showCapitalLetters(surName);

//d)Como en el ejercicio anterior, pero seleccionando tu apellido

var myNameComplet = "PACOGALA";
var myName = myNameComplet.split("");
var surName = myName.slice(4,8);
function showCapitalLetters(name) {
       
		for(i=0;i<name.length;i++)

		console.log((i+5)+"º "+name[i]);
	
}
showCapitalLetters(surName);

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings

var myNameComplet = "PACOGALA";
var myName = myNameComplet.split("");

function showInitials(name) {
	console.log(name[0]+". " + name[4]+". ");
}
showInitials(myName);

//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

var mySelector = ["Paco","Gala",28];

function nameAge (name){

	console.log("My name is "+name[0]+  " and i'm "+name[2]+  " years old");
}
nameAge(mySelector);

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

var mySelector = ["Paco","Gala","28"];
var mewArray = mySelector.push("Cornella de Llobregat");

function nameAge (name){

	console.log("City added to array! => "+ name.join(", "));
}
nameAge(mySelector);

//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

var mySelector = ["Paco","Gala","28","Cornella de Llobregat"];


function nameAge (name){

	console.log("City added to array! => "+ name.join(", "));
	var mewArray = mySelector.pop();
	console.log("City deleted! => "+name.join(", "));

}
nameAge(mySelector);

//j) Ahora, elimina el nombre y asegura los cambios

var mySelector = ["Paco","Gala","28"];
var deletedName = mySelector.shift();

console.log(mySelector);

//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?


var mySelector = ["Gala","28"];
var nuevaLongitud = mySelector.unshift("Paco");

console.log(mySelector);

//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

var numbers = [0,1,2,3,4,5,6,7,8,9,10];
var numbersX2  = numbers.map(function(num) {
  return num * 2;
});
console.log(numbersX2);

//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

var multiplicador = 3;
var numbers = [0,1,2,3,4,5,6,7,8,9,10];
var numbersX2  = numbers.map(function(num) {
  return num * multiplicador;
});
console.log(numbersX2);

//m) Podrías mostrarlos en el orden inverso?

var numbers = [0,1,2,3,4,5,6,7,8,9,10];
var unNumbers = numbers.reverse();
console.log(unNumbers);

//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?
//Esta mal, como se hace?

var myNameComplet = "PACOGALA";


//n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras
//Esta mal, como se hace?

var myNameComplet = "PACOGALA";

//a) Que hora es? Declara la hora como número y devuelvela como String

var num = 10.45;
var n = num.toString();

console.log("I'ts "+ n + " of morning");

//b) Nono, que hora exactamente? Dime la hora sin minutos
//Esta mal¿?
var num = 10.45;
var n = num.toString()-0.45;

console.log("It's around " + n + " of morning");

//c) Ahora, declara tu hora y muéstrala redondeada.

console.log(Math.round(10.34));

//d) Hagamos una calculadora. Primero, la suma.

var a = 7;
var b = 3;
var result = a+b;

function sum (result){
	console.log("The sum of " + a +" + "+ b +" is " + result);
}
sum(result);

//d1) Añade la resta...

var a = 7;
var b = 3;
var result1 = a+b;
var result2 = a-b;

function sumRest (result1,result2){
	console.log("The sum and rest of "+a+ " and " +b+ " is " + result1 +" and "+result2);
}
sumRest(result1,result2);

//d2) Y la multiplicación

var a = 7;
var b = 3;
var result1 = a+b;
var result2 = a-b;
var result3 = a*b;

function sumRestMult (result1,result2,result3){
	console.log(result1+", "+ result2+" and "+result3);
}
sumRestMult(result1,result2,result3);

//d3) Por ultimo, la división

var a = 7;
var b = 3;
var result1 = a+b;
var result2 = a-b;
var result3 = a*b;
var result4 = a/b;

function sumRestMult (result1,result2,result3,result4){
	console.log(result1+", "+ result2+", "+ result3+" and "+result4.toFixed(1));
}
sumRestMult(result1,result2,result3,result4);

//d4) Ahora, intenta multiplicar un número por una string, que devuelve?

var a = 10;
var b = "hours";
var result = a*b;

console.log(result);

//e) Podemos controlar este error con un condicional if?
//Esta mal

var a = 10;
var b = "hours";
var result = a*b;

function errorMulti (result){

	If ( isNaN(result)){

	console.log(result);
	} else{

		console.log("You can't do this operation!");
	}
}

errorMulti(result);