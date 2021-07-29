import './SlotGroup.css'
function SlotGroup(props){
    return (
        <div className="row">
            {
                props.data.map((slot,i)=>{
                    return(
                        <div className="space">
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