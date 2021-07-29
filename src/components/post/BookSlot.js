import { useEffect, useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import TableComp from '../table/TableComp'
import SlotGroup from './SlotGroup'

// const mockSlots = ["slot 1", "slot 2"]
function BookSlot(props) {
    const [showDates, setShowDates] = useState(false)
    const [showTimes, setShowTimes] = useState(false)
    useEffect(() => {
        showDateSlots()
    }, [showDates])

    function showDateSlots(){}

    return (
        <div>
            <h1>this is Book slot page</h1>
            {/* <TableComp data={props.data}/> */}
            <label>Choose your clinic:</label>
            <SlotGroup group="clinic" handleClick={() => {
                setShowDates(true);
            }
            } data={["clinic 1", "clinic 2"]} />
            {showDates && (
                <div>
                    <label>Choose your date:</label>
                    <SlotGroup group="date" handleClick={() => {
                setShowTimes(true)}} data={props.date} />
                </div>
            )}
            {showTimes && (
                <div>
                    <label>Choose your time:</label>
                    <SlotGroup group="time" handleClick={props.setTimeSlot} data={props.time} />
                </div>
            )}
        </div>
    )
}

export default BookSlot