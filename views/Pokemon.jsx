import { Link } from "react-router-dom";

function Pokemon() {
  // id, pokemonName, image, type

  const pokemons = [
    {
      id: "1",
      pokemonName: "Bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      type: "plant",
    },
    {
      id: "2",
      pokemonName: "Ivysaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      type: "Grass, Poison",
    },
    {
      id: "3",
      pokemonName: "Venusaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      type: "Grass, Poison",
    },
    {
      id: "4",
      pokemonName: "Charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      type: "Fire",
    },
    {
      id: "5",
      pokemonName: "Charmeleon",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      type: "Fire",
    },
    {
      id: "6",
      pokemonName: "Charizard",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      type: "Fire, Flying",
    },
    {
      id: "7",
      pokemonName: "Squirtle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      type: "Water",
    },
    {
      id: "8",
      pokemonName: "Wartortle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      type: "Water",
    },
    {
      id: "9",
      pokemonName: "Blastoise",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      type: "Water",
    },
    {
      id: "10",
      pokemonName: "Caterpie",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      type: "Bug",
    },
    {
      id: "11",
      pokemonName: "Metapod",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      type: "Bug",
    },
    {
      id: "12",
      pokemonName: "Butterfree",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      type: "Bug, Flying",
    },
    {
      id: "13",
      pokemonName: "Weedle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
      type: "Bug, Poison",
    },
    {
      id: "14",
      pokemonName: "Kakuna",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
      type: "Bug, Poison",
    },
    {
      id: "15",
      pokemonName: "Beedrill",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
      type: "Bug, Poison",
    },
    {
      id: "16",
      pokemonName: "Pidgey",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      type: "Normal, Flying",
    },
    {
      id: "17",
      pokemonName: "Pidgeotto",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
      type: "Normal, Flying",
    },
    {
      id: "18",
      pokemonName: "Pidgeot",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
      type: "Normal, Flying",
    },
    {
      id: "19",
      pokemonName: "Rattata",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
      type: "Normal",
    },
    {
      id: "20",
      pokemonName: "Raticate",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
      type: "Normal",
    },
    {
      id: "21",
      pokemonName: "Spearow",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
      type: "Normal, Flying",
    },
    {
      id: "22",
      pokemonName: "Fearow",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
      type: "Normal, Flying",
    },
    {
      id: "23",
      pokemonName: "Ekans",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
      type: "Poison",
    },
    {
      id: "24",
      pokemonName: "Arbok",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
      type: "Poison",
    },
    {
      id: "25",
      pokemonName: "Pikachu",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      type: "Electric",
    },
    {
      id: "26",
      pokemonName: "Raichu",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
      type: "Electric",
    },
  ];
  console.log("hello from Pokemon");
  return (
    <div id="box-container">
      {pokemons.map((pokemon) => (
        // <Link id="box" to="/pokinfo" key={pokemon.id}>
        <Link id="box" to={`/pokinfo/${pokemon.id}`} key={pokemon.id}>
          <img src={pokemon.image} />
          <h2> {pokemon.pokemonName} </h2>
          <h3> {pokemon.type} </h3>
          <p> Number in the Pokedex: {pokemon.id} </p>
        </Link>
      ))}
    </div>
  );
}

export default Pokemon;