import { useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import TableComp from '../table/TableComp'
import SlotGroup from './SlotGroup'

const mockSlots = ["slot 1", "slot 2"]
function BookSlot(props) {
  
    return (
        <div>
            <h1>this is Book slot page</h1>
            {/* <TableComp data={props.data}/> */}
            <SlotGroup handleClick={props.setTimeSlot} data={mockSlots}/>
        </div>
    )
}

export default BookSlot