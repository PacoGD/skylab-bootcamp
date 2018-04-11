//Comenzar por una versión muy pequeña y básica nos hará tener un programa de principio a fin, es decir, que empieza, 
//que acaba y haga lo que queramos a muy pequeña escala, una vez lo tengamos todo bien dividido podremos empezar a extenderlo 
//tanto como queramos.

//Si funciona con 5 números deberá funcionar con 15, no? 😁

//Requisitos de la versión mínima:
//Cartón con solo 5 números, sin necesidad de ser generados random. Solo necesitamos un número random cuando recorramos 
//el cartón y veamos si hay alguna coincidencia. No necesitamos asegurarnos que el número random de cada turno no haya salido 
//en turnos anteriores, recuerda que estamos en la mínima versión posible, eso ya lo solucionaremos. Si hay coincidencia, 
//remplazaremos el número por una 'x' y mostramos el cartón modificado

//Sepáralo todo en funciones, englobado en una funcion global llamada bingo(), tal que:

//-Function! => Generar Numero Random Bombo

//-Function! => Nuevo turno (Match carton[i] === randomNum)

//-Function! => Preguntar Nuevo Turno

var carton = [4,2,3,1,5];
var n5 = random5();
var cartonBingo = ["x","x","x","x","x"];

function random5(){
		return Math.round((Math.random()*5)+1);
	}

function seeCarton(num) {
           count = 0;
           var num = getNumber();
           console.log(‘The new number is ’ + num)

           for (var i = 0; i < carton.length; i++) {
               if (carton[i] === num) {
                   carton.splice(i, 1, ‘X’);
               }
           }
           
           console.log(carton)

                for (var i = 0; i < carton.length; i++) {
                    if (carton[i] === ‘X’) {
                        count++;
                    }
                }
                
                if (count === 5) {
                    alert(‘FIN’)
                }
                else {
                    askNewTurn()
                }
       }


//////////////////////////////////////////////////////////////

function welcome() {
	var user = prompt('Cual es tu nombre?')
    console.log( "Bienvenido "+ user);
}
welcome();
function continuar(){
	var pep = confirm("Pulsa")

}



var pep = continuar();
function seguimosBingo {

	If (pep===true){

		console.log("Bienvendio al bingo")
	} else {
		console.log("Fin del juego")
	}
}

seguimosBingo();


/////////////////////////////////////////////

function bingo() {

       var carton = [];

       function getCarton() {
           while (carton.length < 5) {
               carton.push(Math.round(Math.random() * 9) + 1)
           }
           console.log(carton)
       }

       function getNumber() {
           return Math.round((Math.random() * 9) + 1)
       }

       function check(num) {
           count = 0;
           var num = getNumber();
           console.log(‘The new number is ’ + num)

           for (var i = 0; i < carton.length; i++) {
               if (carton[i] === num) {
                   carton.splice(i, 1, ‘X’);
               }
           }
           
           console.log(carton)

                for (var i = 0; i < carton.length; i++) {
                    if (carton[i] === ‘X’) {
                        count++;
                    }
                }
                
                if (count === 5) {
                    alert(‘FIN’)
                }
                else {
                    askNewTurn()
                }
       }

       function askNewTurn() {
           var c = confirm(‘Sorry, no match for now. Do you want to get another number?’);
           if (c) {
               check();
           } else {
               return 0;
           }
       }
       getCarton()
       getNumber()
       check()
   }

bingo();


/* funciona pero:
- no debería decir ‘sorry no match’ cuando sí se ha remplazado el match con una X

Me gustaria hacer:
- QUE los numeros get random no se repitan
*/


function bingo() {
​
    var carton = [];
​
    function getCarton() {
      while (carton.length < 5) {
        carton.push(Math.round(Math.random() * 9) + 1)
      }
      console.log(carton)
    }
​
    function getNumber() {
      return Math.round((Math.random() * 9) + 1)
    }
​
    function check(num) {
      count = 0;
      var num = getNumber();
      console.log('The new number is ' + num)
​
      for (var i = 0; i < carton.length; i++) {
        if (carton[i] === num) {
          carton.splice(i, 1, 'X');
        }
      }
       
      console.log(carton)
​
	      for (var i = 0; i < carton.length; i++) {
	        if (carton[i] === 'X') {
	          count++;
	        }
	      }
	      
	      if (count === 5) {
	        alert('FIN')
	      }
	      else {
	        askNewTurn()
	      }
    }
​
    function askNewTurn() {
      var c = confirm('Sorry, no match for now. Do you want to get another number?');
      if (c) {
        check();
      } else {
        return 0; 
      }
    }
    getCarton()
    getNumber()
    check()
  }
​
bingo()
​
​
/* funciona pero:
- no debería decir 'sorry no match' cuando sí se ha remplazado el match con una X
​
Me gustaria hacer:
- QUE los numeros get random no se repitan
*/