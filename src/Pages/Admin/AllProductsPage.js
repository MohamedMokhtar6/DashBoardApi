import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProducsTable from "../../Components/Admin/ProducsTable";
import Navbaradmin from "../../Components/util/Navbaradmin";

function AllProductsPage() {
  return (
    <>
      <Navbaradmin />
      <Container>
        <Row className="mx-0 p-0">
          <ProducsTable />
        </Row>
      </Container>
    </>
  );
}

export default AllProductsPage;
