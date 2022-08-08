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
import "./PokemonItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { deselectPokemon } from "../../Pokemons/Structure/Pokemons.store";

interface PokemonImage {
  front_default: string;
}

interface Other {
  dream_world: PokemonImage;
}
interface TypesStat {
  name: string;
}
interface Stat {
  base_stat: number;
  stat: TypesStat;
}

interface PokemonItem {
  name: string;
  id: number;
  sprites: {
    other: Other;
  };
  height: number;
  stats: Array<Stat>;
}

interface Props {
  data: PokemonItem;
}

const PokemonItem: React.FC<Props> = (props) => {
  const { data } = props;

  const cancel = (id?: any) => {
    deselectPokemon(id);
  };
  return data ? (
    <Card className="p-2 mx-2 my-2 m-lg-2 card poke-item" border="info">
      <Row className="mt-2">
        <Col sm={8}></Col>
        <Col sm={4}>
          <OverlayTrigger
            overlay={<Tooltip>Elimina al pokémon de la lista</Tooltip>}
          >
            <Button variant="danger" onClick={() => cancel(data?.id)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </Button>
          </OverlayTrigger>
        </Col>
      </Row>
      <Figure className="text-center m-0">
        <Figure.Image
          className="pokecard-img"
          alt="imagen pokemon"
          src={data?.sprites?.other?.dream_world?.front_default}
        />
      </Figure>
      <Card.Body className="text-center m-0 py-0">
        <Card.Title>{data?.name}</Card.Title>
      </Card.Body>
    </Card>
  ) : (
    <div />
  );
};

export default PokemonItem;
