import React from "react";
import { useSelector } from "react-redux";
import { showPokemonSelector } from "../../Pokemons/Structure/Pokemons.reducer";
import PokemonInfo from "../../PokemonInfo/UI/PokemonInfo";
import { Col } from "react-bootstrap";

const Description: React.FunctionComponent = () => {
  const pokemonData = useSelector(showPokemonSelector);

  return (
    <Col sm={8} className="m-0 p-0">
      <PokemonInfo data={pokemonData} />
    </Col>
  );
};

export default Description;
