//Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, 
//resta, multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho 
//(En caso de que hubieran). El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca cualquier 
//cosa que no sean números.

//Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, 
//volverá a mostrar las 4 operaciones de siempre.
//Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
//Hint_ => results = [num1 + num2 = resultSum, num1-num2 = resultRest ....]

//var num = 3.45;

//num pasar a string y buscar el .




//

var num1 = 10;
var num2 = 5;

function calculator(n1,n2){
	function checkParameters(n){
		if(typeof n1 !== 'number'|| typeof n2 !== 'number'){
		console.log('Esto no es numero >:(');
	}else{
		function doOperations(n1,n2){
		var sum = num1 + num2;
		var rest = num1 - num2;
		var mult = num1 * num2;
		var div = num1 / num2;
	
	}
		doOperations(n1,n2);
	
	
	}
}
}
calculator(num1,num2);



function checkNumbers(num){

	if(typeof num !== 'number'){
		console.log('esto no es numero >:(')
	}else{
		console.log('its a number!')
	}
}

checkNumbers(2)
checkNumbers(4)
checkNumbers("pepe")
checkNumbers("")
checkNumbers(0)


function checkParameters(n1,n2){
	if(typeof n1 !== 'number'|| typeof n2 !== 'number'){
	console.log('Esto no es número >:(');

	}
}

checkParameters("","");


//////////////////////////////////////////////////////////////////////////////////
function calculator(n1, n2){
	function sum(num1, num2){
		return num1+num2
	}

	function subs(num1, num2){
		return num1-num2
	}

    function mult(num1, num2){
		return num1*num2
    }

    function div(num1, num2){
		return num1/num2
	}

	function checkParams(){
		if(typeof n1 !== 'number' || typeof n2 !== 'number'){
			if(typeof n1 === 'number' && typeof n2 === 'undefined'){
				return Math.sqrt(n1)
			}else{
				return 'Caution!'
			}
		}else{
			return [sum(n1,n2), subs(n1,n2), mult(n1, n2), div(n1,n2)]
		}
	}

	
	return checkParams()
}

var arrOfResults = calculator(4, 2) // ✅
console.log(arrOfResults)
console.log(calculator(4)) // ✅
console.log(calculator("¿?")) // ✅
console.log(calculator("¿?", "sdsdc")) // ✅
console.log(calculator(0, 0)) // ✅