import React, {useState} from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  UncontrolledCollapse,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonGroup,
} from "reactstrap";

function Beer(props) {
  //styling
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{/* Name */}</CardTitle>
          <CardSubtitle>{/* Tagline */}</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        {/* image_url */}
        <CardBody>
          <CardSubtitle>{/* first_brewed, contributed_by */}</CardSubtitle>
          <CardText>{/* Description*/}</CardText>

          <ButtonGroup>
            <Button
              color="primary"
              id="toggler1"
              style={{ marginBottom: "1rem" }}
            >
              Food Pairing
            </Button>
            <Button
              color="primary"
              id="toggler2"
              style={{ marginBottom: "1rem" }}
            >
              Method
            </Button>
            <Button color="danger" onClick={toggle}>
              Ingredients
            </Button>
          </ButtonGroup>

          <UncontrolledCollapse toggler="#toggler1">
            <Card>
              <CardBody>
                {/* map over food_pairing with <CardText> </CardText> */}
              </CardBody>
            </Card>
          </UncontrolledCollapse>

          <UncontrolledCollapse toggler="#toggler2">
            <Card>
              <CardBody>
                {/* map over method with <CardText> </CardText> */}
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          {/* map over ingredients with <CardText> </CardText> */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Beer
