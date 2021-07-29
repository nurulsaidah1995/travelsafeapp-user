// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import GetSlots from './components/get/GetSlots'
import BookSlot from './components/post/BookSlot'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { MultiStepForm, Step } from 'react-multi-form';
import Message from './components/message/Message'
import PersonalDetails from './components/personaldetails/PersonalDetails';
// import LandingPage from './components/landingpage/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UpdateSlot from './components/update/UpdateSlot';
import CancelSlot from './components/delete/CancelSlot';
import LandingPage from './components/landingpage/LandingPage';
var ts = require("time-slots-generator");
var moment = require("moment")

function App() {
  const [active, setActive] = useState(1)

  // Page 1: Flight Number
  const [flightNo, setFlightNo] = useState("")

  // Page 2: Choose a slot
  const [timeslots, setTimeSlots] = useState([]);
  const [dateslots, setDateSlots] = useState([]);
  const [clinicslots, setClinicSlots] = useState([]);
  const [timeSlot, setTimeSlot] = useState("")
  const [dateSlot, setDateSlot] = useState("")
  const [dateTime, setDateTime] = useState("")
  const [clinicslot, setClinicSlot] = useState("")
  const [uniqueCode, setUniqueCode] = useState("")


  // Page 3: Personal Details
  const [name, setName] = useState("")
  const [nric, setNric] = useState("")
  const [phoneNo, setPhoneNo] = useState("")

  console.log(timeSlot)
  console.log(flightNo)
  console.log(active)

  useEffect(() => {
    handlePageChange()
  }, [active])

  // useEffect(() => {
  //   // formatDateTime(timeSlot, dateSlot)
  // }, [timeSlot, dateSlot])

 
  function handleSubmit(e) {
    e.preventDefault();
    console.log("timeSlot", moment(timeSlot,'HH:mm').format('HH:mm:ss'))
    // setTimeSlot(new Date())
    let json = {
      "name": name,
      "clinicID": clinicslot[0],
      "nric": nric,
      "phoneNo": phoneNo,
      "registered": "",
      "swabStatus": "",
      "timeslot": moment(timeSlot,'HH:mm').format('HH:mm:ss'),
      "uniqueCode": "",
      "bookedDate": dateSlot,
      "bookedTime":"09:00:00"
    }
    console.log(json)
    let postBooking_config = {
      method: 'post',
      url: 'http://localhost:9000/booking',
      headers: {
        'Content-Type': 'application/json'
      },
      data: json
    };

    axios(postBooking_config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        // setSlots(response.data)
        setUniqueCode(response.data.uniqueCode)
      })
      .catch(function (error) {
        console.log(error);
      });
      setActive(active+1)
  }

  function handlePageChange() {
    switch (active) {
      case 1:
        break;
      case 2:
        let getFlight_config = {
          method: 'get',
          url: `http://localhost:9000/flight/flightCode/${flightNo}`,
          headers: {
            'Content-Type': 'application/json'
          }
        };

        axios(getFlight_config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            // setSlots(response.data)

            /* Display date */
            const flightTimeDate = response.data[0].flightDateTime
            console.log(flightTimeDate)
            let date1 = moment(flightTimeDate).subtract(3, 'days').format("YYYY-MM-DD")
            let date2 = moment(flightTimeDate).subtract(2, 'days').format("YYYY-MM-DD")
            let date3 = moment(flightTimeDate).subtract(1, 'days').format("YYYY-MM-DD")
            console.log(date1)
            console.log(date2)
            console.log(date3)
            let array = []
            array.push(date1)
            array.push(date2)
            array.push(date3)
            setDateSlots(array)
          })
          .catch(function (error) {
            console.log(error);
          });

        /* Display time */
        let getClinics_config = {
          method: 'get',
          url: 'http://localhost:9000/clinic',
          headers: {
            'Content-Type': 'application/json'
          }
        };
        axios(getClinics_config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            let clinics = response.data.map((clinic) => {
              let obj = {}
              obj.clinicID = clinic.clinicID
              obj.name = clinic.name
              return obj;
            });
            setClinicSlots(clinics)
          })
        const timesToBlock = [["0:00", "8:00"], ["21:00", "24:00"]]
        function convertBlockTimes(...beforeConvert) {
          console.log(beforeConvert)
          let returning = timesToBlock.map((blocked) => {
            let returned = blocked.map((each) => {
              let time = each.split(":")
              let minutes = (+time[0]) * 60 + (+time[1]);
              return minutes;
            })
            return returned;
          })
          return returning;
        }
        let blockTimes = convertBlockTimes(timesToBlock)

        // const blockTimes = [[10, 500], [1390, 1440]]
        const showTimeAsString = true;
        const timeInterval = "one";
        const includeStartBlockedTime = false;
        const includeEndBlockedTime = false;
        let timeslots = ts.getTimeSlots(blockTimes, showTimeAsString, timeInterval, includeStartBlockedTime, includeEndBlockedTime)

        console.log(timeslots)
        let time = Object.values(timeslots)
        setTimeSlots(time)
        break;
      case 3:
        break;
      case 4:
        console.log("page 4")
        break;
    }
  }

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact strict >
              <LandingPage />
            </Route>
            <Route path={'/form'} exact strict >
              {/* <Employee /> */}
              {/* Each Step represents the component to render */}
              <MultiStepForm activeStep={active} accentColor="purple">

                <Step label="flight number">
                  <GetSlots setFlightNo={(flightNum) => setFlightNo(flightNum)} />
                </Step>

                <Step label="choose a slot">
                  <BookSlot
                    flight={flightNo}
                    setTimeSlot={(slot) => setTimeSlot(slot)}
                    setDateSlot={(slot) => setDateSlot(slot)}
                    setClinicSlot={(slot) => setClinicSlot(slot)}
                    time={timeslots}
                    date={dateslots}
                    clinic={clinicslots}
                  />
                </Step>

                <Step label="personal details">
                  <Form onSubmit={handleSubmit}>
                    <PersonalDetails
                      setName={(name) => { setName(name) }}
                      // setClinicId={(clinicId) => { setClinicId(clinicId) }}
                      setNric={(nric) => { setNric(nric) }}
                      setPhoneNo={(phoneNo) => { setPhoneNo(phoneNo) }}
                    // handleSubmit={}
                    />
                    <Button style={{float:"right"}} type="submit">Submit</Button>
                  </Form>
                </Step>

                <Step label="confirmation">
                  <Message text={`Reference Number:${uniqueCode}.Your Covid-19 Test has been successfully 
                  booked at ${clinicslot[1]} on ${dateSlot} at ${timeSlot}. Please refer to the above reference number to update or cancel your booking.`}/>
                </Step>

              </MultiStepForm>

              {/* Show and hide buttons */}
              {
                (active !== 4) && <Button id="prev"
                  onClick={active!==1 ? () => { setActive(active - 1) }:""}
                  style={{ backgroundColor: "purple", border: "none" }}
                >{active===1 ? <Link className="link" to="/">Previous</Link>:"Previous"}</Button>
              }
              {(active < 3) && (
                <Button id="next"
                  onClick={() => { setActive(active + 1); }}
                  style={{ float: 'right', backgroundColor: "purple", border: "none" }}
                >
                  Next
                </Button>
              )}
            </Route>
            <Route path="/update" exact strict>
                <UpdateSlot/>
            </Route>
            <Route path="/cancel" exact strict>
                <CancelSlot/>
            </Route>
            <Route path="/cancel/success" exact strict>
                <Message text="Your booking has been cancelled."/>
            </Route>
            <Route path="/update" exact strict>
                <CancelSlot/>
            </Route>
            <Route path="/update/success" exact strict>
                <Message text="Your booking has been updated."/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App