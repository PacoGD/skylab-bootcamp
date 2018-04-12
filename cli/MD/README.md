
# Biblioteca comandos https://gist.github.com/LeCoupa/122b12050f5fb267e75f

- pwd (para saber que carpeta estamos)

- ls (listar lo que hay en la carpeta)

- clear (limpiar)

- mkdir (carpeta nueva, hay q poner el nombre de la carpeta a continuación ej. mkdir musica)

- cd (cambiar de carpeta o entrar)

- touch (crear un fichero) ej: touch README.md

- cat (para abrir un fichero md) ej: cat README.md

- mv (cambiar nombre del un fichero) ej:mv README.md helloworld.md

- rm (borrar un fichero) ej: rm helloworld.md

- echo (crear un fichero) echo"Hello, World!"> helloworld.md

- cd.. (cambir a la carpeta padre, carpeta anterior)

- rmdir -r (rm - r )(borrar un directorio y todo lo que hay dentro) otras veces rm -rf

- grep (grep -r . -e) (busca en los ficheros de la carpeta coincidencias entre ellas) ej: grep -r . -e 1

- mv (cambiar el nombre de una carpeta(lo mueve todo de una carpeta a otra)(para cambiar el nombre de la carpeta hay que ir a su padre) tambien lo podemos mover de un lado a otro ej:mv skylab-bootcamp-201804\ skylab-bootcampo-201804\

- tree (visualiza todas las carpetas en forma de "arbol")

- git checkout -b develop (generamos la rama develop que es donde trabajaremos nosotros(realmente es la base de desarrollo pero generaremos otra rama más para crear nuestro código))

- git checkout -b feature/initial-codebase (creamos la rama donde trabajaremos)

- git status nos dice en que rama estamos y si hemos modificado algo
- git diff, nos dice las linias que hemos modificado
- git log, historia de los commits hechos
- git add (añade los cambios a la linia(abre cajon)) git add -A
- git commit -m "add another exclamation mark"(cierra cajón)
https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf

https://ndpsoftware.com/git-cheatsheet.html#loc=workspace;

- git --version(inicializa el programa git)git init

![git imagen](https://qph.fs.quoracdn.net/main-qimg-d151c0543baa145e6252c1ec95199963)

touch "index.html" creamos un index con el touch

git diff enseña las diferencias

touch scripts/main.js (creamos un nuevo archivo dentro de la carpeta sin tener que hacer un cd y meternos en la carpeta simplemente poniendo la carpeta/)

git branch -d borra la rama ya hecha

git reset para resetear algun cambio inconsciente

git reset --hard HEAD (resetea hasta el ultimo commit)

git clone si le ponemos la url de github nos hará una copia en nuestro pc del archivo de github

git config --list 

git remote add upstream (https://github.com/manuelbarzi/skylab-bootcamp-201804) para refrescar despues de confirmar el pull request. Tenemos el upstream, nuestro fork, y la consola. con esto refrescaremos nuestra consola después de haber confirmado el pull request en upstream
git fetch upstream (lo que hace esto es bajarse todo lo que tenemos en el upstream(el archivo orginal una vez se ha hecho el pull request)pero todavía no lo ha subtituido)
git merge upstream/develop para pasar todo a el upstream que nos hemos bajado con los pasos anteriores, hacemos un merge en consola
git push para enviar los cambios a nuestro fork

Manual de git en español https://git-scm.com/book/es/v2

cp -R para copiar el contenido de una carpeta en otra

mv skylab\* el astedico nos mueve todo lo que haya dentro de la carpeta a la carpeta especificada

