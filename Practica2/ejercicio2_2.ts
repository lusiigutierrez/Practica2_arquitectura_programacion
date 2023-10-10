
type Pokemon = {

  name: string,
  id: number,
  types: tipo []

}

type tipo = {
    name: string

};
export interface types{
    slot: number,
    type: tipo
}

export interface held_itemas {
    id: number
}

export interface generation{
  name: string
}

type PokemonTipo = {
  name: string,
  generation: string
}

const numero = prompt("1 - Buscar un tipo  2 - Buscar un Pokemon");

if (numero === '1'){
const tipoPokemon= prompt("Introduce el tipo del pokemon:");
const fetchData = async () => {
    try {
      
      const url = new URL('https://pokeapi.co/api/v2/type/');
      url.pathname += tipoPokemon;

      const response = await fetch(url);
      
      const dataPokemonTipo: PokemonTipo = await response.json();
        console.log("---------------------------------")
        console.log("Tipo/tipos: ", dataPokemonTipo.name);
        console.log("Generacion: ", dataPokemonTipo.generation);
        
    } catch (error) {console.log(error);}
  };
  await fetchData();
}

if (numero === '2'){
  const nombrePokemon= prompt("Introduce el nombre del pokemon:");
  const fetchData = async () => {
    try {
     
      const url = new URL('https://pokeapi.co/api/v2/pokemon/');
      url.pathname += nombrePokemon;
      
      const response = await fetch(url);
    
      const dataPokemon: Pokemon = await response.json();
        console.log("---------------------------------")
        console.log("Nombre: ", dataPokemon.name);
        console.log("Tipo/tipos: ", dataPokemon.types);
        console.log("Id: ", dataPokemon.id);

    } catch (error) {console.log(error); }
  }; 
  await fetchData();
}