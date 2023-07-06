import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserTable from "../../Components/Admin/UserTable";
import Navbaradmin from "../../Components/util/Navbaradmin";

function AllUsersPage() {
  return (
    <>
      <Navbaradmin />
      <Container>
        <Row className="mx-0 p-0">
          <UserTable />
        </Row>
      </Container>
    </>
  );
}

export default AllUsersPage;
