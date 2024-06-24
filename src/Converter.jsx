import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, InputGroup, InputGroupText } from "reactstrap";

function Converter() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [transferAmount, setTransferAmount] = useState(0);

  const conversionRate = 85;
  const serviceFee = 2.99;

  const handleChange = (e) => {
    setAmount(e.target.value);
    calculateTransferAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const calculateTransferAmount = (amount) => {
    if (amount > 0) {
      const transferAmount = (amount * conversionRate) - serviceFee;
      setTransferAmount(transferAmount.toFixed(2));
    } else {
      setTransferAmount(0);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
      <Col xs="12" sm="8" md="6" lg="5" xl="4" className="mx-auto">
          <Card>
            <CardBody>
              <h5 className="card-title">Send Money</h5>
              <Form>
                <FormGroup>
                  <Label for="amount">Send exactly</Label>
                  <InputGroup>
                    <InputGroupText>$</InputGroupText>
                    <Input type="number" id="amount" value={amount} onChange={handleChange} />
                    <InputGroupText>{currency}</InputGroupText>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="currency">Currency</Label>
                  <Input type="select" id="currency" value={currency} onChange={handleCurrencyChange}>
                    <option value="">NPR</option>
                    <option value="FK AUD">INR</option>
                    {/* Add more currency options here */}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Conversion Rate:</Label>
                  <p className="form-control-static">{conversionRate}</p>
                </FormGroup>
                <FormGroup>
                  <Label>Service Fee:</Label>
                  <p className="form-control-static">{serviceFee}</p>
                </FormGroup>
                <FormGroup>
                  <Label>Total Transfer Amount:</Label>
                  <p className="form-control-static">${transferAmount}</p>
                </FormGroup>
                <FormGroup>
                  <Label>Arrival:</Label>
                  <p className="form-control-static">Within 1-2 days</p>
                </FormGroup>
                <FormGroup>
                  <Label>Fees:</Label>
                  <p className="form-control-static">No fees for first transfer, No fees for transfers over $10,000</p>
                </FormGroup>
                <button className="btn btn-primary">Send money now</button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Converter;