import Button from 'react-bootstrap/Button'
import { useHistory,Link } from 'react-router-dom'
import './LandingPage.css'
import img2 from './TSLogo.jpeg'
 


function LandingPage(props) {
    const h1= useHistory()
    return (
        <div id = "LandingPage">
            <table class = "Landing">
                <tr>
                    <td class = "logo">
                        <img src = {img2} alt ="" height='auto' width='auto' />
                    </td>
                    <td class = "Start">
                        <h1>Let's Begin! </h1>
                        <p>Simply key in your Flight Number and find the nearest clinic that you can book for your Covid-19 test exactly 72 hours prior to take-off.</p>
                        <Button
                        style={{ float: 'right', backgroundColor: "purple", border: "none" }}
                        ><Link className="link" to="/form">Get started</Link></Button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default LandingPage