import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandsTable from "../../Components/Admin/BrandsTable";
import Navbaradmin from "../../Components/util/Navbaradmin";

function AllBrandsPage() {
  return (
    <>
      <Navbaradmin />
      <Container>
        <Row className="mx-0 p-0">
          <BrandsTable />
        </Row>
      </Container>
    </>
  );
}

export default AllBrandsPage;
