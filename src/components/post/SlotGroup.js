import './SlotGroup.css'
function SlotGroup(props){
    return (
        <div>
            {
                props.data.map((slot)=>{
                    return(
                        <div>
                        <input type="radio" name={props.group} id={slot} onClick={()=>props.handleClick(slot)} hidden/>
                        <label className="bar" name={slot} htmlFor={slot}>{slot}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SlotGroup