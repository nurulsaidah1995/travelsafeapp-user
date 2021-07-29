import Button from 'react-bootstrap/Button'
import { useHistory,Link } from 'react-router-dom'

function LandingPage(props) {
    const h1= useHistory()
    return (
        <div>
            <h1>Travelsafe</h1>
            <p>We take your flight number to get the flight time and date to display the slots available 3 days before your flight.</p>
            <Button
            style={{ float: 'right', backgroundColor: "purple", border: "none" }}
            ><Link className="link" to="/form">Get started</Link></Button>
        </div>
    )
}

export default LandingPage