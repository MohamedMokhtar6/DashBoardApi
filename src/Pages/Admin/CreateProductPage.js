import React from "react";
import Navbaradmin from "../../Components/util/Navbaradmin";
import { Container, Row } from "react-bootstrap";
import CreateProduct from "../../Components/Admin/CreateProduct";
function CreateProductPage() {
  return (
    <>
      <Navbaradmin />
      <Container className=" d-flex justify-content-center ">
        <Row className="mx-0 p-0 justify-content-center  ">
          <CreateProduct />
        </Row>
      </Container>
    </>
  );
}

export default CreateProductPage;
