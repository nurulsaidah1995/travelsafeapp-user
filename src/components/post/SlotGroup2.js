import './SlotGroup.css'
function SlotGroup2(props){
    return (
        <div className="row">
            {
                props.data.map((slot)=>{
                    console.log(slot)
                    return(
                        <div div className="space">
                        <input type="radio" name={props.group} id={slot.clinicID} onClick={()=>props.handleClick([slot.clinicID, slot.name, slot.address])} hidden/>
                        <label className="bar" name={slot.clinicID} htmlFor={slot.clinicID}>{slot.name}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SlotGroup2