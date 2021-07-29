import react from 'react';
import './Message.css'
import img1 from '../message/green.jpeg'; 

function Message(props){
    return(
            <div className = "child">
                <img src = {img1} alt ="" height='10%' width='10%' />
                <h1>SUCCESS</h1>
                {/* <h2>Your Covid-19 Test has been successfully booked at //clinic on //date at //time</h2> */}
                <h2>{props.text}</h2>
            </div>
        
    )
}

export default Message ;
