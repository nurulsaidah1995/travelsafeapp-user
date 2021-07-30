import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import Message from '../message/Message';

function ViewReport() {
    const [refNum, setRefNum] = useState("")
    const [bookingID, setBookingID] = useState("");
    const [nric, setNric] = useState("");
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [registered, setRegistered] = useState("");
    const [bookedDate, setBookedDate] = useState("");
    const [bookedTime, setBookedTime] = useState("");
    const [swabStatus, setSwabStatus] = useState("");
    const [clinicID, setClinicID] = useState("");
    let h1 = useHistory()

    useEffect(() => {
        let status = swabStatus.toLowerCase()
        switch (status) {
            case "negative":
                h1.push("/view/report/negative")
                break;
            case "positive":
                h1.push("/view/report/positive")
                break;
            case "not completed":
            case "in progress":
                h1.push("/view/report/notavailable")
                break;
            default:
                h1.push("/view/report")
        }
    }, [swabStatus])

    function getBooking(e) {
        e.preventDefault();
        let getSlots_config = {
            method: 'get',
            url: 'http://localhost:9000/booking',
            headers: {}
        };
        axios(getSlots_config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                let booking = response.data.filter((each) => {
                    return each.uniqueCode === refNum
                })
                let bookingObj = booking[0]
                console.log(bookingObj)
                console.log(bookingObj.swabStatus)
                // setBookingID(bookingObj.bookingID)
                // setName(bookingObj.name)
                // setNric(bookingObj.nric)
                // setPhoneNo(bookingObj.phoneNo)
                // setRefNum(bookingObj.uniqueCode)
                setSwabStatus(bookingObj.swabStatus)
                // setRegistered(bookingObj.registered)
                // setBookedDate(bookingObj.bookedDate)
                // setBookedTime(bookingObj.bookedTime)
                // return bookingObj
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="step-form-container">
                <div className="step-form">
            <Form onSubmit={(e) => getBooking(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter your reference number:</Form.Label>
                    <Form.Control required
                        type="text"
                        placeholder="TX12232403"
                        onChange={(e) => { setRefNum(e.target.value) }} />
                    {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text> */}
                </Form.Group>
                <Button className= "purplebutton" type="submit"
                    style={{ float: 'right', backgroundColor: "purple", border: "none" }}
                >
                    View Report
                </Button>
            </Form>
            </div>
        </div>
    )
}

export default ViewReport