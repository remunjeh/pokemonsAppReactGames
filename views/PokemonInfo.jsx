import { useParams } from "react-router-dom";

function PokemonInfo() {
  const { id } = useParams();

  if (id === "8") {
    return <p>Hello Wartortle</p>
  }

  return (
    <>
      <div>We are in the pokemon info</div>
      <p>This specific pokemon has this id: {id}</p>
    </>
  );
}

export default PokemonInfo;