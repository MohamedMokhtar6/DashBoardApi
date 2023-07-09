import React from "react";
import Navbaradmin from "../../Components/util/Navbaradmin";
import { Container, Row } from "react-bootstrap";
import EditCategory from "../../Components/Admin/EditCategory";

function EditCategoryPage() {
  return (
    <>
      <Navbaradmin />
      <Container className=" d-flex justify-content-center ">
        <Row className="mx-0 p-0 justify-content-center  ">
          <EditCategory />
        </Row>
      </Container>
    </>
  );
}

export default EditCategoryPage;
