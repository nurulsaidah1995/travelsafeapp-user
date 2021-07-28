import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import "./GetSlots.css"

function GetSlots(props) {

    return (
        <div id="wrapperGet">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Flight details:</Form.Label>
                    <Form.Control required
                        type="text"
                        placeholder="SQ1234"
                        onChange={(e) => { props.setFlightNo(e.target.value) }} />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>
            </Form>
        </div> 
    )
}

export default GetSlots