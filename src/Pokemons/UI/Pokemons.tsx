import React, { useEffect } from "react";
import { getPokemons } from "../Application/Pokemons.business";
import { useAppSelector } from "../../app/hooks";
import { getPokemonsSelector } from "../Structure/Pokemons.reducer";
import logo from "../../assets/logos/pokemon-23.svg";
import { Col, InputGroup, Form, Figure, Row } from "react-bootstrap";
import PokemonCard from "../../PokemonCard/UI/PokemonCard";

//const defaultProps: IPokemonsList[] = [];
const Pokemons: React.FC = () => {
  const pokemons = useAppSelector(getPokemonsSelector);

  /*
  const pokemons = useAppSelector(getPokemonsSelector);
  const [pokemonsList, setPokemonsList]: [
    IPokemonsList[],
    (posts: IPokemonsList[]) => void
  ] = React.useState(defaultProps);
  const [search, setSearch]: [string, (search: string) => void] =
    React.useState("");

  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
    console.log("escribir", setSearch(e.target.value));
  };
*/
  useEffect(() => {
    getPokemons();
    console.log(getPokemons);
  }, []);

  return (
    <Col sm={8} className="m-0 p-0">
      <section className="text-center">
        <Figure className="text-center mt-4">
          <Figure.Image
            className="pokemon__logo"
            width={400}
            alt="pokemon logo"
            src={logo}
          />
        </Figure>
      </section>

      {/*      <section>
        <Row className="my-4 mx-5 justify-content-center">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Buscar pokémon ..."
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                console.log(e.target.value);
              }}
            />
          </InputGroup>
        </Row>
            </section>*/}

      <section>
        <Row className="row my-4 justify-content-center gap-md-2  gap-xl-0  ">
          {pokemons.map((pokemon, index) => (
            <Col className="py-2" xs={7} sm={7} md={5} xl={4} xxl={3}>
              <PokemonCard pokemon={pokemon} index={index + 1} key={index} />
            </Col>
          ))}
        </Row>
      </section>
    </Col>
  );
};

export default Pokemons;
