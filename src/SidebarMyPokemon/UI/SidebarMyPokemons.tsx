import React from "react";
import { Col, Row } from "react-bootstrap";
import "./SidebarMyPokemons.css";
import PokemonItem from "../../PokemonItem/UI/PokemonItem";
import { addPokemonsSelector } from "../../Pokemons/Structure/Pokemons.reducer";
import { useSelector } from "react-redux";

const SidebarMyPokemons: React.FunctionComponent = () => {
  const items = useSelector(addPokemonsSelector);
  console.log(items);

  return (
    <Col className="m-0 p-0 sidebar" sm={4}>
      {/* items == null ? () : ()*/}
      <section>
        <h2 className="sidebar__title text-center m-5 ">
          LISTOS PARA EL COMBATE
        </h2>
        {items.length !== 0 ? (
          <Row className="row my-4 justify-content-center gap-md-2  gap-xl-0  ">
            {items.map((elem, index) => (
              <PokemonItem data={elem} key={index} />
            ))}
          </Row>
        ) : (
          <p className="sidebar__paragraph text-center m-5 p-5 m-md-3 p-md-3 m-sm-1 p-sm-1">
            Lista vacía, no hay pokémones para luchar
          </p>
        )}
      </section>
    </Col>
  );
};

export default SidebarMyPokemons;
