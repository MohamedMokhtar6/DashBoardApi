import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesTable from "../../Components/Admin/CategoriesTable";
import Navbaradmin from "../../Components/util/Navbaradmin";

function AllCategoriesPage() {
  return (
    <>
      <Navbaradmin />
      <Container>
        <Row className="mx-0 p-0">
          <CategoriesTable />
        </Row>
      </Container>
    </>
  );
}

export default AllCategoriesPage;
