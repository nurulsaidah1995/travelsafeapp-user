// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react'
// import axios from 'axios'
import GetSlots from './components/get/GetSlots'
import BookSlot from './components/post/BookSlot'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

// import Message from './components/message/Message';
// import ProgressBar from 'react-bootstrap/ProgressBar'
// import LandingPage from './components/landingpage/LandingPage';

// const mockData = 
// [
//   {
//       "id": 7,
//       "email": "michael.lawson@reqres.in",
//       "first_name": "Michael",
//       "last_name": "Lawson",
//       "avatar": "https://reqres.in/img/faces/7-image.jpg"
//   },
//   {
//       "id": 8,
//       "email": "lindsay.ferguson@reqres.in",
//       "first_name": "Lindsay",
//       "last_name": "Ferguson",
//       "avatar": "https://reqres.in/img/faces/8-image.jpg"
//   },
//   {
//       "id": 9,
//       "email": "tobias.funke@reqres.in",
//       "first_name": "Tobias",
//       "last_name": "Funke",
//       "avatar": "https://reqres.in/img/faces/9-image.jpg"
//   },
//   {
//       "id": 10,
//       "email": "byron.fields@reqres.in",
//       "first_name": "Byron",
//       "last_name": "Fields",
//       "avatar": "https://reqres.in/img/faces/10-image.jpg"
//   },
//   {
//       "id": 11,
//       "email": "george.edwards@reqres.in",
//       "first_name": "George",
//       "last_name": "Edwards",
//       "avatar": "https://reqres.in/img/faces/11-image.jpg"
//   },
//   {
//       "id": 12,
//       "email": "rachel.howell@reqres.in",
//       "first_name": "Rachel",
//       "last_name": "Howell",
//       "avatar": "https://reqres.in/img/faces/12-image.jpg"
//   }
// ]
// function App() {

//   const [page, setPage] = useState(1)


//   useEffect(() => {
//     handlePageChange()
//   }, [page])

//   function handlePageChange() {
//     // console.log("test")
//     switch (page) {
//       case 1:
//       case 2:
//        break;
//       case 3:
//         var config = {
//           method: 'get',
//           url: `http://localhost:9000/flight/flightCode/${flightNo}`,
//           headers: { 
//             'Content-Type': 'application/json'
//           }
//         };

//         axios(config)
//         .then(function (response) {
//           console.log(JSON.stringify(response.data));
//           setSlots(response.data)
//         })
//         .catch(function (error) {
//           console.log(error);
//         });

//         break;
//       case 4:
//         let json={

//         }
//         var config = {
//           method: 'post',
//           url: `http://localhost:9000/flight/flightCode/${flightNo}`,
//           headers: { 
//             'Content-Type': 'application/json'
//           },
//           data:json
//         };

//         axios(config)
//         .then(function (response) {
//           console.log(JSON.stringify(response.data));
//           setSlots(response.data)
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//         console.log("page 4")
//         break;
//     }


//   }
//   return (
//     <div className="App">
//  {/* <ProgressBar now={((page-1)/3)*100} visuallyHidden="true" /> */}
//  {page=== 1 && <LandingPage/>}
//       {page === 2 && <GetSlots setFlightNo={(flightNum) => setFlightNo(flightNum)} />}
//       {page === 3 && <BookSlot setTimeSlot={(slot) => setTimeSlot(slot)} data={slots}/>}
//       {page === 4 && <Message />}
//       <Button
//         variant="primary"
//         type="submit"
//         onClick={() => {
//           setPage(page - 1)
//         }}
//         hidden={page == 1 || page == 4? true : false}
//       >
//         Previous
//       </Button>
//       <Button
//         variant="primary"
//         onClick={() => {
//           console.log("plus")
//           setPage(page + 1)
//         }}
//         hidden={page == 4 ? true : false}>
//         
//       </Button>
//     </div>
//   );
// }

// export default App;


import { MultiStepForm, Step } from 'react-multi-form';
import { useState } from 'react';
import Message from './components/message/Message'
// import BookSlot from './components/post/BookSlot';
import PersonalDetails from './components/personaldetails/PersonalDetails';

function App() {
  const [active, setActive] = useState(1)
  let [slots, setSlots] = useState([]);
  let [timeSlot, setTimeSlot] = useState("")
  let [flightNo, setFlightNo] = useState("")

  let [name, setName] = useState("")
  let [clinicId, setClinicId] = useState("")
  let [nric, setNric] = useState("")
  let [phoneNo, setPhoneNo] = useState("")
  let [registered, setRegistered] = useState(false)
  let [swapStatus, setSwapStatus] = useState("")

  console.log(timeSlot)
  function handleSubmit(e) {
    e.preventDefault();
    console.log("name", name)
    console.log("clinicId", clinicId)
    console.log("nric", nric)
    console.log("phoneNo", phoneNo)
    console.log("registered", registered)
    console.log("swapStatus", swapStatus)
    console.log("timeSlot", timeSlot)
    setActive(active+1)
  }

  return (
    <div className="App">

      {/* Each Step represents the component to render */}
      <MultiStepForm activeStep={active} accentColor="purple">

        <Step label="flight number">
          <GetSlots setFlightNo={(flightNum) => setFlightNo(flightNum)} />
        </Step>

        <Step label="choose a slot">
          <BookSlot flight={flightNo} setTimeSlot={(slot) => setTimeSlot(slot)} data={slots} />
        </Step>

        <Step label="personal details">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <PersonalDetails
              setName={(name) => { setName(name) }}
              // setClinicId={(clinicId) => { setClinicId(clinicId) }}
              setNric={(nric) => { setNric(nric) }}
              setPhoneNo={(phoneNo) => { setPhoneNo(phoneNo) }}
            // handleSubmit={}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Step>

        <Step label="confirmation">
          <Message />
        </Step>

      </MultiStepForm>

    {/* Show and hide buttons */}
      {active !== 1 && (
        <Button id="prev"
          onClick={() => setActive(active - 1)}
          style={{ backgroundColor: "purple", border: "none" }}
        >Previous</Button>
      )}
      { (active < 3) && (
        <Button id="next"
          onClick={() => setActive(active + 1)}
          style={{ float: 'right', backgroundColor: "purple", border: "none" }}
        >
          Next
        </Button>
      )}
    </div>
  )
}

export default App