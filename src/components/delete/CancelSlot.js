import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

function CancelSlot() {
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
    const [clinicData, setClinicData] = useState([]);
    // const [uniqueCode, setUniqueCode] = useState("");

    const [showUpdate, setShowUpdate] = useState(false);
    const closeUpdateModal = () => setShowUpdate(false);
    const showUpdateModal = () => setShowUpdate(true);

    let h1 = useHistory()

    function getBooking(e) {
        e.preventDefault();
        return new Promise(resolve => {
            let getSlots_config = {
                method: 'get',
                url: 'http://localhost:9000/booking',
                headers: {}
            };
            axios(getSlots_config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    let booking = response.data.filter((each) => {
                        return each.uniqueCode === refNum
                    })
                    let bookingObj = booking[0]
                    console.log(bookingObj)
                    setBookingID(bookingObj.bookingID)
                    setName(bookingObj.name)
                    setNric(bookingObj.nric)
                    setPhoneNo(bookingObj.phoneNo)
                    setRefNum(bookingObj.uniqueCode)
                    setShowUpdate(true)
                    setSwabStatus(bookingObj.swabStatus)
                    setRegistered(bookingObj.registered)
                    setBookedDate(bookingObj.bookedDate)
                    setBookedTime(bookingObj.bookedTime)
                    getClinics()
                    return bookingObj
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }
    function getClinics() {
        let config = {
            method: 'get',
            url: 'http://localhost:9000/clinic',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setClinicData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    async function handleUpdate(e) {
        e.preventDefault();
        console.log(refNum)
        // let response = await getBooking()

        // let res = response[0]
        // console.log(res)

        let data = JSON.stringify({
            "bookingID": bookingID,
            "clinicID": clinicID,
            "name": name,
            "nric": nric,
            "phoneNo": phoneNo,
            "registered": registered,
            "swabStatus": "CANCELLED",
            "bookedTime": bookedTime,
            "bookedDate": bookedDate,
            "uniqueCode": refNum
        });

        let config = {
            method: 'put',
            url: `http://localhost:9000/booking/${bookingID}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                h1.push("/cancel/success")
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>

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
                <Button type="submit"
                    style={{ float: 'right', backgroundColor: "purple", border: "none" }}
                >
                    Next
                </Button>
            </Form>
            <Modal show={showUpdate} onHide={closeUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Cancel Booking</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleUpdate}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Booking ID:</Form.Label>
                            <Form.Control
                                disabled
                                type="text"
                                placeholder="Enter Booking ID"
                                value={bookingID}
                                onChange={(e) => setBookingID(e.target.value)}
                                disabled
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>NRIC:</Form.Label>
                            <Form.Control type="text" placeholder="Enter NRIC" value={nric} onChange={(e) => setNric(e.target.value)} disabled />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} disabled />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Phone Number:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone No" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} disabled />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Date Registered:</Form.Label>
                            <Form.Control
                                disabled
                                type="text"
                                placeholder="Enter Date Registered"
                                value={registered}
                                onChange={(e) => setRegistered(e.target.value)}
                                disabled
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Date:</Form.Label>
                            <Form.Control type="text" placeholder="e.g 30/07/21" value={bookedDate} onChange={(e) => setBookedDate(e.target.value)} disabled />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Time:</Form.Label>
                            <Form.Control type="text" placeholder="e.g 09:00:00" value={bookedTime} onChange={(e) => setBookedTime(e.target.value)} disabled />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Swab Status:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Swab Status" value={swabStatus} onChange={(e) => setSwabStatus(e.target.value)} disabled />
                        </Form.Group>

                        {/* <Form.Group>
             <Form.Label>Clinic ID:</Form.Label>
             <Form.Control type="text" placeholder="Enter Clinic ID" value={clinicID} onChange={(e) => setClinicID(e.target.value)} disabled />
           </Form.Group> */}
                        <Form.Group>
                            <Form.Control as="select" value={clinicID} onChange={(e) => setClinicID(e.target.value)} custom>
                                {clinicData.map((cd) => (

                                    <option key={cd.clinicID} value={cd.clinicID}>
                                        {cd.name}
                                    </option>
                                ))}
                                ;
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Reference Number:</Form.Label>
                            <Form.Control
                                disabled
                                type="text"
                                placeholder="Enter Unique Code"
                                value={refNum}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeUpdateModal}>
                            Close
                        </Button>
                        <Button variant="danger" type="submit">
                            Confirm Cancel booking
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default CancelSlot