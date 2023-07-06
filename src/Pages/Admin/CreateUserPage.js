import React from "react";
import { Container, Row } from "react-bootstrap";
import CreateUser from "../../Components/Admin/CreateUser";
import Navbaradmin from "../../Components/util/Navbaradmin";

function CreateUserPage() {
  return (
    <>
      <Navbaradmin />
      <Container className=" d-flex justify-content-center ">
        <Row className="mx-0 p-0 justify-content-center  ">
          <CreateUser />
        </Row>
      </Container>
    </>
  );
}

export default CreateUserPage;
