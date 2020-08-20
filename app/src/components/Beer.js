import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Collapse,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonGroup,
} from "reactstrap";

const Beer = (props) => {
  //styling
  const {beer} = props;

  const [isOpen, setIsOpen] = useState(false);
  const toggleFood = () => setIsOpen(!isOpen);
  
  const [mIsOpen, setMIsOpen] = useState(false);
  const toggleMethod = () => setMIsOpen(!mIsOpen);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Card style={{ maxWidth: 300 }}>
        <CardBody>
          <CardTitle>{beer.name}</CardTitle>
          <CardSubtitle>{beer.tagline}</CardSubtitle>
        </CardBody>
        <CardImg
          style={{ maxHeight: 300, maxWidth: 100, alignSelf: "center" }}
          width="100%"
          src={beer.image_url}
          alt={beer.name}
        />
        <CardBody>
          <CardSubtitle>
            {beer.contributed_by}
            {beer.first_brewed}
          </CardSubtitle>
          <CardText>{beer.description}</CardText>

          <ButtonGroup>
            <Button
              color="primary"
              onClick={toggleFood}
              style={{ marginBottom: "1rem" }}
            >
              Food Pairing
            </Button>
            <Button
              color="primary"
              onClick={toggleMethod}
              style={{ marginBottom: "1rem" }}
            >
              Method
            </Button>
            <Button
              color="primary"
              onClick={toggle}
              style={{ marginBottom: "1rem" }}
            >
              Ingredients
            </Button>
          </ButtonGroup>

          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody>
                {beer.food_pairing.map((item) => {
                  return <CardText> {item} </CardText>;
                })}
              </CardBody>
            </Card>
          </Collapse>

          <Collapse isOpen={mIsOpen}>
            <Card>
              <CardBody>
                {beer.method.mash_temp.map((piece) => {
                  return (
                    <CardText>
                      Mash at {piece.temp.value} degrees {piece.temp.unit} for{" "}
                      {piece.duration} minutes.
                    </CardText>
                  );
                })}
                <CardText>
                  Ferment at {beer.method.fermentation.temp.value} degrees{" "}
                  {beer.method.fermentation.unit}.
                </CardText>
                <CardText>{beer.method.twist}</CardText>
                <CardText>{beer.brewers_tips}</CardText>
              </CardBody>
            </Card>
          </Collapse>
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Ingredients</ModalHeader>
        <ModalBody>
          Malt:
          {beer.ingredients.malt.map((malt) => {
            return (
              <CardText>
                {malt.name} : {malt.amount.value}
                {malt.amount.unit}{" "}
              </CardText>
            );
          })}
          Hops:
          {beer.ingredients.hops.map((hops) => {
            return (
              <CardText>
                {hops.name} : {hops.amount.value}
                {hops.amount.unit}{" "}
              </CardText>
            );
          })}
          Yeast:<CardText>{beer.ingredients.yeast}</CardText>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Beer;
