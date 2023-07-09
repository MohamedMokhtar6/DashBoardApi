import React from "react";
import Navbaradmin from "../../Components/util/Navbaradmin";
import { Container, Row } from "react-bootstrap";
import EditBrand from "../../Components/Admin/EditBrand";

function EditBrandPage() {
  return (
    <>
      <Navbaradmin />
      <Container className=" d-flex justify-content-center ">
        <Row className="mx-0 p-0 justify-content-center  ">
          <EditBrand />
        </Row>
      </Container>
    </>
  );
}

export default EditBrandPage;
