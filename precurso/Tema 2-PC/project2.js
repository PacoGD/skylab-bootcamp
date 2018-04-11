//Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá de 10 vuelos para el dia 
//de hoy, para empezar, estos vuelos estarán declarados de manera global, cuando se llame a la función:

//Se preguntará por el nombre de usuario y dará la bienvenida.
//El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: 
//Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
//A continuación, el usuario verá el coste medio de los vuelos.
//También podrá ver cuantos vuelos efectúan escalas.
//Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.

var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]
//Se preguntará por el nombre de usuario y dará la bienvenida.
function welcome(name) {
    console.log( "Bienvenido "+ name);
}

welcome("Paco Gala");
//El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: 
//Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
flights.forEach(function(obj){
	console.log("El vuelo con origen: "+ obj.from + " y destino: "+ obj.to + " tiene un coste de " + obj.cost +"€ "
		+ function(obj.scale){

			If (obj.scale !== true){
				console.log(" y no realiza ninguna escala." )
				}else{
					console.log(" y realiza escala." )	
				}
			}
		}

		) 

})
//A continuación, el usuario verá el coste medio de los vuelos.
var acc = 0
flights.forEach(function(obj){
	acc = acc + obj.cost
})
var media = acc/flights.length

console.log("El coste medio de los vuelos es el siguiente: "+acc/flights.length+"€");
//También podrá ver cuantos vuelos efectúan escalas.
var acc2 = 0

flights.forEach(function(obj){
	If (obj.scale === true){
	acc2 = acc2 + obj.cost
	}else{
	acc2 = acc2 + 0
	}	
})

console.log("Tenemos "+ acc2+" vuelos con escala.");
//Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.

console.log("Los últimos vuelos del día son: ");

flights.forEach(function(obj){

	If (obj.id>05 && obj.id<09){
		console.log(obj.to)
	}
	
		}) 

//////////////////////////////////////////////////////////////////////////////

var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]
//Se preguntará por el nombre de usuario y dará la bienvenida.
function welcome() {
	var user = prompt('Cual es tu nombre?')
    console.log( "Bienvenido "+ user);
}
welcome();
//El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: 
//Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
flights.forEach(function(obj){
    console.log("El vuelo con origen: "+ obj.from + " y destino: "+ obj.to + " tiene un coste de " + obj.cost +"€ ")
            if (obj.scale !== true){
                console.log(" y no realiza ninguna escala." )
                }else{
                    console.log(" y realiza escala." )    
                }
            })
//A continuación, el usuario verá el coste medio de los vuelos.
var acc = 0
flights.forEach(function(obj){
    acc += obj.cost
})

var media = acc/flights.length
console.log("El coste medio de los vuelos es el siguiente: "+media+"€");
//También podrá ver cuantos vuelos efectúan escalas.
var acc2 = 0
flights.forEach(function(obj){
    if (obj.scale === true){
    	acc2++
    }   
})
console.log("Tenemos "+ acc2+" vuelos con escala.");
//Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
console.log("Los últimos vuelos del día son: ");
flights.forEach(function(obj){
    if (obj.id>05 && obj.id<09){
        console.log(obj.to)
    }
}) 

