import React from "react";
import Navbaradmin from "../../Components/util/Navbaradmin";
import { Container, Row } from "react-bootstrap";
import CreateBrand from "../../Components/Admin/CreateBrand";

function CreateBrandPage() {
  return (
    <>
      <Navbaradmin />
      <Container className=" d-flex justify-content-center ">
        <Row className="mx-0 p-0 justify-content-center  ">
          <CreateBrand />
        </Row>
      </Container>
    </>
  );
}

export default CreateBrandPage;
