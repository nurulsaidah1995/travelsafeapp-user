import './SlotGroup.css'
function SlotGroup(props){
    return (
        <div>
            {
                props.data.map((slot,i)=>{
                    return(
                        <div>
                        <input type="radio" name="timeslot" id={i} onClick={()=>props.handleClick(slot)} hidden/>
                        <label class="bar" name={i} for={i}>{slot}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SlotGroup