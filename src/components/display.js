import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Display({ text }) {
  return (
    <Row id="display">
      <Col>
      <h3>Piano</h3>
        <h4>{text}</h4>
      </Col>
    </Row>
  );
}

export default Display;
