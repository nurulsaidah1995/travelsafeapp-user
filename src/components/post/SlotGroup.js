import './SlotGroup.css'
function SlotGroup(props){
    return (
        <div>
            {
                props.data.map((slot,i)=>{
                    return(
                        <div>
                        <input type="radio" name={props.group} id={slot+i} onClick={()=>props.handleClick(slot)} hidden/>
                        <label className="bar" name={slot} htmlFor={slot+i}>{slot}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SlotGroup