import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, InputGroup, InputGroupText } from "reactstrap";

function Homepage() {
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
    <Container fluid className="position-relative p-0">
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: `url(https://static.toiimg.com/thumb/msid-100439304,width-748,height-499,resizemode=4,imgsize-107502/.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 0.8,
          zIndex: -1,
        }}
      />
      <Row className="align-items-center h-100">
      <Row xs="1" sm="1" className="text-white mb-3 pt-5 pl-3"> </Row>
      <Col xs="1" sm="1" className="text-white mb-3 pt-5 pl-3">
          <h4 className="display-3"></h4>
        </Col>
      <Col xs="12" sm="6" className="text-white mb-3 pt-5 pl-3">
          <h4 className="display-3">Send money Internationally to 32+ Nations</h4>
        </Col>
        
        <Col xs={{ size: 12, offset: 0 }} sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 5, offset: 4 }} xl={{ size: 4, offset: 5 }} className="mx-auto">
          <Card>
            <CardBody>
              <h3 className="card-title" style={{ textAlign: "center" }}>Send Money</h3>
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
                    <option value="INR">INR</option>
                    {/* Add more currency options here */}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Conversion Rate: {conversionRate}</Label>
                </FormGroup>
                <FormGroup>
                  <Label>Service Fee: {serviceFee}</Label>
                </FormGroup>
                <FormGroup>
                <strong><Label>Total Transfer Amount: ${transferAmount}</Label></strong>
                </FormGroup>
                <FormGroup>
                  <p className="form-control-static">Arrival: Within 1-2 days</p>
                  <p className="form-control-static">No fees for first transfer</p>
                  <p className="form-control-static">No fees for transfers over $10,000</p>
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

export default Homepage;
