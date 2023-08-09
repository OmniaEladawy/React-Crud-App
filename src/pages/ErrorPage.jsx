import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <div className="text-center mt-5">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
            <Button
              variant="secondary"
              onClick={() => navigate("/", { replace: true })}
            >
              Back to homepage
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
