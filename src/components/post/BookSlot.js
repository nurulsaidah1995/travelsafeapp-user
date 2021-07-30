import { useEffect, useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import SlotGroup from './SlotGroup'
import SlotGroup2 from './SlotGroup2'

// const mockSlots = ["slot 1", "slot 2"]
function BookSlot(props) {
    // const [showDates, setShowDates] = useState(false)
    // const [showTimes, setShowTimes] = useState(false)
    // useEffect(() => {
    //     showDateSlots()
    // }, [showDates])


    return (
        <div className="step-form-container">
                <div className="step-form">
            {/* <h1>this is Book slot page</h1> */}
            {/* <TableComp data={props.data}/> */}
            <label>Choose your clinic:</label>
            <SlotGroup2 group="clinic" handleClick={props.setClinicSlot} data={props.clinic} />
            {
                <div>
                    <label>Choose your date:</label>
                    <SlotGroup
                        group="date"
                        handleClick={props.setDateSlot}
                        data={props.date}
                    />
                </div>
            }
            {
                <div>
                    <label>Choose your time:</label>
                    <SlotGroup group="time" handleClick={props.setTimeSlot} data={props.time} />
                </div>
            }
            </div>
        </div>
    )
}

export default BookSlot