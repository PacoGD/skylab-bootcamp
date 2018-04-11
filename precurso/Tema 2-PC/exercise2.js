//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
}


for (prop in avenger){
	console.log(prop);
}

//b) Ahora, crea una función que liste solo los valores de las propiedades.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
}


for (prop in avenger){
	console.log(avenger[prop]);
}

//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
}
avenger.class = "XI"

console.log(avenger);

//d) Ahora, elimina la propiedad ID y asegura los cambios.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
}

delete avenger.id;
console.log(avenger);

//e) Añade una nueva propiedad, por ejemplo city y dale un valor.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
}

avenger.city = "New York City";

//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
}

avenger.city = "New York City";

console.log("City => " + avenger.city);

//f) Lista el número de propiedades que contiene el objeto.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
}
var count = 0
for (prop in avenger){
		count = count+1;
	}
	console.log(count);	

// Este ejercicio también se puede hacer

 Object.keys(avenger).length

//g) Cambia la propiedad name por fullName.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
}


avenger.fullName = avenger.name;
delete avenger.name;

console.log(avenger);

//h) Lista todas las propiedades del objeto a través de un console.log()

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
}

console.log(avenger.name,avenger.class,avenger.id);

//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
}

avenger.markAverage = 6;
avenger. country = "NYC";
avenger.job = "nini";
avenger.studies = "skylabcoders";

//h2) Asegura los cambios volviendo a listar los valores del objeto

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
}

avenger.markAverage = 6;
avenger. country = "NYC";
avenger.job = "nini";
avenger.studies = "skylabcoders";

for (prop in avenger){
	console.log(avenger[prop]);
}

//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del 
//objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)

function avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
console.log(tonyStark)

//j) Crea otro objeto y imprime sus propiedades por pantalla.

function avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
var hulk = new avenger ("Bruce Buner", "XX", "NYC", "Doctor", "Skylab", 20);
console.log(hulk);

//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property

    function avenger(fullName, classRoom, city, job, studies,markAv) {
        this.fullName = fullName;
        this.classRoom = classRoom;
        this.city = city;
        this.job = job;
        this.studies = studies;
        this.markAv = markAv;
        this.description = function(){
            console.log(this.fullName + ", " + this.city +", "+this.job+ ", "+this.studies+", "+this.markAv)
        }
    }
    var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
    tonyStark.description()

//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados

function avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10);
var hulk = new avenger ("Bruce Buner", "XX", "NYC", "Doctor", "Skylab", 20);
var viuda = new avenger ("Viuda Negra", "XI", "Barcelona", "Asesina", "La calle", 40);

var vengadores = [tonyStark, hulk, viuda];

vengadores.forEach(function(obj){
	console.log(obj.fullName);
})



//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo 
//liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.

function avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
var hulk = new avenger ("Bruce Buner", "XX"; "NYC", "Doctor", "Skylab", 20)
var viuda = new avenger ("Viuda Negra", "XI", "Barcelona", "Asesina", "La calle", 40)

var vengadores = [tonyStark, hulk, viuda];

vengadores.forEach(function(obj){
	console.log(obj.fullName);
})

