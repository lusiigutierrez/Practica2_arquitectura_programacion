type Libro = {
    id: number,
    title: string,
    author: string,
    pages: number,
    genre: string
}

const biblioteca : Libro [] = []; 

function CrearLibro (){
    // lo que hago es crear un id unico para cada libro nuevo. 
    const id = biblioteca.reduce((acumulador, libro) => {
        return Math.max(acumulador, libro.id);
      }, 0) + 1;
    const title = String (prompt("Introduce el titulo del libro:"));
    const author =String (prompt("Introduce el nombre del autor:"));
    const pages = Number (prompt("Introduce el numero de paginas que tiene el libro:"));
    const genre = String (prompt("Introduce el genero del libro:"));
    const libros: Libro = {id,title,author,pages,genre}; 
    biblioteca.push(libros); 
}

// imprime los libros con todos sus atributos  que tengan ese genero 
function FiltrarLibroGenero(){
    // uso el .filter ya que quiero filtrar los libros que tienen el genero que se pide 
    const filtrar = prompt("Introduce el genero que quiere filtrar:");
    biblioteca.filter((Libro) => {
        if (Libro.genre === filtrar){
            console.log(Libro) // console.log(Libro.title) aqui solo imprime el titulo
        }
    })
}

function BorrarLibro (){
    const borrar = Number(prompt("Introduce el id del libro que quieres borrar:"));
    const indice = biblioteca.findIndex((libro) => libro.id === borrar); 
    if (indice !== -1) {
      const libroBorrado = biblioteca.splice(indice, 1)[0]; // uso el .splice porque se usa para borrar 
}
}

// Menu 
while (true) {
  console.log("1 - Crear libro")
  console.log("2 - Filtrar libro por género")
  console.log("3 - Borrar libro")
  console.log("4 - Salir")
  const respuesta = prompt("Que quieres hacer?");
    if (respuesta === "4") {
      break; 
    }
    if (respuesta === "1"){CrearLibro()}
    if (respuesta === "2"){FiltrarLibroGenero()}
    if (respuesta === "3"){BorrarLibro()}
    
}
  
    
  

   





