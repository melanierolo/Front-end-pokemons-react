import React from "react";
import {
  Button,
  Row,
  Col,
  Figure,
  Container,
  Card,
  ProgressBar,
} from "react-bootstrap";
import "./PokemonInfo.css";
//Icon
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
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

export interface IAplicationProps {
  data: PokemonItem;
}

const PokemonInfo: React.FunctionComponent<IAplicationProps> = (props) => {
  const { data } = props;
  console.log(data);
  const navigate = useNavigate();

  return (
    <>
      <Col className="m-0 p-0">
        <Col className="pokemonInfo p-4">
          <Row>
            <Col sm={4} md={3}>
              <Button
                variant="light"
                onClick={() => {
                  navigate("/");
                }}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
                Regresar
              </Button>
            </Col>
            <Col sm={4} md={6}></Col>
            <Col sm={4} md={3} className="justify-content-end">
              <Button variant="warning">Agregar Pokémon</Button>
            </Col>
          </Row>
          <Row>
            <Figure className="text-center m-0 pokecard-figure">
              <Figure.Image
                className="pokemonInfo-img"
                alt="imagen pokemon"
                src={data.sprites.other.dream_world.front_default}
              />
              <Figure.Caption className="text-center text-light h1">
                <h2>{data.name}</h2>
              </Figure.Caption>
            </Figure>
          </Row>
          <Row className="mx-2">
            <Col>
              <Card className="mx-3">
                <Card.Body>
                  <Card.Title> Altura </Card.Title>
                  <Card.Text>{data.height}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mx-3">
                <Card.Body>
                  <Card.Title> Tipo </Card.Title>
                  <Card.Text>Agua</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Col>
      <Container className="my-4 px-5">
        <h2 className="text-center my-2">Estadísticas Base</h2>
        <Row>
          <Col>Ataque</Col>
          <Col>
            <b>#número</b>
          </Col>
          <Col>
            <ProgressBar now={92} label={`${92}%`} />
          </Col>
        </Row>
        <Row>
          <Col>Defensa</Col>
          <Col>
            <b>#número</b>
          </Col>
          <Col>
            <ProgressBar now={40} label={`${40}%`} />
          </Col>
        </Row>
        <Row>
          <Col>Ataque especial</Col>
          <Col>
            <b>#número</b>
          </Col>
          <Col>
            <ProgressBar now={75} label={`${75}%`} />
          </Col>
        </Row>
        <Row>
          <Col>Defensa especial</Col>
          <Col>
            <b>#número</b>
          </Col>
          <Col>
            <ProgressBar now={60} label={`${60}%`} />
          </Col>
        </Row>
        <Row>
          <Col>Velocidad</Col>
          <Col>
            <b>#número</b>
          </Col>
          <Col>
            <ProgressBar now={80} label={`${80}%`} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PokemonInfo;
