import Button from 'react-bootstrap/Button'
import { useHistory,Link } from 'react-router-dom'
import './LandingPage.css'
import img2 from './TSLogo.jpeg'
 


function LandingPage(props) {
    const h1= useHistory()
    return (
        <div id = "LandingPage">
            <table className = "Landing">
                <tr style={{height:"100vh"}}>
                    <td class = "logo">
                        <img src = {img2} alt ="" height='auto' width='auto' />
                    </td>
                    <td class = "Start">
                        <h1>Let's Begin! </h1>
                        <br/>
                        <div className="padding">
                        <p className="left">Simply key in your Flight Number and find the nearest clinic that you can book for your Covid-19 test exactly 72 hours prior to take-off.</p>
                        <Link className="link right" to="/form"> <Button
                        style={{ float: 'right', backgroundColor: "purple", border: "none" }}
                        >Get started</Button></Link>
                        </div>

                        <div className="padding">
                        <p className="left">Want to edit your booking? Click the "Edit booking" button.</p>
                        <Link className="link right" to="/update"><Button
                        style={{ float: 'right', backgroundColor: "purple", border: "none" }}
                        >Edit booking</Button></Link>
                        </div>

                        <div className="padding">
                        <p className="left">Want to cancel your booking? Click the "Cancel booking" button.</p>
                        <Link className="link right" to="/cancel"><Button
                        style={{ float: 'right', backgroundColor: "purple", border: "none" }}
                        >Cancel booking</Button></Link>
                        </div>
                       
                        <div className="padding">
                        <p className="left">Want to view your swab test result? Click the "View Result" button.</p>
                        <Link className="link right" to="/view/report"><Button
                        style={{ float: 'right', backgroundColor: "purple", border: "none" }}
                        >View Result</Button></Link>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default LandingPage