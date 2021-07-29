import Button from 'react-bootstrap/Button'
import { useHistory,Link } from 'react-router-dom'
import './LandingPage.css'
import img2 from './TSLogo.jpeg'
 


function LandingPage(props) {
    const h1= useHistory()
    return (
        <div id = "LandingPage">
            <table className = "Landing">
                <tr>
                    <td class = "logo">
                        <img src = {img2} alt ="" height='auto' width='auto' />
                    </td>
                    <td class = "Start">
                        <h1>Let's Begin! </h1>
                        <p>Simply key in your Flight Number and find the nearest clinic that you can book for your Covid-19 test exactly 72 hours prior to take-off.</p>
                        <Link className="link" to="/form"> <Button
                        style={{ float: 'right', backgroundColor: "purple", border: "none" }}
                        >Get started</Button></Link>

                        <p>Want to change your booking? Click the "Update booking" button.</p>
                        <Link className="link" to="/update"><Button
                        style={{ float: 'right', backgroundColor: "purple", border: "none" }}
                        >Update slot</Button></Link>

                        <p>Want to cancel your booking? Click the "Cancel booking" button.</p>
                        <Link className="link" to="/cancel"><Button
                        style={{ float: 'right', backgroundColor: "purple", border: "none" }}
                        >Cancel booking</Button></Link>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default LandingPage