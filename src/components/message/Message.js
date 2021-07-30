import react from 'react';
import './Message.css'
import img1 from '../message/green.jpeg'; 

function Message(props){
    return(
        <div className="step-form-container">
        <div className="step-form">
            <div className = "child">
                <img src = {props.url} alt ="" height='10%' width='10%' />
                <h1>{props.title}</h1>
                <h2>{props.heading}</h2>
                {/* <h2>Your Covid-19 Test has been successfully booked at //clinic on //date at //time</h2> */}
                <h6>{props.text}</h6>
            </div>
            </div></div>
        
    )
}

export default Message ;
