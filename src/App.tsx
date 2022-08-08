import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import "./App.css";
import Pokemons from "./Pokemons/UI/Pokemons";
import store from "./Redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import SidebarMyPokemons from "./SidebarMyPokemon/UI/SidebarMyPokemons";
import Description from "./Description/UI/Description";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Container fluid>
        <Row>
          <Router>
            <Routes>
              <Route path="/" element={<Pokemons />} />
              <Route path="/description" element={<Description />} />
            </Routes>
          </Router>
          <SidebarMyPokemons />
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
