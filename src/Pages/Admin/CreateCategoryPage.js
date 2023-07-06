import React from "react";
import Navbaradmin from "../../Components/util/Navbaradmin";
import { Container, Row } from "react-bootstrap";
import CreateCategory from "../../Components/Admin/CreateCategory";

function CreateCategoryPage() {
  return (
    <>
      <Navbaradmin />
      <Container className=" d-flex justify-content-center ">
        <Row className="mx-0 p-0 justify-content-center  ">
          <CreateCategory />
        </Row>
      </Container>
    </>
  );
}

export default CreateCategoryPage;
