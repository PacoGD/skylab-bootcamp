//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.

function sayHello(myName){
    console.log("Hello " + myName);
}

sayHello("Paco");

//b) Intenta retornar los valores en lugar de usar console.log

function sayHello(myName){
    return "Hello " + myName;
    
}
sayHello("Paco");

//c) Ahora, añade tu edad y concaténala al return

function sayHello(myName,Age){
	  
   return ("Hello " + myName) + (", you are "+ Age +  " years old.");
    
 }
 
sayHello("Paco",28);

//d) Iguala tu función a una variable y ejecútala

var yourAge = sayHello("Paco", 28);

//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos 
//resultados concatenados

function sayHello(myName){
    return myName;
    
}
var hola = sayHello("Paco");

function age(n1){
	return n1
}

var edad = age(28);

function imprimir(){
	return ("Hello " + hola) + (", you are "+ edad +  " years old.");
}

imprimir();

//e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.
var edad = age(28);
var hola = sayHello("Paco");

function sayHello(myName){
    return myName;    
}

function random10(){
	return Math.round(Math.random()*10);

}
function age(n1){
	var getRandom = random10();
	return n1 + getRandom
}

function imprimir(){
	console.log (("Hello " + hola) + (", you are "+ edad +  " years old."));
}

imprimir();

//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

var edad = age(28);
var hola = sayHello("Paco");

function imprimir(){
	function sayHello(myName){
    	return myName;    
	}

	function random10(){
		return Math.round(Math.random()*10);

	}
	function age(n1){
		var getRandom = random10();
		return n1 + getRandom
	}


	console.log (("Hello " + hola) + (", you are "+ edad +  " years old."));
}

imprimir();

//g) Intenta englobar todas las funciones en una sola funcion padre, el return de 
//dicha función padre deberá ser la llamada a las funciones hijas

var edad = age(28);
var hola = sayHello("Paco");

function imprimir(){
	function sayHello(myName){
    	return myName;    
	}

	function random10(){
		return Math.round(Math.random()*10);

	}
	function age(n1){
		var getRandom = random10();
		return n1 + getRandom
	}


	console.log (("Hello " + hola) + (", you are "+ edad +  " years old."));
}

imprimir();

//h) Haz otra función hija que solo devuelva un número random, ese número random será el 
//argumento que se pasará como parámetro a la función age()


var hola = sayHello("Paco");

function imprimir(){
	var edad = edadRandom();

	function sayHello(myName){
    	return myName;    
	}

	function random10(){
		return Math.round(Math.random()*10);

	}
	function edadRandom(){
		return (Math.random());
	}
	function age(n1){
		var getRandom = random10();
		return edad + getRandom
	}


	console.log (("Hello " + hola) + (", you are "+ edad +  " years old."));
}

imprimir();

//i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50

var hola = sayHello("Paco");

function imprimir(){
	var edad = edadRandom();

	function sayHello(myName){
    	return myName;    
	}

	function random10(){
		return Math.round(Math.random()*50);

	}
	function edadRandom(){
		return Math.round(Math.random()*10);
	}
	function age(n1){
		var getRandom = random10();
		return n1 + getRandom
	}


	console.log (("Hello " + hola) + (", you are "+ edad +  " years old."));
}

imprimir();