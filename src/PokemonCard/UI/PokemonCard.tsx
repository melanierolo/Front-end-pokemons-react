import React from "react";
import {
  Button,
  Card,
  Figure,
  OverlayTrigger,
  Tooltip,
  Row,
  Col,
} from "react-bootstrap";
import "./PokemonCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  getPokemon,
  getPokemonData,
} from "../../Pokemons/Application/Pokemons.business";
import { useNavigate } from "react-router-dom";
interface Pokemon {
  name: string;
  url: string;
}

interface Props {
  pokemon: Pokemon;
  index: number;
  key: number;
}

const PokemonCard: React.FC<Props> = (props) => {
  const { pokemon, index } = props;
  const navigate = useNavigate();

  //onsole.log(record)

  return (
    <Card className="mx-2 m-lg-1 card poke-card h-100" border="danger">
      <Row className="mt-2">
        <Col sm={8}></Col>
        <Col sm={4}>
          <OverlayTrigger overlay={<Tooltip>Atrapa un pokémon!</Tooltip>}>
            <Button
              variant="warning "
              onClick={() => {
                getPokemon(index);
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </OverlayTrigger>
        </Col>
      </Row>
      <Figure className="text-center m-0 pokecard-figure">
        <Figure.Image
          className="pokecard-img"
          alt="imagen pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`}
        />
      </Figure>
      <Card.Body className="text-center m-0 py-0">
        <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
        <Button
          variant="outline-danger"
          onClick={() => {
            getPokemonData(index);
            navigate("/description");
          }}
        >
          Ver más
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
