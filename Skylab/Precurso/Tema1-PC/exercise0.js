// a/ Declara tu nombre y muéstralo por consola:

function showname(name) {
	console.log (name);
}
showname("Paco");

//b) Declara tu edad y muéstralo por consola:

function showAge(Age) {
	console.log (Age);
}
showAge("28");

//c) Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muéstrala por consola:
//ESTA MAL!!

function showInfo(Info){
	console.log (info);
}
showInfo = ["Paco","Gala","28"];

//d) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:

function showData(data){
	console.log (data);
}
showData = {name:"Paco", age:28};//Al declarar showData(), cuando es un objeto esta bien declarado como lo he hecho?

//e) Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.

var showInfo = ["Paco","Gala","28"];
for (var i = 0; i < showInfo.length ; i+=1) {
  console.log(showInfo[i]);
}

//f) Crea una estructura condicional que imprima el número mayor entre dos números.

var a = 25
var b = 12
if( a < b) {

	console.log(b);
} else {

	console.log(a);
}

//f1) Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:

var a = 25
var b = 12
if( a < b) {

	console.log(b);
} else if (b< a){

	console.log(a);
} else if (a=b){
	console.log("The numbers are equal");
}

//g) Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje 'We are in the middle of loop'.
//Esta mal, porque no para el loop
var showInfo = [1,2,3,4,5];
for (var i = 1; i < showInfo.length; i+=1) {
  if(i=3){

  	console.log("We are in the middle of loop")
  }
}

//g1) Declara tu nombre y tu edad dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error
//Esta mal, por qué?
var myName = ["Paco"];
var myAge = ["28"];
var oneThing = ["Paco"];
var otherThing = ["28"];

if (oneThing != myName && otherThing != myAge){

	console.log("this is not you");
} else{

	console.log("Hi!! Glad to see u again!");
}

//g2) Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.

//Esta mal, por qué? Es por el array? "length solo sirve para strings?"
var showInfo = ["Paco","alcachofa","Gala", "7","28", "skylab"];

for (var i=0; i< showInfo.length; i+=1){

	If (showInfo[i] = Gala){

		console.log("We find your data!" + showInfo[i]);
	}
}

