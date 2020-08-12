import { CardDeck } from "reactstrap";
//item > map > Beer
import React from "react";
import Beer from "./Beer";

function BeerList(props) {
  return (
    <CardDeck>
      <Beer />
    </CardDeck>
  );
}

export default BeerList;
