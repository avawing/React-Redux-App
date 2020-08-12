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
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    //main card
    name: state.name,
    tagline: state.tagline,
    image_url: state.image_url,
    first_brewed: state.first_brewed,
    contributed_by: state.contributed_by,
    description: state.description,
    //food pairing
    food_pairing: state.food_pairing,
    //method
    method: state.method,
    brewers_tips: state.brewers_tips,
    //ingredients
    ingredients: state.ingredients,
  };
};

const Beer = (props) => {
  //styling

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
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.tagline}</CardSubtitle>
        </CardBody>
        <CardImg
          style={{ maxHeight: 300, maxWidth: 100, alignSelf: "center" }}
          width="100%"
          src={props.image_url}
          alt={props.name}
        />
        <CardBody>
          <CardSubtitle>
            {props.contributed_by}
            {props.first_brewed}
          </CardSubtitle>
          <CardText>{props.description}</CardText>

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
                {props.food_pairing.map((item) => {
                  return <CardText> {item} </CardText>;
                })}
              </CardBody>
            </Card>
          </Collapse>

          <Collapse isOpen={mIsOpen}>
            <Card>
              <CardBody>
                {props.method.mash_temp.map((piece) => {
                  return (
                    <CardText>
                      Mash at {piece.temp.value} degrees {piece.temp.unit} for{" "}
                      {piece.duration} minutes.
                    </CardText>
                  );
                })}
                <CardText>
                  Ferment at {props.method.fermentation.temp.value} degrees{" "}
                  {props.method.fermentation.unit}.
                </CardText>
                <CardText>{props.method.twist}</CardText>
                <CardText>{props.brewers_tips}</CardText>
              </CardBody>
            </Card>
          </Collapse>
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Ingredients</ModalHeader>
        <ModalBody>
          Malt:
          {props.ingredients.malt.map((malt) => {
            return (
              <CardText>
                {malt.name} : {malt.amount.value}
                {malt.amount.unit}{" "}
              </CardText>
            );
          })}
          Hops:
          {props.ingredients.hops.map((hops) => {
            return (
              <CardText>
                {hops.name} : {hops.amount.value}
                {hops.amount.unit}{" "}
              </CardText>
            );
          })}
          Yeast:<CardText>{props.ingredients.yeast}</CardText>
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

export default connect(mapStateToProps)(Beer);
