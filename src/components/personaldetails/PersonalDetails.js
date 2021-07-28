import Form from 'react-bootstrap/Form'
import './PersonalDetails.css'
import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'

function PersonalDetails(props) {
   
    // const [timeSlot, setTimeSlot] = useState("")

    
    return (
        <div>
            <div id="title">
                <h2>Clinic Name</h2>
                <p>Clinic Address</p>
            </div>
            <Col>
                <Row>
                    <Col>
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Joe"
                                onChange={(e) => { props.setName(e.target.value) }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                        </Form.Group>    </Col><br />
                    <Col>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>NRIC:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="12345678"
                                onChange={(e) => { props.setNric(e.target.value) }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group><br />
                    </Col>
                </Row>

                <Form.Group controlId="validationCustom03">
                    <Form.Label>Phone No:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="name@test.com"
                        onChange={(e) => { props.setPhoneNo(e.target.value) }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </div>
    )
}

export default PersonalDetails