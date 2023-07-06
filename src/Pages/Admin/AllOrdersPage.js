import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OrdersTable from "../../Components/Admin/OrdersTable";
import Navbaradmin from "../../Components/util/Navbaradmin";

function AllOrdersPage() {
  return (
    <>
      <Navbaradmin />
      <Container>
        <Row className="mx-0 p-0">
          <OrdersTable />
        </Row>
      </Container>
    </>
  );
}

export default AllOrdersPage;
